import "./Home.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

function Home() {
  const addMovement = function () {
    const sections = document.querySelectorAll("section");
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
      <section className="project project--reverse">
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
      <section className="project">
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
      <section className="project project--reverse">
        <img src="./ac-gathering-preview.png" className="project__image" />
        <div>
          <h2 className="project__description">
            Engaging and fun website to display various events.{" "}
          </h2>
          <a href="https://gathering.alphacanada.org">
            <p className="project__title">Alpha Canada Gathering</p>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
