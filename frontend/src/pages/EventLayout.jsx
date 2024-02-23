import React from 'react';
import EventsNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router-dom';

function EventLayout(props) {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}

export default EventLayout;