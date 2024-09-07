import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      fullWidth
      sx={{
        maxWidth: "700px",
        backgroundColor: "white",
        borderRadius: "30px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "30px",
          height: "48px",
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "gray" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
