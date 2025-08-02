import tiket from "../tiket.json";
import { Ticket } from "../lib/tiket";

export function getTickets(): Ticket[] {
  const ticketList = tiket;
  return ticketList;
}

export function filterTickets(ticketType: boolean): Ticket[] {
  let filteredTickets = getTickets().filter((type) => type.isUsed === ticketType);
  return filteredTickets;
}
