import React from "react";
import {
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage(props) {
  const { event } = useRouteLoaderData("detail-event");

  return <EventItem event={event} />;
}

export default EventDetailPage;

export async function fetchEvent({ request, params }) {
  const respone = await fetch(`http://localhost:8080/events/${params.eventId}`);
  if (!respone.ok) {
    throw json({ message: "Not fetch detail event." }, { status: 500 });
  } else {
    return respone;
  }
}

export async function deleteEvent({ request, params }) {
  const respone = await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: request.method
  });
  if (!respone.ok) {
    throw json({ message: "Not delete detail event." }, { status: 500 });
  }
  return redirect('/events');
}