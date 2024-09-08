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
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "../components/atoms/Button";

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
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 6,
          borderRadius: 2,
          textAlign: "center",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Create your account. It only takes a minute.
        </Typography>
        <Box
          component="form"
          sx={{ mt: 3 }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
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
            </Grid>

            {/* Role */}
            <Grid item xs={12}>
              <FormControl fullWidth>
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
            </Grid>
          </Grid>

          {/* Sign Up Button */}
          <Box sx={{ mt: 4 }}>
            <Button
              type="submit"
              onClick={handleSignUp}
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "12px 0",
                width: "100%",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>

        {/* Login Link */}
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
