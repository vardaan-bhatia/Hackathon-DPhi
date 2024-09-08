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
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "../components/atoms/Button";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = () => {
    console.log("Logging in with", { email, password });
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
          Login
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Welcome back! Please enter your credentials to log in.
        </Typography>
        <Box
          component="form"
          sx={{ mt: 3 }}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
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
          <Box sx={{ mt: 4 }}>
            <Button
              type="submit"
              onClick={handleLogin}
              sx={{
                backgroundColor: "#44924C",
                color: "#fff",
                width: "100%",
                padding: "12px 0",
                "&:hover": {
                  backgroundColor: "#357a40",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mt: 4 }}>
          New user?{" "}
          <Link
            href="/signup"
            sx={{ color: "#1976d2", textDecoration: "underline" }}
          >
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
