import React from "react";

export const DataContext = React.createContext([]); // Default value as an empty array

// Assume fetchDummyData fetches data from an API or external source
export const fetchDummyData = async () => {
  // Implement API fetching logic here, returning a promise that resolves with data
  return [
    { id: 1, bookName: "Book 1", bookDesc: "AbcdEfgh", code: "1234", time: "04-12-2020" },
    { id: 2, bookName: "Book 2", bookDesc: "AbcdEfgh", code: "1234", time: "04-12-2020" },
    { id: 3, bookName: "Book 3", bookDesc: "AbcdEfgh", code: "1234", time: "04-12-2020" },
    { id: 4, bookName: "Book 4", bookDesc: "AbcdEfgh", code: "1234", time: "04-12-2020" },
    { id: 5, bookName: "Book 5", bookDesc: "AbcdEfgh", code: "1234", time: "04-12-2020" },
  ];
};
