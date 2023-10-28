import React from "react";
// import { FaJava } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Testimonial = () => {
  return (
    <div id="testimonial">
      {/* <h2>Testimonial</h2> */}

      <section>
        {/* <TestimonialCard 
          imgSrc={<FaJava />} 
          name={"Java"} 
          feedback={""} 
        /> */}
        <TestimonialCard
          imgSrc={<SiLeetcode />}
          name={"LeetCode"}
          feedback={"Solved 300+ problems."}
        />

        <TestimonialCard
          imgSrc={<SiGeeksforgeeks />}
          name={"GeeksForGeeks"}
          feedback={"Solved 200+ problems."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ imgSrc, name, feedback }) => (
  <article>
    {/* <img
      src={imgSrc}
      alt="User"
    /> */}
    <span>{imgSrc}</span>
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);
export default Testimonial;
