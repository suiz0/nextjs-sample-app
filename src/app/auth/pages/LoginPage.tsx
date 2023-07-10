import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LoginPageProps } from "../types";
import authService from "../services/authService";
import LoadingButton from "@mui/lab/LoadingButton";

const LoginPage = (props: LoginPageProps) => {
  const { success, beforeSending } = props;
  return (
    <Container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        display: "flex",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Login" />
        <CardContent>
          <Box
            sx={{
              "& .MuiTextField-root": { mb: 3 },
            }}
          >
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Username"
              value="admin"
            />
            <TextField
              id="outlined-disabled"
              type="password"
              fullWidth
              label="Password"
              value="enter"
            />
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={() => {
              props.beforeSending?.();
              authService.login();
              props.success?.();
            }}
          >
            <span>Send</span>
          </LoadingButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default LoginPage;
