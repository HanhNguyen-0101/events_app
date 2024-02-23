import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

function EditEventPage(props) {
  const { event } = useRouteLoaderData("detail-event");
  return <EventForm event={event} />;
}

export default EditEventPage;
