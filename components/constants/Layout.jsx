import Head from "next/head";
import Navigation from "../header/navigation/Navigation";
import Logo from "../header/logo/Logo";
import Footer from "../footer/Footer";
import FooterV2 from "../footerV2/FooterV2";
import Fullscreen from "../fullscreen/Fullscreen";
import ContactModal from "../modal/ContactModal";

// css transform breaks the 'position: fixed' rule

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Head>
        <title>Kaze Kaito</title>
        <link rel="icon" href="/images/Kaito.ico" />
      </Head>
      <Logo />
      <Navigation />
      {children}
      <Footer />
      <Fullscreen />
      <ContactModal />
    </div>
  );
}
