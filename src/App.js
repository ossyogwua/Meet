import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import "./App.css";
import { extractLocations, getEvents } from "./api";

const App = () => {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents);
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} />
      <EventList events={events} />
    </div>
  );
};

export default App;
