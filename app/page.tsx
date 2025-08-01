import Image from "next/image";
import TicketCard from "./components/TicketCard";
export default function Home() {
  return (
    <section className="bg-gradient-to-br from-purple-500 to-blue-500 min-h-screen">
      <div className="container mx-auto p-8">
        <main className="flex flex-col items-center sm:items-start justify-between mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome to TiketQ</h1>
          <p className="text-lg mb-2">Your one-stop solution for event ticketing.</p>
          <div className="w-full rounded-lg shadow-lg">
            <TicketCard tiket={""} id={0} eventName={""} location={""} time={""} isUsed={false} />
          </div>
        </main>
      </div>
    </section>
  );
}
