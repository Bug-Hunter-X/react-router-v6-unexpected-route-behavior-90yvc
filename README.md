# React Router v6 Unexpected Route Behavior

This repository demonstrates an unexpected behavior in React Router v6 when navigating to a route that does not exist.  Instead of displaying a 404 page or a designated error component, it renders the content of the previously visited route.  This example showcases the issue and provides a solution using the `useLocation` hook and an error boundary.