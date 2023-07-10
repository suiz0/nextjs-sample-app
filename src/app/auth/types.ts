export interface LoginPageProps {
  beforeSending?: () => void;
  success?: () => void;
  login: (data: UserData) => Promise<any>;
}

export interface UserData {
  username: string;
  password: string;
}
