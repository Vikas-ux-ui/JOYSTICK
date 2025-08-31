import React from "react";

function PrivacyPolicy() {
  const cardStyle = {
    background: "linear-gradient(145deg, #111, #000)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(255,255,255,0.05)",
    padding: "20px",
    color: "#f1f1f1",
    transition: "all 0.3s ease-in-out",
  };

  const cardHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 0 25px rgba(255,255,0,0.2)",
  };

  const headingStyle = {
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const descStyle = {
    fontSize: "1rem",
    color: "#ccc",
  };

  const cards = [
    {
      title: "🛡️ Your Data",
      desc: "We protect your info like rare loot in a treasure chest. Your privacy matters.",
      color: "#00e0ff",
    },
    {
      title: "⚔️ Fair Play",
      desc: "Cheating is a no-go. Everyone deserves a fair fight in the arena.",
      color: "#ff4d4d",
    },
    {
      title: "🚀 Game Updates",
      desc: "We level up features regularly to make your gameplay epic.",
      color: "#4da6ff",
    },
    {
      title: "📬 Game Alerts",
      desc: "Receive important announcements, events, and secret missions directly in your feed.",
      color: "#ff66cc",
    },
    {
      title: "🕹️ User Content",
      desc: "What you create stays yours. Maybe even featured in the arena spotlight!",
      color: "#66ff66",
    },
  ];

  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "black", padding: "40px" }}
    >
      <header className="text-center mb-5">
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            color: "#FFD700",
            textShadow: "0 0 15px rgba(255,215,0,0.8)",
          }}
        >
          🎮 Game On: Rules of the Arena
        </h1>
        <p style={{ color: "#aaa", fontSize: "1.2rem" }}>
          Before diving in, here’s how we keep your adventure safe and epic.
        </p>
      </header>

      <div className="row g-4 w-100" style={{ maxWidth: "1000px" }}>
        {cards.map((card, idx) => (
          <div className="col-md-6" key={idx}>
            <div
              className="card h-100"
              style={{ ...cardStyle }}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, cardStyle)
              }
            >
              <h2 style={{ ...headingStyle, color: card.color }}>
                {card.title}
              </h2>
              <p style={descStyle}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-5">
        <h2
          style={{
            color: "#FFD700",
            fontWeight: "bold",
            fontSize: "1.8rem",
            textShadow: "0 0 10px rgba(255,215,0,0.7)",
          }}
        >
          Ready to respawn and conquer the arena? LET’S GO! 🔥
        </h2>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
