import "./Home.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

function Home() {
  const addMovement = function () {
    const sections = document.querySelectorAll("section");
    const bodyTag = document.querySelector("body");
    const topViewport = window.pageYOffset;
    const midViewport = topViewport + window.innerHeight / 2;

    // find middle of each section
    sections.forEach((section, index) => {
      const topSection = section.offsetTop;
      const midSection = topSection + section.offsetHeight / 2;

      // distance of section from the visible area of the page
      const distanceToSection = midViewport - midSection;

      // pick tags to parallax
      const image = section.querySelector("img");
      const content = section.querySelector("div");

      // weight down distance
      let rotation = distanceToSection / 100;
      let contentDist = (-1 * distanceToSection) / 3;

      // for all even sections rotate the other way
      if (index % 2 == 1) {
        rotation = rotation * -1;
      }

      // apply parallax
      if (image) {
        image.style.transform = `rotate(${rotation}deg)`;
      }
      if (content) {
        content.style.top = `${contentDist}px`;
        content.style.transform = `rotate(${-1 * rotation}deg)`;
      }

      // check background colour
      if (distanceToSection > -100) {
        const dataBackground = section.getAttribute("data-background");
        if (bodyTag) {
          bodyTag.style.backgroundColor = dataBackground || "#f0f5ff";
        }
      }
    });
  };

  useEffect(() => {
    addMovement();
  }, []);

  document.addEventListener("scroll", function () {
    addMovement();
  });

  window.addEventListener("resize", function () {
    addMovement();
  });

  return (
    <>
      <Header />
      <section className="project">
        <img src="./app-preview.png" className="project__image" />
        <div>
          <h2 className="project__description">
            Find prayers and Bible verses related to how you're feeling each
            day.
          </h2>
          <a href="https://prayer-library.ca" target="_blank">
            <p className="project__title">Prayer Library</p>
          </a>
        </div>
      </section>
      <section className="project project--reverse" data-background="#F0FAFF">
        <img src="./kitmine-preview.png" className="project__image" />
        <div>
          <h2 className="project__description">Playful e-commerce site. </h2>
          <a href="https://kitmine.shop">
            <p className="project__title">kit mine</p>
          </a>
        </div>
      </section>
      <section className="project" data-background="#F0FEFF">
        <img src="./map-preview.png" className="project__image" />
        <div>
          <h2 className="project__description">
            Canada wide map of high schools where users can sign up to pray for
            schools.
          </h2>
          <a href="https://map.alphacanada.org" target="_blank">
            <p className="project__title">High School Prayer Map</p>
          </a>
        </div>
      </section>
      <section className="project project--reverse" data-background="#F4F0FF">
        <img src="./guest-preview.png" className="project__image" />
        <div>
          <h2 className="project__description">
            Individual guest invitation pages course adminstrators can use to
            invite and register guests.
          </h2>
          <a
            href="https://guest.alphacanada.org/a0sOK000000tAoLYAU"
            target="_blank"
          >
            <p className="project__title">Guest invitation page</p>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
