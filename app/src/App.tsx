import React, { FC, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ErrorLink, onError } from "@apollo/client/link/error";
import { BrowserRouter } from "react-router-dom";
import { useBroupsQuery } from "./generated/graphql";

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) => {
//       //alert(message);
//     });
//   }
// });

// const authLink = new ApolloLink((operation, forward) => {
//   const token = localStorage.token;
//   //CHECK
//   if (token) {
//     operation.setContext({
//       headers: {
//         authorization: token ? `bearer ${token}` : "",
//       },
//     });
//   }
//   return forward(operation);
// });
// const link = from([
//   errorLink,
//   new HttpLink({ uri: "http://localhost:4001/graphql" }),
// ]);
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: authLink.concat(link),
// });

interface Tasks {
  id: number;
  task: string;
}

interface User {
  email: string;
  id: number;
  //tasks: Tasks;
}
interface Members {
  group_id: number;
  id: number;
  member_id: number;
  users: User;
}
interface Group {
  description: string;
  group_id: number;
  group_name: string;
  leader_id: number;
  members: Members;
}

const App: FC = () => {
  const [group, setGroup] = useState<any>();
  const { data, loading } = useBroupsQuery();
  useEffect(() => {
    if (data) {
      setGroup(data.groups);
    }
  }, [data]);
  if (loading) {
    return <h2>loading</h2>;
  } else {
    return (
      //<ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <div>
            {group.group_id}
            {group.group_name}
            {group.description}
            {group.leader_id}
          </div>
        </div>
      </BrowserRouter>
      //</ApolloProvider>
    );
  }
};

export default App;
