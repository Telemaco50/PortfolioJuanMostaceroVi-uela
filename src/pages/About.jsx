import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='w-full' style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
      <div className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span style={{color: "#F2AB27" }} className=' font-semibold drop-shadow'>
          {" "}
          Juan Mostacero Viñuela
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3' style={{ color: "#CCCCCC" }}>
        <p>
          Software Engineer based in Spain, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3' style={{ color: "#CCCCCC" }}>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  background: "#000000", // Fondo negro
                  color: "#FFFFFF", // Texto blanco
                }}
              >
                <div>
                  <h3 style={{ color: "#FFFFFF", fontSize: "1.25rem", fontWeight: "600" }}>
                    {experience.title}
                  </h3>
                  <p
                    style={{ color: "#FFFFFF", fontWeight: "500", margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      style={{ color: "#FFFFFF", fontWeight: "400", paddingLeft: "0.25rem", fontSize: "0.875rem" }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr style={{ borderColor: "#333333" }} />

      <CTA />
      </div>
    </section>
  );
};

export default About;