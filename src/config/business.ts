export const business = {
  name: "The Gas Man",
  legalName: "The Gas Man LLC",
  tagline: "Stay Fueled. Stay Moving.",
  description: "Local, family-run mobile fuel delivery for households, boats, and fleets in the Greater Columbia area.",
  phone: "(803) 461-1414",
  phoneHref: "+18034611414",
  email: "info@thegasmanfuel.com",
  city: "Columbia",
  state: "SC",
  // TODO(owner): Confirm a publishable street address before adding a map or mailing address.
  address: null as string | null,
  serviceAreas: ["Columbia", "Blythewood", "Elgin", "Lugoff", "Camden"],
  hours: [
    { days: "Monday–Friday", hours: "7 AM–7 PM" },
    { days: "Saturday", hours: "8 AM–12 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61580913907189",
    instagram: "https://www.instagram.com/thegasmanfuel/",
  },
  membershipName: "The Gas Man Membership",
  colors: { navy: "#082a3f", blue: "#087cad", orange: "#f36a21", cream: "#f4f0e7" },
} as const;

export const membershipPlans = [
  { id: "cruise-control", name: "Cruise Control", monthlyPrice: 30, vehicles: 1, fillUps: 4, description: "Built for busy schedules.", featured: false },
  { id: "fast-lane", name: "Fast Lane", monthlyPrice: 40, vehicles: 2, fillUps: 6, description: "Built for families on the go.", featured: true },
] as const;

