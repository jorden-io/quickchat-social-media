import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompactPicker } from "react-color";
interface Props {}
const Home: FC<Props> = () => {
  const [user, setUser] = useState<string>("");
  const navigate = useNavigate();
  const [color, setColor] = useState<string>("");
  useEffect(() => {
    //alert(color);
  }, [color]);
  return (
    <>
      <input onChange={(e) => setUser(e.target.value)} type={"search"} />
      <button onClick={() => navigate(`/user/${user}`)}>go</button>
      <p style={{ color: color }}>home</p>
      <input
        type={"color"}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />{" "}
      pick
    </>
  );
};
export default Home;
