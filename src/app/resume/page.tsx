import React from "react";

const ResumePage = () => {
  return (
    <section className="flex wrap justify-start flex-col">
      <h1 className="flex justify-center text-white font-bold text-4xl mt-6">
        WORK EXPERIENCE
      </h1>
      <div id="Blind Section" className="m-4 flex flex-wrap flex-col gap-4">
        <div id="Blind head">
          <h2 className="text-white">
            <a
              className="text-lg hover:text-sky-500"
              href="https://www.teamblind.com/"
            >
              Blind.com
            </a>
          </h2>
          <h3 className="text-white italic">
            Engineering Internship 2023 - present
          </h3>
        </div>
        <div id="Blind body" className="flex flex-col gap-2">
          <p className="text-white">
            - Designed and implemented user-friendly web pages to enhance user
            experience, resulting in increased user engagement and improved
            conversion rates.
          </p>
          <p className="text-white">
            - Employed best practices in user interface (UI) and user experience
            (UX) design, including responsive design, intuitive navigation,
            clear calls to action, and optimized page load times.{" "}
          </p>
          <p className="text-white">
            - Utilized HTML, JavaScript, React, NextJS, and TailwindCSS to
            create visually appealing and interactive web interfaces that met
            client specifications and exceeded user expectations.
          </p>
          <p className="text-white">
            - Collaborated with team members to brainstorm ideas for improving
            website performance and security using Jira and GitHub.
          </p>
        </div>
      </div>

      <div className="text-white bg-slate-600">DIFF section</div>
    </section>
  );
};

export default ResumePage;
