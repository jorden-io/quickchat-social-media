import React, { FC, ReactNode } from "react";
interface Props {
    title: string
    children: ReactNode
}
const FormWrapper: FC<Props> = ({title, children}) => {
  return (
    <>
      <div className={"form-wrapper"}>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </>
  );
};
export default FormWrapper;
