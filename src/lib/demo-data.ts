export type MemberStatus = "active" | "pending_payment" | "past_due" | "canceled";

const names = [
  "Avery Carter", "Jordan Brooks", "Morgan Ellis", "Riley Bennett", "Casey Foster",
  "Taylor Morgan", "Cameron Hayes", "Parker Reed", "Quinn Stewart", "Jamie Collins",
  "Drew Parker", "Emerson Bell", "Skyler Grant", "Reese Murphy", "Finley Ward",
  "Alexis Price", "Rowan Kelly", "Hayden Ross", "Blair Jenkins", "Dakota Perry",
  "Sage Turner", "Marley Cooper", "Kendall Bailey", "Robin Hughes", "Lane Bryant",
];

export const demoMembers = names.map((name, i) => {
  const status: MemberStatus = i < 20 ? "active" : i < 22 ? "pending_payment" : i < 24 ? "past_due" : "canceled";
  const first = name.split(" ")[0].toLowerCase();
  return {
    id: `demo-${String(i + 1).padStart(3, "0")}`,
    memberNumber: `GM-2026-${String(1001 + i).padStart(6, "0")}`,
    name,
    phone: `(803) 555-${String(1000 + i).slice(-4)}`,
    email: `${first}.${i + 1}@example.com`,
    address: `${118 + i * 7} Demo Oak Way, ${i % 3 === 0 ? "Columbia" : i % 3 === 1 ? "Lugoff" : "Blythewood"}, SC`,
    plan: i % 3 === 0 ? "Fast Lane" : "Cruise Control",
    status,
    joined: `Aug ${String(27 - (i % 21)).padStart(2, "0")}, 2026`,
    joinedTime: `${9 + (i % 8)}:${i % 2 ? "42" : "17"} AM`,
    lastPayment: status === "active" ? `$${i % 3 === 0 ? "40.00" : "30.00"}` : status === "pending_payment" ? "Pending" : "Failed",
    leadSource: ["Google", "Facebook", "Referral", "Website"][i % 4],
  };
});

export const serviceRequests = [
  { id: "SR-1048", customer: "Avery Carter", type: "Pit Stop fill-up", preferred: "Aug 28", status: "New" },
  { id: "SR-1047", customer: "Morgan Ellis", type: "Fleet consultation", preferred: "Aug 29", status: "Contacted" },
  { id: "SR-1046", customer: "Quinn Stewart", type: "Member delivery", preferred: "Aug 27", status: "Scheduled" },
  { id: "SR-1045", customer: "Jamie Collins", type: "Boat fill-up", preferred: "Aug 26", status: "Completed" },
];

export const faqs = [
  ["How does The Gas Man work?", "Schedule a fill-up online and The Gas Man comes to your location with a mobile fuel truck. Your vehicle is fueled safely while you get on with your day."],
  ["Where do you deliver?", "The current published service area includes Columbia, Blythewood, Elgin, Lugoff, Camden, and nearby areas. Call if you are just outside those locations."],
  ["Do I need to be present?", "No. Your gas door needs to be accessible, your vehicle must be parked in a safe spot, and the delivery truck must be able to position within approximately 15 feet."],
  ["What fuel types are available?", "The Gas Man currently lists Regular Unleaded, Premium, and Diesel."],
  ["How does membership billing work?", "The monthly membership fee is charged on your enrollment date and renews monthly. Fuel is billed separately based on the gallons delivered."],
  ["Can businesses and fleets use the service?", "Yes. Scheduled on-site fueling is available for local fleets, contractors, and service vehicles, with digital logs and monthly reporting."],
];

