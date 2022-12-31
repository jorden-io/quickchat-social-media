import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/loading";
import { useLoginMutation } from "../generated/graphql";
import "../scss/pages/login.css";
interface Props {}
const Login: FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, { data, loading }] = useLoginMutation();
  const handleLogin = () => {
    login({
      variables: {
        email: email,
        password: password,
      },
    });
    if (data) {
      localStorage.setItem("token", data!.login!);
      window.location.reload();
      while (loading) {
        return <Loading />;
      }
    }
  };
  return (
    <>
      <div className="login-form-container">
        <h1>log in</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            required
            type={"email"}
            placeholder={"enter email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type={"password"}
            placeholder={"enter password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>
            <span>login</span>
          </button>
        </form>
        <p>
          dont have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "lightseagreen" }}
            to={"/register"}
          >
            register
          </Link>{" "}
        </p>
      </div>
    </>
  );
};
export default Login;
