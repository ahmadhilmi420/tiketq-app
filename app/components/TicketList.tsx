import React from "react";
import tiket from "../tiket.json";
import TicketCard from "./TicketCard";
import { Ticket } from "../lib/tiket";

// Define the props for the TicketList component
// It expects an array of Ticket objects
import { getTickets } from "../components/service";
interface TicketListProps {
  tiket: Ticket[];
}

const TicketList: React.FC<TicketListProps> = ({ tiket }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tiket.map((ticket) => (
          <div key={ticket.id} className="h-full">
            <TicketCard ticket={ticket} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TicketList;
