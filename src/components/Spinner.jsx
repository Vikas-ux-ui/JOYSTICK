import { PacmanLoader } from "react-spinners";
import { motion } from "framer-motion";

const Spinner = ({ loading, message = "Loading, please wait..." }) => {
  return (
    <>
      {loading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            background: "linear-gradient(135deg, #0f172a, #1e293b)", // subtle background
            color: "#fff",
          }}
        >
          {/* Animated Loader */}
          <PacmanLoader
            color="#facc15"
            loading={true}
            size={70}
            speedMultiplier={1.3}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          {/* Animated Loading Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ marginTop: "20px", fontSize: "1.2rem", fontWeight: "500" }}
          >
            {message}
          </motion.p>
        </div>
      )}
    </>
  );
};

export default Spinner;
