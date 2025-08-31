import React from "react";
import { Route, Routes } from "react-router-dom";

// Normal imports for all pages
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import PrivacyPolicy from "../pages/ PrivacyPolicy.jsx";
import Store from "../pages/Store.jsx";
import Signup from "../Info/Signup.jsx";
import YourStore from "../pages/YourStore.jsx";
import CategoryDetails from "../components/CategoryDetails.jsx";
import GameDetails from "../components/GameDetails.jsx";
import Search from "../components/Search.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/your-store" element={<YourStore />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/game-details/:id" element={<GameDetails />} />
      <Route path="/category/:id" element={<CategoryDetails />} />
      <Route path="/search/:query" element={<Search />} />
      <Route
        path="*"
        element={
          <h1 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
            404 | Page Not Found
          </h1>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
