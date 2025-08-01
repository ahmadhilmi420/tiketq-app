import React from "react";
import tiket from "../tiket.json";
import { Ticket } from "../lib/tiket";
import TicketCard from "./TicketCard";

const TicketList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {tiket.map((ticket) => (
        <div key={ticket.id} className="h-full">
          <TicketCard tiket={""} {...ticket} />
        </div>
      ))}
    </div>
  );
};

export default TicketList;
