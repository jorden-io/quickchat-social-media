import React, { FC } from "react";
interface Props {
  name?: string;
}
const NotFound404: FC<Props> = ({ name }) => {
  return (
    <>
      <div>
        <h1>no username matching, {name}</h1>
      </div>
    </>
  );
};
export default NotFound404;
