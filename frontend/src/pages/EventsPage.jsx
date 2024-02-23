import React from "react";
import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;

export async function fetchData() {
  const respone = await fetch("http://localhost:8080/events");
  if (!respone.ok) {
    throw json({message: "Something went wrong!!!"}, {status: 500});
  } else {
    const resData = await respone.json();
    return resData.events;
  }
}
