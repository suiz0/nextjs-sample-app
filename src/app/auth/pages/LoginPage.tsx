import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LoginPageProps, UserData } from "../types";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const LoginPage = (props: LoginPageProps) => {
  const { success, beforeSending, login } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserData>({
    username: "admin",
    password: "password",
  });
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
              value={user.username}
              onChange={(ev) => setUser({ ...user, username: ev.target.value })}
            />
            <TextField
              id="outlined-disabled"
              type="password"
              fullWidth
              label="Password"
              value={user.password}
              onChange={(ev) => setUser({ ...user, password: ev.target.value })}
            />
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <LoadingButton
            variant="contained"
            color="primary"
            loading={isLoading}
            loadingPosition="end"
            endIcon={<SendIcon />}
            onClick={() => {
              setIsLoading(true);
              props.beforeSending?.();
              props
                .login(user)
                .then(props.success)
                .catch(() => setIsLoading(false));
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
