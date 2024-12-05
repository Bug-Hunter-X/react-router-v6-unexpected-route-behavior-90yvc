```javascript
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>No match for <code>{location.pathname}</code></p>
    </div>
  );
}
```