import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/constants/Layout";
import Productions from "../components/productions/Productions";
import { TextReveal, TextRevealPinned } from "../components/animations/TextReveal";
import { Parallax, ParallaxOverflow } from "../components/animations/Parallax";
import { FadeIn, FadeInStagger } from "../components/animations/FadeIn";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ReelModal from "../components/modal/ReelModal";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    let video = document.querySelector("video");
    window.addEventListener("scroll", function () {
      let value = 0.7 + window.scrollY / -1000;
      video.style.opacity = value;
    });
  }, []);

  const [open, setOpen] = useState(false);

  const plus = useRef();
  const overlay = useRef();
  useEffect(() => {
    gsap.to(plus.current, {
      scale: 100,
      //force3D: false,
      scrollTrigger: {
        trigger: overlay.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <Layout>
      <section className="landing full-bleed">
        <video className="video-full-screen" poster="/images/showreel.png" src="/images/showreel.mp4" muted playsInline autoPlay loop />

        <div className="linear-gradient-div"></div>

        <div className="landing-content">
          <h1 className="landing-content-title">
            <span className="wrapper-span">
              <span>K</span>
              <span>a</span>
              <span>z</span>
              <span>e</span>
            </span>
          </h1>
          <h1 className="landing-content-title">
            <span className="wrapper-span">
              <span>K</span>
              <span>a</span>
              <span>i</span>
              <span>t</span>
              <span>o</span>
            </span>
          </h1>
        </div>
      </section>

      <section className="self-intro">
        <TextReveal>
          <p>
            Hi mate ! Welcome to <br />
            Kaze Kaito Website
          </p>
          <p>
            I'm interested in UI/UX Design and <br />
            Web Front-End in Indonesia.
          </p>
        </TextReveal>
      </section>

      <section className="skills">
        <TextRevealPinned>
          <h3>My Skills ?</h3>
          <h3>UI Designer</h3>
          <h3>Web Front-End</h3>
          <h3>UX Designer</h3>
          <h3></h3>
        </TextRevealPinned>
        <Parallax>
          <div id="img-wrapper_1-1" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 6.jpg" objectFit="contain" width="1366" height="570" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-2" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO1.jpg" objectFit="contain" width="600" height="700" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-3" className="image-wrapper" data-speed="0.2">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 2.jpg" objectFit="contain" width="519" height="700" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_1-4" className="image-wrapper" data-speed="0.9">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 5.jpg" objectFit="contain" width="750" height="850" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-1" className="image-wrapper" data-speed="0.7">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 9.jpg" objectFit="contain" width="1080" height="2000" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-2" className="image-wrapper" data-speed="0.6">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 11.jpg" objectFit="contain" width="1000" height="1000" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-3" className="image-wrapper" data-speed="0.5">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 4.jpg" objectFit="contain" width="750" height="1000" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_2-4" className="image-wrapper" data-speed="1.2">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 3.jpg" objectFit="contain" width="640" height="1200" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-1" className="image-wrapper" data-speed="0.8">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 10.jpg" objectFit="contain" width="480" height="1000" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-2" className="image-wrapper" data-speed="1.2">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 7.jpg" objectFit="contain" width="640" height="1500" loading="eager" />
            </ParallaxOverflow>
          </div>
          <div id="img-wrapper_3-3" className="image-wrapper" data-speed="1.1">
            <ParallaxOverflow>
              <Image src="/images/skills/FOTO 8.jpg" objectFit="contain" width="800" height="1000" loading="eager" />
            </ParallaxOverflow>
          </div>
        </Parallax>
      </section>

      <section className="brands">
        <FadeIn>
          <p>
            “ You may be able to delay, but time will not wait. ” <br />
            <br /> - Benjamin Franklin
          </p>
        </FadeIn>
        <FadeInStagger>
          <img src="/images/brands/Leko.png	" alt="Leko Logo" className="Leko" />
          <img src="/images/brands/Alexi.png" alt="Alexi Logo" className="Alexi" />
          <img src="/images/brands/Pengaduan.png" alt="Pengaduan Logo" className="Pengaduan" />
          <img src="/images/brands/GondesEducation.png" alt="Gondes Education Logo" className="Gondes" />
          <img src="/images/brands/CarRent.png" alt="Rental Mobil Logo" className="Rent" />
          <img src="/images/brands/PintarPath.png" alt="Pintar Path Logo" className="Pintar" />
          <img src="/images/brands/Maloka.png" alt="Maloka Logo" className="Maloka" />
        </FadeInStagger>
      </section>

      <section className="featured-productions full-bleed">
        <div className="overlay" ref={overlay}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4519 3213" preserveAspectRatio="xMidYMid slice" className="plus" ref={plus}>
            <path
              fill="black"
              d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <Productions />
      </section>
    </Layout>
  );
}
