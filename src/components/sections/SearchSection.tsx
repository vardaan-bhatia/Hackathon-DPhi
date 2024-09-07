import React from "react";
import SearchBar from "../atoms/SearchBar";
import FilterModal from "../atoms/FilterModal";
import CardSection from "./CardSection";

const SearchSection: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#002A3B",
        color: "#fff",
        padding: "32px 80px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", margin: "0", marginBottom: "24px" }}>
        Explore Challenges
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
          padding: "",
        }}
      >
        <SearchBar />
        <FilterModal />
      </div>
      <CardSection />
    </div>
  );
};

export default SearchSection;
