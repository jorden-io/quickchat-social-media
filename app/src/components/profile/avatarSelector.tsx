import { FC } from "react";
import FormWrapper from "./formWrapper";
type AvatarSelector = {
  avatarSrc: string;
};
type UserFormProps = AvatarSelector & {
  avatarSrc: string;
  updateFields: (fields: Partial<AvatarSelector>) => void;
};
const AvatarSelector: FC<UserFormProps> = ({ avatarSrc, updateFields }) => {
  return (
    <>
      <FormWrapper title="select avatar">
        <div className="img-container">
          <img
            src="../images/boy.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "boy.jpeg" });
            }}
          ></img>
          <img
            src="../images/girl.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "girl.jpeg" });
            }}
          ></img>
          <img
            src="../images/gothgirl1.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "gothgirl1.jpeg" });
            }}
          ></img>
          <img
            src="../images/pinkanimegirl.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "pinkanimegirl.jpeg" });
            }}
          ></img>
          <img
            src="../images/wazardgirl.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "wizardgirl.jpeg" });
            }}
          ></img>
          <img
            src="../images/nekoboy.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "nekoboy.jpeg" });
            }}
          ></img>
          <img
            src="../images/wizardguy.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "wizardguy.jpeg" });
            }}
          ></img>
          <img
            src="../images/butterflyboy.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "butterflyboy.jpeg" });
            }}
          ></img>
          <img
            src="../images/boy.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "boy.jpeg" });
            }}
          ></img>
          <img
            src="../images/boy.jpeg"
            onClick={() => {
              updateFields({ avatarSrc: "boy.jpeg" });
            }}
          ></img>
        </div>
      </FormWrapper>
    </>
  );
};
export default AvatarSelector;
