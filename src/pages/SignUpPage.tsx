import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Box,
  Paper,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  MenuItem,
  Select,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "../components/atoms/Button"; // Importing reusable Button

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSignUp = () => {
    console.log("Signing up with", {
      firstName,
      lastName,
      email,
      password,
      role,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 6,
          borderRadius: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Create your account. It's free and only takes a minute.
        </Typography>
        <Box
          component="form"
          sx={{ mt: 3 }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
          />
          <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ mt: 4 }}>
            <Button
              type="submit"
              onClick={handleSignUp}
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "12px 0",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mt: 4 }}>
          Already have an account?{" "}
          <Link
            href="/login"
            sx={{ color: "#1976d2", textDecoration: "underline" }}
          >
            Login
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
