import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Gatekeep iPhone semiotics, gentrify polaroid prism food truck
            fashion axe distillery vegan air plant cupping praxis. Tofu ennui
            Brooklyn, franzen occupy quinoa kickstarter locavore. Poutine godard
            cronut freegan tacos PBR&B paleo letterpress iPhone pinterest cloud
            bread seitan. DSA squid copper mug, YOLO gatekeep pitchfork
            messenger bag XOXO kitsch bicycle rights. Post-ironic la croix af
            cornhole narwhal.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
