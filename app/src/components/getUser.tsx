import { FC, useEffect, useState } from "react";
import { GetUserQuery, useGetUserQuery } from "../generated/graphql";
import { useParams } from "react-router-dom";
import Loading from "./loading";
import NotFound404 from "../pages/404";
interface Props {
  userName?: string;
}
const GetUser: FC<Props> = ({ userName }) => {
  const params = useParams();
  const username = params.username;
  const val: any = userName ? userName : username;
  const { data, loading } = useGetUserQuery({ variables: { userName: val } });
  const [userData, setUserData] = useState<GetUserQuery>();
  let src: string;
  useEffect(() => {
    if (data) {
      setUserData(data!);
    }
    return (): void => {
      setUserData(undefined);
    };
  }, [data]);
  const ten = 10;
  if (userData?.findUser?.__typename === undefined && !loading) {
    return <NotFound404 name={val} />;
  }
  if (userData?.findUser === undefined || loading) {
    return <Loading />;
  } else {
    src = `../images/${userData!.findUser!.avatar_src!}`;
    return (
      <>
        <div
          style={{
            marginTop: "10px",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px",
            background: `linear-gradient(to top, ${userData!.findUser!
              .profile_prefrences![0]!.background_color!} , rgb(70, 70, 70))`,
            color: "whitesmoke",
            height: "90vh",
          }}
        >
          <div>
            <h4>{userData!.findUser!.user_name!}</h4>
            <img
              style={{
                width: "100px",
                borderRadius: "100px",
                boxShadow: `0px 0px 6px ${userData!.findUser!
                  .profile_prefrences![0]!.frame_color!}`,
              }}
              src={src}
            ></img>
            <h4>{userData!.findUser!.email!} </h4>
            {userData!.findUser!.first_name!},{userData!.findUser!.last_name!}
            <hr></hr>
          </div>
          <h3>{userData!.findUser!.user_name!}'s post</h3>
          {userData!.findUser!.posts!.map((e) => {
            return (
              <>
                <div>
                  <h4>{e!.post_title!}</h4>
                  {e!.post_id!}
                  <p>{e!.post_body!}</p>
                  <p>
                    {e!.comments!.map((e) => {
                      return (
                        <>
                          <div>
                            <p>{e!.comment_body!}</p>
                            <p>{e!.user_id!}</p>
                          </div>
                        </>
                      );
                    })}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
};
export default GetUser;
