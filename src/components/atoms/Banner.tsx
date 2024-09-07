import React from "react";
import { Box, Typography } from "@mui/material";

interface BannerProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, icon }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F4FB",
        padding: "2rem",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        gap: "1rem",
        maxWidth: "560px",
        margin: "0 auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add transition
        "&:hover": {
          transform: "scale(1.05)", // Scale up slightly
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)", // Add shadow
        },
      }}
    >
      {icon && (
        <Box
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
      )}
      <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "#666", fontWeight: "bold" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Banner;
