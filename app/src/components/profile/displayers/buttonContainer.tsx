import { FC, useState } from "react";
import { BsGear, BsPlusLg, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
interface Props {}
const ProfileButtonContainer: FC<Props> = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  return (
    <>
      <div className={"profile-button-container"}>
        <button className={"profile-create-btn"}>
          <BsPlusLg />
        </button>
        <button
          onMouseLeave={() =>
            setTimeout(() => {
              setOpen(false);
            }, 300)
          }
          onMouseEnter={() => setOpen(true)}
          style={{
            cursor: user === "" ? "default" :  "pointer",
            color: user === "" ? "" : "white",
            paddingRight: open ? "140px" : "",
          }}
          className={"profile-search-btn"}
        >
          <BsSearch
            onClick={() => {
              user === "" ? console.log("empty") : navigate(`/user/${user}`);
            }}
          />
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            placeholder={"search users"}
            style={{ display: open ? "inline" : "none" }}
          />
        </button>
        <button className={"profile-edit-btn"}>
          <BsGear />
        </button>
      </div>
    </>
  );
};
export default ProfileButtonContainer;
