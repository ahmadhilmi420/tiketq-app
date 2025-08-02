import Card from "./ui/Card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import tiket from "../tiket.json";
import { Ticket } from "../lib/tiket";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <>
      <div className="max-w-full border p-4 rounded-lg shadow-md card mb-4" key={ticket.id}>
        <Card className="h-full transition-transform hover:scale-105 cursor-pointer">
          <div className="relative w-full h-48 mb-4 bg-gray-200 rounded-md overflow-hidden">{/* <Image src={image_url} alt={eventName} fill style={{ objectFit: "cover" }} /> */}</div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{ticket.eventName}</h3>
          <p className="text-sm text-gray-600 mb-2">{ticket.location}</p>
          <span className="text-sm text-gray-500">{ticket.time}</span>
          <br />
          <span className={`text-sm ${ticket.isUsed ? "text-red-500" : "text-green-500"}`}>{ticket.isUsed ? "Used" : "Available"}</span>
        </Card>
        {/* <Link href={`${ticket.id}`} className="absolute inset-0"></Link> */}
      </div>
    </>
  );
};

export default TicketCard;
