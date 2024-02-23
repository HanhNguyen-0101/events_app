import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

function NewEventPage(props) {
  return <EventForm method="POST" />;
}

export default NewEventPage;

export async function addEvent({ request }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };

  const respone = await fetch("http://localhost:8080/events", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  });
  if (!respone.ok) {
    throw json({ message: "Something went wrong!!!" }, { status: 500 });
  }
  return redirect('/events');
}
