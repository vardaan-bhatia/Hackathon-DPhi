import React from "react";
import { Box, Typography } from "@mui/material";
import Banner from "../atoms/Banner";
import robot from "../../assets/images/Robot.svg";
import skill from "../../assets/images/prove_skill.svg";
import recognition from "../../assets/images/recognition.svg";
import vector from "../../assets/images/Vector.svg";

const BannerSection: React.FC = () => {
  return (
    <Box sx={{ padding: "4rem 10rem", textAlign: "center" }}>
      {/* Section Title */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          Why Participate in{" "}
          <span style={{ color: "#44924c" }}>AI Challenges?</span>
        </Typography>
      </Box>
      {/* Banners in a Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          rowGap: "2rem",
          columnGap: "0.5rem",
          justifyItems: "center",
        }}
      >
        <Banner
          title="Prove your skills"
          subtitle="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
          icon={
            <img
              src={skill}
              alt="Prove your skills"
              style={{ width: "50px", height: "50px" }}
            />
          }
        />
        <Banner
          title="Learn from the community"
          subtitle="One can look and analyze the solutions submitted by other Data Scientists in the community and learn from them."
          icon={
            <img
              src={recognition}
              alt="Learn from the community"
              style={{ width: "50px", height: "50px" }}
            />
          }
        />
        <Banner
          title="Challenge yourself"
          subtitle="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
          icon={
            <img
              src={robot}
              alt="Challenge yourself"
              style={{ width: "50px", height: "50px" }}
            />
          }
        />
        <Banner
          title="Earn recognition"
          subtitle="You will stand out from the crowd if you do well in AI challenges; it not only helps you shine in the community but also earns rewards."
          icon={
            <img
              src={vector}
              alt="Earn recognition"
              style={{ width: "50px", height: "50px" }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default BannerSection;
