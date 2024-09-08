import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import fifth from "../../assets/images/fifth.png";
import { Link } from "react-router-dom";

const CardSection: React.FC = () => {
  const cardsData = [
    {
      title: "Data Science Bootcamp - Graded Datathon",
      description: "Join our bootcamp and learn from the best.",
      status: "Upcoming",
      time: { days: 0, hours: 15, minutes: 22 },
      image: first,
      buttonText: "Participate Now",
    },
    {
      title: "Data Sprint 72 - Butterfly Identification",
      description: "Test your skills in identifying butterfly species.",
      status: "Upcoming",
      time: { days: 0, hours: 12, minutes: 34 },
      image: second,
      buttonText: "Participate Now",
    },
    {
      title: "Data Sprint 71 - Weather Recognition",
      description: "Predict weather patterns using machine learning.",
      status: "Active",
      time: { days: 1, hours: 17, minutes: 10 },
      image: fifth,
      buttonText: "Participate Now",
    },
    {
      title: "Data Sprint 71 - Weather Recognition",
      description: "Predict weather patterns using machine learning.",
      status: "Active",
      time: { days: 1, hours: 17, minutes: 10 },
      image: fifth,
      buttonText: "Participate Now",
    },
    {
      title: "Data Sprint 71 - Weather Recognition",
      description: "Predict weather patterns using machine learning.",
      status: "Active",
      time: { days: 1, hours: 17, minutes: 10 },
      image: fifth,
      buttonText: "Participate Now",
    },
    {
      title: "Data Sprint 71 - Weather Recognition",
      description: "Predict weather patterns using machine learning.",
      status: "Active",
      time: { days: 1, hours: 17, minutes: 10 },
      image: fifth,
      buttonText: "Participate Now",
    },
  ];

  return (
    <Grid container spacing={4} sx={{ padding: 8 }}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            sx={{
              width: 354,
              height: 473,
              borderRadius: 4,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              overflow: "hidden",
              padding: 0, // Ensure no extra padding
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%", // Ensure the image takes up the full width
                height: "175px", // Fixed height for the image
                borderRadius: "15px 15px 0 0",
                objectFit: "cover",
                display: "block", // Remove any extra space below the image
              }}
            />
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                backgroundColor: "#FCF1D2",
                borderRadius: "4px",
                padding: "2px 15px",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              {card.status}
            </Typography>

            <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
              {card.description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <span style={{ fontWeight: "bold" }}>{card.time.days}</span> Days{" "}
              <span style={{ fontWeight: "bold" }}>{card.time.hours}</span>{" "}
              Hours{" "}
              <span style={{ fontWeight: "bold" }}>{card.time.minutes}</span>{" "}
              Mins
            </Typography>
            <Link to={"/managehackathon"}>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#44924C",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#357a40",
                  },
                }}
              >
                {card.buttonText}
              </Button>
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSection;
