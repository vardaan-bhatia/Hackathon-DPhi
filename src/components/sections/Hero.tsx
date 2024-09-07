import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import heroImage from "../../assets/images/PicsArt_04-14-04.42 1.svg";

const Hero = () => {
  const navigate = useNavigate();

  const handleCreateChallenge = () => {
    navigate("/create-challenge");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#013440",
        color: "white",
        padding: "0 10%",
        height: "100vh",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", alignItems: "flex-start" }}>
        <Box
          sx={{
            backgroundColor: "#FFCA42",
            width: "1.8rem",
            height: "120px",
            marginRight: "2rem",
          }}
        />
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 6,
              fontWeight: "bold",
              fontSize: "3rem",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
            }}
          >
            Accelerate Innovation with Global AI Challenges
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: "1.3rem", lineHeight: 1.4 }}
          >
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </Typography>
          <Button
            onClick={handleCreateChallenge}
            sx={{
              backgroundColor: "white",
              color: "#013440",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "10px 20px",
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            Create Challenge
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <img
          src={heroImage}
          alt="AI Challenge"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
