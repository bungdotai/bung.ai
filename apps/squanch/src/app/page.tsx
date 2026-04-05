import LiftCharts from "./components/LiftCharts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-8">
      {!session && (
        <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 text-center">
          <p className="text-neutral-300">
            <a href="/login" className="text-blue-400 hover:underline font-medium">
              Log in
            </a>{" "}
            to add your lifts
          </p>
        </div>
      )}
      <LiftCharts />
    </div>
  );
}
