import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useUserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const { addUserData } = useUserContext();

  const onSubmit = (data) => {
    addUserData(data);
    navigate("/");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="Email"
                  name="Email"
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  autoFocus
                  {...register("Email", { required: true })}
                  error={errors.username && errors.username.type === "required"}
                  helperText={
                    errors.username &&
                    errors.username.type === "required" && (
                      <Typography
                        className="errorMsg"
                        sx={{ fontSize: "14px" }}
                      >
                        Email is required.
                      </Typography>
                    )
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", { required: true })}
                  error={errors.password && errors.password.type === "required"}
                  helperText={
                    errors.password &&
                    errors.password.type === "required" && (
                      <Typography
                        className="errorMsg"
                        sx={{ fontSize: "14px" }}
                      >
                        Password is required.
                      </Typography>
                    )
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
