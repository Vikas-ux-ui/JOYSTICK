import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

import AppRoutes from "./routes/AppRoutes.jsx";
import Footer from "./components/Footer.jsx";
import MyNavbar from "./components/Navbar.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#0e0e10",
          }}
        >
          {/* Top Navbar */}
          <MyNavbar />

          {/* Main content grows to fill remaining space */}
          <main style={{ flex: "1 0 auto", paddingTop: "20px" }}>
            <AppRoutes />
          </main>

          {/* Footer always at the bottom */}
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;



<BrowserRouter>
    <Provider store={store}>
      <MyNavbar />
      <App />
      <Footer />
    </Provider>
  </BrowserRouter>