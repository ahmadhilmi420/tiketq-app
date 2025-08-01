import { useState } from "react";
export interface Ticket {
  id: number;
  eventName: string;
  location: string;
  time: string;
  isUsed: boolean;
}
