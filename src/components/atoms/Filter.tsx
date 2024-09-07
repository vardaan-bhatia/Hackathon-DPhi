import React from "react";
import Button from "./Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface FilterProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Filter: React.FC<FilterProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "48px",
        borderRadius: "18px",
        padding: "8px 16px",
        border: "1px solid #000",
        backgroundColor: "white",
        color: "black",
        width: "150px",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      Filter
      <ArrowDropDownIcon />
    </Button>
  );
};

export default Filter;
