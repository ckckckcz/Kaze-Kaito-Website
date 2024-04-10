import Head from "next/head";
import Layout from "../components/constants/Layout";
import Footer from "../components/footer/Footer";
import { FadeIn } from "../components/animations/FadeIn";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Kaze Kaito</title>
      </Head>

      <section className="about-hero">
        <h1>
          <h1>
            <span></span>
          </h1>
          <span>Frontend</span>
        </h1>
        <h1>
          <span>UI Design</span>
        </h1>
        <h1>
          <span>And</span>
        </h1>
        <h1>
          <span>UX</span>
        </h1>
      </section>

      <section className="intro">
        <FadeIn>
          <img src="/images/Rio.jpg" alt="Owner" className="owner" style={{ borderRadius: "20px" }} />
        </FadeIn>
        <FadeIn>
          <div className="intro-text">
            <h3>Riovaldo Alfiyan Fahmi Rahman</h3>
            <br /> <hr /> <br />
            <p>I'm passionate about UI/UX design and strive to create extraordinary user experiences. Living and pursuing dreams in the beautiful country of Indonesia.</p>
            <p>Hello mate ! I am Riovaldo Alfiyan Fahmi Rahman and I'm a student at Malang State Polytechnic, majoring in Computer Engineering. </p>
            <p>
              Let's connect and collaborate to create inspiring things together !{" "}
              <a href="https://linkedin.com/in/riovaldorahman" target="_blank">
                Linkedin
              </a>{" "}
            </p>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
