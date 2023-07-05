import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useUserContext } from "../../Context/userContext";

const defaultTheme = createTheme();

export default function SignIn() {
  const { logIn } = useUserContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let userInfo = {
      username: data.get("Email"),
      password: data.get("password"),
    };

    logIn(userInfo);
  };

  return (
    <>
    <Container component="main" maxWidth="sm">
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
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 20 }}
          >
            <label>Email : </label>
            <TextField
              autoComplete="Email"
              name="Email"
              required
              fullWidth
              id="Email"
              autoFocus
            />
            <br /><br />   
            <label>Password : </label>
            <TextField
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> <br />   <br />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                 <b>{"Don't have an account? Sign Up"}</b>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
