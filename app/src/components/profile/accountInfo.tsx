import { FC } from "react";
import { Link } from "react-router-dom";
import "../../scss/pages/register.css";
import FormWrapper from "./formWrapper";
type UserData = {
  email: string;
  password: string;
  userName: string;
};
type AccountInfoProps = UserData & {
  email: string;
  password: string;
  userName: string;
  updateFields: (fields: Partial<UserData>) => void;
};
const AccountInfo: FC<AccountInfoProps> = ({
  email,
  password,
  userName,
  updateFields,
}: AccountInfoProps) => {
  return (
    <>
      <FormWrapper title="account info">
        <div className="account-info-container">
          <div className="account-info-inner-container">
            <input
              type={"email"}
              required
              placeholder="email"
              value={email}
              onChange={(e) => {
                updateFields({ email: e.target.value });
              }}
            />
            <br></br>
            <input
              type={"password"}
              required
              placeholder="password"
              value={password}
              onChange={(e) => {
                updateFields({ password: e.target.value });
              }}
            />
            <br></br>
            <input
              type={"text"}
              required
              placeholder="username"
              value={userName}
              onChange={(e) => {
                updateFields({ userName: e.target.value });
              }}
            />
            <br></br>
            <p>
              already have an account? <Link to={"/login"}>login</Link>
            </p>
          </div>
        </div>
      </FormWrapper>
    </>
  );
};
export default AccountInfo;
