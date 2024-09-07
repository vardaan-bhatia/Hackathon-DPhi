import React from "react";
import { Popover, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Filter from "./Filter";

const FilterModal: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Filter onClick={handleClick} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div style={{ padding: "16px", width: "300px" }}>
          <FormGroup>
            <h4>Status</h4>
            <FormControlLabel control={<Checkbox />} label="All" />
            <FormControlLabel control={<Checkbox />} label="Active" />
            <FormControlLabel control={<Checkbox />} label="Upcoming" />
            <FormControlLabel control={<Checkbox />} label="Past" />
          </FormGroup>
          <hr
            style={{
              margin: "16px 0",
              border: "none",
              borderTop: "1px solid #d0d0d0",
            }}
          />
          <FormGroup>
            <h4>Level</h4>
            <FormControlLabel control={<Checkbox />} label="Easy" />
            <FormControlLabel control={<Checkbox />} label="Medium" />
            <FormControlLabel control={<Checkbox />} label="Hard" />
          </FormGroup>
        </div>
      </Popover>
    </>
  );
};

export default FilterModal;
