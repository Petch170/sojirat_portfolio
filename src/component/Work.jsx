import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "Feb 2021- June 2021",
    title: "Sales",
    company: "Delta vet.,Co.th",
    details: [
      "Proactively seek and engage new customers to drive business growth.",
      "Efficiently manage reception order, quotation creation, and departmental coordination.",
      "Conduct product training for client companies, ensuring effective client engagement and satisfaction.",
    ],
  },
  {
    year: "Oct 2019- Jan 2021",
    title: "Purchase, admin officer",
    company: "System P.,Co.th ",
    details: [
      "Proficient in procurement bidding and E-bidding management.",
      "Oversaw domestic IT/Gadget purchases, fostering departmentalcollaboration.",
      "Engaged in a compelling project with the National Hardware Store,overseeing server network maintenance. Generated intriguing andtimely monthly reports, and actively contributed to documentpreparation.",
    ],
  },
  {
    year: "Jul 2013- Nov 2018",
    title: "Accountant",
    company: "P.S.Accounting & Business Office",
    details: [
      "Proficient in Express accounting software, specializing in comprehensive records management.",
      "Proven ability to meet deadlines while overseeing accounting operations for 11 companies and 2 subsidiaries.",
      "Collaborate seamlessly with internal departments, handle diverse responsibilities, contributing to overall workflow efficiency",
    ],
  },
];

const Work = () => {
  return (
    <div id="work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-blue-300">Work</h1>
      {data.map((item, i) => (
        <WorkItem
          key={i}
          year={item.year}
          title={item.title}
          company={item.company}
          details={item.details}
        //   details={item.details.map((detail) => ({ detail }))}
        />
      ))}
    </div>
  );
};

export default Work;
