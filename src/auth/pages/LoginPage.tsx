import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LoginPageProps } from "../types";
import authService from "../services/authService";

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
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              props.beforeSending?.();
              authService.login();
              props.success?.();
            }}
          >
            Go
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default LoginPage;
