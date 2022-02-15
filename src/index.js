import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Post from "./routes/Post";
import UserProvider from "./context/UserProvider";
import RutaProtegida from "./routes/RutaProtegida";
import RequireAuth from "./components/RequireAuth";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog/:id" element={<Post />} />
            <Route path="blog" element={<Blog />} />
            <Route
              path="protegida"
              element={
                <RequireAuth>
                  <RutaProtegida />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
