import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface ChallengeDetailsFormProps {
  onClose: () => void;
}

const ChallengeDetailsForm: React.FC<ChallengeDetailsFormProps> = ({
  onClose,
}) => {
  const [challengeName, setChallengeName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [levelType, setLevelType] = useState("Easy");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      challengeName,
      startDate,
      endDate,
      description,
      levelType,
      fileName,
    });
    onClose();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Challenge Name"
        value={challengeName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChallengeName(e.target.value)
        }
        sx={{ mb: 3 }}
      />
      <TextField
        fullWidth
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setStartDate(e.target.value)
        }
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      <TextField
        fullWidth
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEndDate(e.target.value)
        }
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 3 }}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Description"
        value={description}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
        sx={{ mb: 3 }}
      />
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
        sx={{ mb: 2, backgroundColor: "#013440", color: "white" }}
      >
        Upload Image
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      {fileName && (
        <Typography
          sx={{ mb: 2, fontSize: "0.875rem", color: "text.secondary" }}
        >
          Selected file: {fileName}
        </Typography>
      )}
      <Select
        fullWidth
        value={levelType}
        onChange={(e: SelectChangeEvent) => setLevelType(e.target.value)}
        sx={{ mb: 3 }}
      >
        <MenuItem value="Easy">Easy</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Hard">Hard</MenuItem>
      </Select>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#013440",
          color: "white",
          fontWeight: 700,
          fontSize: "1rem",
          padding: "10px 20px",
          borderRadius: "8px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#024b5a",
          },
        }}
      >
        Create Challenge
      </Button>
    </Box>
  );
};

export default ChallengeDetailsForm;
