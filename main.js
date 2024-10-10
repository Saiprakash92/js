import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainBody from "./components/MainBody";
import Login from "./components/Login";
import BookDetails from "./components/BookDetails";
import "./App.css";
import { DataContext } from "./data/data";
import { fetchDummyData } from "./data/api"; // Assume this function fetches data from an API or similar source

function App() {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDummyData(); // Fetching data
      setDummyData(data);
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider value={dummyData}>
      <div className="App">
        <main>
          <Routes>
            <Route path="/dashboard" element={<MainBody data={dummyData} />} />
            <Route path="/" element={<Login />} />
            <Route path="/books/:id" element={<BookDetails />} />
          </Routes>
        </main>
      </div>
    </DataContext.Provider>
  );
}

export default App;
