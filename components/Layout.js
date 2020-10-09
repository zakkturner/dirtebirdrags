import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
