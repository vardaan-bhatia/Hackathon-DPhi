import React from "react";
import { Box } from "@mui/material";
import Stat from "../atoms/Stat";
import AI from "../../assets/images/AI.svg";
import contact from "../../assets/images/stat_contact.svg";
import stat from "../../assets/images/stat.svg";

const StatsSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#002A3B",
        padding: "40px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "80%",
          maxWidth: "1200px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stat
            icon={
              <img
                src={AI}
                alt="AI Icon"
                style={{ width: "50px", height: "50px" }}
              />
            }
            number="100K+"
            description="AI model submissions"
          />
          {/* Vertical Line Separator */}
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "#ffffff",
              margin: "0 80px",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stat
            icon={
              <img
                src={contact}
                alt="Data Scientist Icon"
                style={{ width: "50px", height: "50px" }}
              />
            }
            number="50K+"
            description="Data Scientists"
          />
          {/* Vertical Line Separator */}
          <Box
            sx={{
              width: "1px",
              height: "40px",
              backgroundColor: "#ffffff",
              margin: "0 80px",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Stat
            icon={
              <img
                src={stat}
                alt="AI Challenges Icon"
                style={{ width: "50px", height: "50px" }}
              />
            }
            number="100+"
            description="AI Challenges hosted"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StatsSection;
