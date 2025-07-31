import tiket from "../tiket.json";
import React from "react";

export default function ProductPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Product Page</h1>
      <ul>
        {tiket.map(({ id, eventName, location, time, isUsed }) => {
          return (
            <div className="w-full flex grid grid-cols-2 gap-4 sm:grid-cols-3 border p-4 rounded-lg shadow-md card" key={id}>
              <li key={id} className="my-2">
                <strong className="text-lg font-semibold text-gray-800">{eventName}</strong>
                <br />
                <i className="text-gray-600">{location}</i>
                <br />
                <span className="text-gray-500">{time}</span>
                <br />
                <a className={`status-tiket ${isUsed ? "text-red-500" : "text-green-500"}`}>{isUsed ? "Used" : "Available"}</a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
