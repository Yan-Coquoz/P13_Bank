import { createData } from "../Utils";

export const datas = [
  {
    image: "../assets/icon-chat.png",
    title: "You are our #1 priority",
    texte:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    image: "../assets/icon-money.png",
    title: "More savings means higher rates",
    texte: "The more you save with us, the higher your interest rate will be!",
  },
  {
    image: "../assets/icon-security.png",
    title: "Security you can trust",
    texte:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export const rows = [
  createData("June 20th, 2020", "Golden Sun Backery", 5.0, 2082.79),
  createData("June 20th, 2020", "Golden Sun Backery", 10.0, 2087.79),
  createData("June 20th, 2020", "Golden Sun Backery", 20.0, 2097.79),
  createData("June 20th, 2020", "Golden Sun Backery", 30.0, 2117.79),
  createData("June 20th, 2020", "Golden Sun Backery", 40.0, 2147.79),
  createData("June 20th, 2020", "Golden Sun Backery", 50.0, 2187.79),
];
export const tableHeaders = [
  { name: "date" },
  { name: "description" },
  { name: "amount" },
  { name: "balance" },
];

export const dataAmounts = [
  {
    title: "Checking",
    amount: "2,082.79",
    deal: 8349,
    type: "Available",
    linkId: 1,
  },
  {
    title: "Savings",
    amount: "10,928.42",
    deal: 67124,
    type: "Available",
    linkId: 2,
  },
  {
    title: "Credit Card",
    amount: "2,082.79",
    deal: 5201,
    type: "Current",
    linkId: 3,
  },
];
