import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { AppProvider } from "./context/AppContext";
import Head from "next/head";
export default function Layout(props) {
  return (
    <AppProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </AppProvider>
  );
}
