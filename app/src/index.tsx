import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, ApolloLink, from, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import {ErrorLink, onError} from "@apollo/client/link/error"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      //alert(message);
    });
  }
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.token;
  //CHECK
  if (token) {
    operation.setContext({
      headers: {
        authorization: token ? `bearer ${token}` : "",
      },
    });
  }
  return forward(operation);
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:4001/graphql" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
