"use client";
import React from "react";
import { useState, useEffect } from "react";
import TicketList from "./components/TicketList";
import { getTickets, filterTickets } from "./components/service";
import { Ticket } from "./lib/tiket";

export default function Home() {
  const [tiket, setTiket] = useState<Ticket[] | null>(null);
  useEffect(() => {
    setTiket(getTickets());
  }, []);

  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>(tiket || []);

  function handleTickets(e: { target: { value: any } }) {
    let typeTickets = e.target.value;
    typeTickets !== "all" ? setFilteredTickets(filterTickets(typeTickets === "used" ? true : false)) : setFilteredTickets(getTickets());
  }

  return (
    <>
      <section className="bg-gradient-to-br from-purple-500 to-blue-500 min-h-screen">
        <div className="container mx-auto p-8">
          <main className="flex flex-col items-center sm:items-start justify-between mb-8">
            <h1 className="text-4xl font-bold mb-2">Welcome to TicketQ</h1>
            <p className="text-lg mb-2">Your one-stop solution for event ticketing.</p>
            <div className="w-full rounded-lg shadow-lg border-2 border-gray-300 p-8">
              <div className="flex justify-between items-center mb-4 p-6 bg-white rounded-t-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-950">Filter Tickets</h2>
                <select onChange={handleTickets} className="p-2 rounded-lg border border-gray-800 text-blue-950">
                  <option value="all">All Tickets</option>
                  <option value="used">Used Tickets</option>
                  <option value="available">Available Tickets</option>
                </select>
              </div>
              <h4 className="text-2xl font-bold mb-4">{filteredTickets.length} Tickets Found</h4>
              <TicketList tiket={filteredTickets} />
            </div>
          </main>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 TiketQ. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
