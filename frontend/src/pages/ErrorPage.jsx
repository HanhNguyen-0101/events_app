import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage(props) {
    const errorObj = useRouteError();
    let title = "Error";
    let message = "Some thing went wrong!";

    if (errorObj.status === 500) {
        message = errorObj.data.message;
    } else if (errorObj === 400) {
        title = 'Page Not Found';
        message = errorObj.data.message;
    }
    return (
        <div>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
}

export default ErrorPage;