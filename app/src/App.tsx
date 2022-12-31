import { createContext, FC, useEffect, useMemo, useState } from "react";
import "./scss/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GetUser from "./components/getUser";
import Home from "./pages/Home";
import Nav from "./components/navBar";
import { MeQuery, useMeQuery } from "./generated/graphql";
import Loading from "./components/loading";
import Guard from "./components/guard";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
export const GlobalContext = createContext<MeQuery>({});
const App: FC = () => {
  const { data, loading } = useMeQuery();
  const [me, setMe] = useState<MeQuery>();
  useEffect(() => {
    setMe(data);
    return () => {
      setMe({});
    };
  }, [data]);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <GlobalContext.Provider value={me!}>
        <BrowserRouter>
          {me === undefined ? (
            ""
          ) : (
            <Nav
              avatar_src={me!.me!.avatar_src!}
              gender={me!.me!.gender!}
              id={me!.me!.id!}
              user_name={me!.me!.user_name!}
            />
          )}
          <div className={"main"}>
            <Routes>
              {me?.me === undefined ? (
                  <Route>
                  <Route path="*" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  </Route>
              ) : (
                <Route element={<Guard />}>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/user/:username" element={<GetUser />} />
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NoPage />} /> :
                </Route>
              )}
            </Routes>
          </div>
        </BrowserRouter>
      </GlobalContext.Provider>
    );
  }
};

export default App;
