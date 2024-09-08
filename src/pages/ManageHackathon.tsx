import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Button from "../components/atoms/Button";
import Header from "../components/sections/Header";
import {
  AccessTime as AccessTimeIcon,
  SignalCellularAlt as SignalCellularAltIcon,
} from "@mui/icons-material";

const ButterflyIdentificationPage = () => {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Header />
      <Box sx={{ bgcolor: "#003145", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          {/* Start Date */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              bgcolor: "#ffb703",
              color: "black",
              p: 0.5,
              borderRadius: 4,
              width: "fit-content",
            }}
          >
            <AccessTimeIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              Starts on 17th Jun'22 09:00 PM (India Standard Time)
            </Typography>
          </Box>

          {/* Title */}
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Data Sprint 72 - Butterfly Identification
          </Typography>

          {/* Subtitle */}
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Identify the class to which each butterfly belongs to
          </Typography>

          {/* Difficulty */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              color: "black",
              p: 0.8,
              borderRadius: 4,
              width: "fit-content",
            }}
          >
            <SignalCellularAltIcon sx={{ mr: 1 }} />
            <Typography variant="body2">Easy</Typography>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          width: "1440px",
          height: "66px",
          position: "relative",
          borderTop: "0.3px solid rgba(0, 0, 0, 0.1)",
          mt: "4px",
          ml: "-1px",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1440px",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Button
              sx={{
                color: "#003145",
                fontWeight: "bold",
                textDecoration: "none",
                "&:hover": { bgcolor: "transparent" },
                width: "133px",
                height: "53px",
                position: "absolute",
                ml: "60px",
                left: "126px",
                top: "0",
                pt: "12px",
                pr: "6px",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "0",
                  width: "100%",
                  height: "3px",
                  bgcolor: "#44924C",
                },
              }}
            >
              Overview
            </Button>
            <Box
              sx={{
                position: "absolute",
                right: "126px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Button
                sx={{
                  bgcolor: "#44924C",
                  color: "white",
                  mr: 2,
                  "&:hover": { bgcolor: "#357a3b" },
                }}
              >
                Edit
              </Button>
              <Button
                sx={{
                  bgcolor: "transparent",
                  color: "#DC1414",
                  border: "1px solid #DC1414",
                  "&:hover": { bgcolor: "rgba(220, 20, 20, 0.1)" },
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Overview Content */}
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "#333333" }}
          >
            Overview
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#333333" }}>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#333333" }}>
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </Typography>
          <Typography variant="body1" sx={{ color: "#333333" }}>
            Your Task is to build an Image Classification Model using CNN that
            classifies which class of weather each image belongs to.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ButterflyIdentificationPage;
