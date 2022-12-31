import { FC, useContext, useReducer, useState } from "react";
import "../scss/pages/register.css";
import {
  useRegisterMutation,
  //useUpdateProfilePrefrencesMutation,
  useLoginMutation,
  useCreateProfilePrefrenceMutation,
} from "../generated/graphql";
import { GlobalContext } from "../App";
import useMultistepForm from "../hooks/useMultistepFrom";
import UserInfo from "../components/profile/userInfo";
import AvatarSelector from "../components/profile/avatarSelector";
import AccountInfo from "../components/profile/accountInfo";
import { GiSpaceSuit } from "react-icons/gi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdCheckmark,
} from "react-icons/io";
import Loading from "../components/loading";
import UpdateProfilePrefrences from "../components/profile/updateProfile";
import { useNavigate } from "react-router-dom";
interface Props {}
type FormData = {
  avatarSrc: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  password: string;
  userName: string;
};
const INIT_STATE: FormData = {
  avatarSrc: "",
  email: "",
  firstName: "",
  gender: "",
  lastName: "",
  password: "",
  userName: "",
};
const Register: FC<Props> = () => {
  const me = useContext(GlobalContext);
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState(INIT_STATE);
  const updateFields = (fields: Partial<FormData>) => {
    setRegisterData((pre) => {
      return { ...pre, ...fields };
    });
  };
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <AccountInfo {...registerData} updateFields={updateFields} />,
      <UserInfo {...registerData} updateFields={updateFields} />,
      <AvatarSelector {...registerData} updateFields={updateFields} />,
    ]);
  const [register] = useRegisterMutation();
  const [login, { data, loading }] = useLoginMutation();
  const [createProfilePrefrences] = useCreateProfilePrefrenceMutation();
  const handleCreateProfilePrefrences = (user_id: number): void => {
    createProfilePrefrences({
      variables: {
        createProfilePrefrenceInput: {
          accent_color: "",
          background_color: "",
          frame_color: "",
          user_id: user_id,
        },
      },
    });
  };
  const [close, setClose] = useState<boolean>(true);
  const handleRegister = () => {
    register({
      variables: {
        avatarSrc: registerData.avatarSrc,
        email: registerData.email,
        firstName: registerData.firstName,
        gender: registerData.gender,
        lastName: registerData.lastName,
        password: registerData.password,
        userName: registerData.userName,
      },
    })
      .then((data) => {
        setClose(false);
        handleCreateProfilePrefrences(data.data?.register.id!);
      })
      .then(() => {
        login({
          variables: {
            email: registerData.email,
            password: registerData.password,
          },
        }).then((data) => {
          if (data) {
            localStorage.setItem("token", data!.data!.login!);
            while (loading) {
              return <Loading />;
            }
            // navigate("/profile");
            // window.location.reload();
          }
        });
        //setClose(false);
      })
      .finally(() => {});
  };
  if (!close) {
    return (
      <>
        <h2>select profile prefrences</h2>
        <UpdateProfilePrefrences user_id={28} />;
        <button
          onClick={() => {
            navigate("/profile");
            window.location.reload();
          }}
        >
          no
        </button>
      </>
    );
  } else {
    return (
      <>
        <div style={{ display: "block" }}>
          <h1>register</h1>
          <form className="main-register-form">
            <div style={{ marginTop: "15px" }}>
              <span>{currentStepIndex + 1} </span> - {steps.length}
            </div>
            {step}
            <div className="register-form-navigator-btns">
              {!isFirstStep && (
                <button type="button" onClick={back}>
                  <IoIosArrowBack />
                </button>
              )}
              <button
                style={!isLastStep ? {} : { color: "lightseagreen" }}
                type="button"
                onClick={() => (isLastStep ? handleRegister() : next())}
              >
                {isLastStep ? <IoMdCheckmark /> : <IoIosArrowForward />}
              </button>
            </div>
          </form>
          <GiSpaceSuit className="space-man" />
        </div>
      </>
    );
  }
};
export default Register;
