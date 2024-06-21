import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        {/* tova w-full dolu, koeto e ravno na width: 100% e sprqmo roditelq, t.e. div-a (shte zaema 100%
        v nego) */}
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            voluptates! Enim, libero. Modi unde est pariatur maiores eaque fugit
            laudantium ducimus repudiandae, deserunt, impedit rerum. Rerum
            accusamus minus non nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque cupiditate corrupti quos. Illo incidunt
            adipisci dolorum ad ipsa vero id quia est, perferendis reiciendis
            exercitationem sint libero laborum quos tempora.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
