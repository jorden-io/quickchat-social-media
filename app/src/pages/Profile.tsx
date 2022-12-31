import { FC, useContext } from "react";
import { GlobalContext } from "../App";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import "../scss/pages/profile.css";
import UpdateProfilePrefrences from "../components/profile/updateProfile";
import ButtonContainer from "../components/profile/displayers/buttonContainer";
interface Props {}
const Profile: FC<Props> = () => {
  const profileData = useContext(GlobalContext);
  console.log(profileData)
  const src: string = `../images/${profileData.me!.avatar_src}`;
  return (
    <>
      <ButtonContainer />
      <div
        style={{
          marginTop: "10px",
          height: "100vh",
          background: `linear-gradient(to top, ${profileData!.me!
            .profile_prefrences![0]!.background_color!} , rgb(70, 70, 70) 75%)`,
        }}
      >
        <div className="profile-container">
          <img
            style={{
              boxShadow: `0px 0px 5px ${
                profileData.me!.profile_prefrences![0]!.frame_color
              }`,
            }}
            src={src}
          ></img>
          <h2>{profileData.me?.user_name}</h2>
          <h3>
            {profileData.me?.gender === "boy" ? (
              <BsGenderMale />
            ) : (
              <BsGenderFemale />
            )}
          </h3>
          <p>{profileData.me?.online ? "online" : "offline"} </p>
          <hr></hr>
          <div className="profile-metadata-container">
            <a>posts {profileData.me?.posts?.length}</a>
            <a>followers</a>
            <a>following</a>
          </div>
          <div className="bio-container">
            <input placeholder={"bio"} />
          </div>
          <div>
            <button>posts</button>
            <button>wall</button>
          </div>
          <hr></hr>
        </div>
        <UpdateProfilePrefrences user_id={profileData.me?.id!} />
      </div>
    </>
  );
};
export default Profile;
