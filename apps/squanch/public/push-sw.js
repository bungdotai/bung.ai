self.addEventListener('push', function (event) {
  if (!event.data) return;
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: { url: data.url },
    vibrate: [200, 100, 200],
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const rawUrl = event.notification.data?.url || '/';
  // Always use an absolute URL to avoid about:blank on Android
  const url = rawUrl.startsWith('http') ? rawUrl : self.location.origin + rawUrl;
  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(function (clientList) {
        // Find an existing window on our origin that we can focus and navigate
        for (const client of clientList) {
          if (client.url.startsWith(self.location.origin) && 'focus' in client) {
            return client.focus().then(function () {
              if ('navigate' in client) return client.navigate(url);
            });
          }
        }
        // No existing window — open a new one
        return clients.openWindow(url);
      })
  );
});
