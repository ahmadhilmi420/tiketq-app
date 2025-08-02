import React from "react";
// This component is used to filter tickets based on certain criteria
// It can be extended to include more complex filtering logic in the future
import Card from "./ui/Card";
import { Ticket } from "../lib/tiket";
interface FilterCardProps {
  tickets: Ticket[];
}

const FilterCard: React.FC<FilterCardProps> = ({ tickets }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">Filter Tickets</h2>
      <div className="flex flex-col">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="mb-2">
            <label className="mb-1">
              <span className="inline-block mr-2" />
              <input type="list" className="mr-2" />
              {ticket.isUsed ? " (Sold)" : " (Available)"}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
