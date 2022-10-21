import './login.css';

interface LoginProps {
  test?: string;
}

const Login: React.FC<LoginProps> = () => (
  <div className="test">this is login page</div>
);

export default Login;
