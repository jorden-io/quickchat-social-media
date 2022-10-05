import { FieldMiddleware } from "@nestjs/graphql"
import { MyContext } from "./MyContext";
import { verify } from "jsonwebtoken";
export const isAuth: FieldMiddleware<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];
  if (!authorization) {
    throw new Error("not authenticated");
  }
  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, "binanc256");
    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error("not authenticated");
  }
  return next();
};