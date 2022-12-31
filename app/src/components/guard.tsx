import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
interface Props {}
const Guard: FC<Props> = () => {
  const allow: boolean = true;
  return allow ? <Outlet /> : <Login /> || <Register />;
};
export default Guard;
