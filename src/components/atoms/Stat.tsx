import React from "react";
import { Box, Typography } from "@mui/material";

type StatProps = {
  icon: React.ReactNode;
  number: string;
  description: string;
};

const Stat: React.FC<StatProps> = ({ icon, number, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          marginRight: "16px",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "4px", color: "#ffffff" }}
        >
          {number}
        </Typography>
        <Typography variant="body2" sx={{ color: "#ffffff" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Stat;
