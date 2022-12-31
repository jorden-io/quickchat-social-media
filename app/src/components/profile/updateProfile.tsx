import { FC, useState } from "react";
import { useUpdateProfilePrefrencesMutation } from "../../generated/graphql";
import "../../scss/pages/profile.css";
interface Props {
  user_id: number;
}
const UpdateProfilePrefrences: FC<Props> = ({ user_id }) => {
  const [updateProfilePrefence, { data, loading }] =
    useUpdateProfilePrefrencesMutation();
  const [accentColor, setAccentColor] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [frameColor, setFrameColor] = useState<string>("");
  const handleUpdate = () => {
    updateProfilePrefence({
      variables: {
        updateProfilePrefrenceInput: {
          user_id: user_id,
          accent_color: accentColor,
          background_color: backgroundColor,
          frame_color: frameColor,
        },
      },
    });
  };
  return (
    <>
      <div className="profile-prefrences-changer-container">
        <form>
          <input
            type={"color"}
            onChange={(e) => {
              setAccentColor(e.target.value);
            }}
          />{" "}
          set accent color
          <input
            type={"color"}
            onChange={(e) => {
              setBackgroundColor(e.target.value);
            }}
          />{" "}
          set background color
          <input
            type={"color"}
            onChange={(e) => {
              setFrameColor(e.target.value);
            }}
          />{" "}
          set frame color
        </form>
        <button onClick={handleUpdate}></button>
      </div>
    </>
  );
};
export default UpdateProfilePrefrences;
