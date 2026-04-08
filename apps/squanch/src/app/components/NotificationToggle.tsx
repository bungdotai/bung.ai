"use client";

import { useEffect, useState } from "react";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

export default function NotificationToggle() {
  const [supported, setSupported] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;
    setSupported(true);

    navigator.serviceWorker.register("/push-sw.js").then(async (reg) => {
      const sub = await reg.pushManager.getSubscription();
      if (!sub) {
        setLoading(false);
        return;
      }
      const res = await fetch(`/api/push/status?endpoint=${encodeURIComponent(sub.endpoint)}`);
      const data = await res.json();
      setSubscribed(data.subscribed);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const toggle = async () => {
    setLoading(true);
    try {
      const reg = await navigator.serviceWorker.ready;

      if (subscribed) {
        const sub = await reg.pushManager.getSubscription();
        if (sub) {
          await fetch("/api/push/unsubscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ endpoint: sub.endpoint }),
          });
          await sub.unsubscribe();
        }
        setSubscribed(false);
      } else {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
          setLoading(false);
          return;
        }
        const sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
          ),
        });
        await fetch("/api/push/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sub.toJSON()),
        });
        setSubscribed(true);
      }
    } catch (err) {
      console.error("Push toggle failed:", err);
    }
    setLoading(false);
  };

  if (!supported || loading) return null;

  return (
    <button
      onClick={toggle}
      title={subscribed ? "Disable notifications" : "Enable notifications"}
      className={`text-lg transition ${subscribed ? "text-amber-400 hover:text-amber-300" : "text-neutral-500 hover:text-neutral-300"}`}
    >
      {subscribed ? "🔔" : "🔕"}
    </button>
  );
}
