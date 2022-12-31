import { FC } from "react";
import FormWrapper from "./formWrapper";
import { BsGenderTrans, BsGenderFemale, BsGenderMale } from "react-icons/bs";
type UserInfoData = {
  firstName: string;
  lastName: string;
  gender: string;
};
type UserFormProps = UserInfoData & {
  firstName: string;
  lastName: string;
  gender: string;
  updateFields: (fields: Partial<UserInfoData>) => void;
};
const UserInfo: FC<UserFormProps> = ({
  firstName,
  gender,
  lastName,
  updateFields,
}) => {
  return (
    <>
      <FormWrapper title="user details">
        <div className="user-detail-container">
          <input
            placeholder="first name"
            value={firstName}
            onChange={(e) => {
              updateFields({ firstName: e.target.value });
            }}
          />
          <br></br>
          <input
            placeholder="last name"
            value={lastName}
            onChange={(e) => {
              updateFields({ lastName: e.target.value });
            }}
          />
        </div>
        <br></br>
        <div className="gender-selector-container">
          <a>
            <BsGenderMale
              style={
                gender === "boy"
                  ? {
                      border: "solid 1px lightseagreen",
                      boxShadow: "0px 0px 5px lightseagreen",
                    }
                  : {}
              }
              onClick={() => {
                updateFields({ gender: "boy" });
              }}
            />
            <BsGenderFemale
              style={
                gender === "girl"
                  ? {
                      border: "solid 1px lightseagreen",
                      boxShadow: "0px 0px 5px lightseagreen",
                    }
                  : {}
              }
              onClick={() => {
                updateFields({ gender: "girl" });
              }}
            />
            <BsGenderTrans
              style={
                gender === "trans"
                  ? {
                      border: "solid 1px lightseagreen",
                      boxShadow: "0px 0px 5px lightseagreen",
                    }
                  : {}
              }
              onClick={() => {
                updateFields({ gender: "trans" });
              }}
            />
          </a>
        </div>
      </FormWrapper>
    </>
  );
};
export default UserInfo;
