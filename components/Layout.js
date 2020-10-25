import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import client from "./ApolloClient";
import { AppProvider } from "./context/AppContext";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import Head from "next/head";
export default function Layout(props) {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Head>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossorigin="anonymous"
            />
          </Head>
          <Header />
          {props.children}
          <Footer />
        </ApolloHooksProvider>
      </ApolloProvider>
    </AppProvider>
  );
}
