import React, { FC, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./App";
import useFetch from "./hooks/useFetch";
interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface Props {}
const Fetched: FC<Props> = () => {
  const [state, setState] = useState<User[]>([]);
  const { data, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  useEffect(() => {
    if (data) {
      setState(data);
    } else {
      console.log(error);
    }
    return () => {
      setState([]);
    };
  }, [data]);
  return (
    <>
      <div>
        {state.map((e) => {
          return (
            <>
              <div>
                <p>{e.title}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Fetched;
