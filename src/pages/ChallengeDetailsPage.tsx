import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ChallengeDetailsForm from "../components/atoms/ChallengeDetailsForm";
import { useNavigate } from "react-router-dom";

const ChallengeDetailsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: "white", minHeight: "100vh", padding: "2rem 10%" }}
    >
      <Box sx={{ maxWidth: "800px" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: "bold",
            fontSize: "2rem",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: "#013440",
          }}
        >
          Challenge Details
        </Typography>
        <ChallengeDetailsForm onClose={handleClose} />
      </Box>
    </Container>
  );
};

export default ChallengeDetailsPage;
