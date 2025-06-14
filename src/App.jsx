import { Headers } from "./components/generalinfo";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { CV } from "./components/cv";
import Download from "./components/downloadpdf";
import html2canvas from "html2canvas";

import "./styles/style.css";
import { useState } from "react";
import React from "react";
import { jsPDF } from "jspdf";

function App() {
  const [genInfo, setGenInfo] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({
    major: "",
    school: "",
    monthYr: "",
  });
  const [experiences, setExperiences] = useState([
    {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      responsibilities: "",
      startdate: "",
      enddate: "",
    },
  ]);

  const printRef = React.useRef(null);

  const downloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "potrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv.pdf");
  };

  function handleGenInfo(name, value) {
    let newGenInfo = { ...genInfo, [name]: value };
    setGenInfo(newGenInfo);
  }

  function handleEducation(name, value) {
    let newEducation = { ...education, [name]: value };
    setEducation(newEducation);
  }

  function handleExperience(index, e) {
    let updateExperiences = [...experiences];
    updateExperiences[index][e.target.name] = e.target.value;
    setExperiences(updateExperiences);
  }

  function addFormFields() {
    setExperiences([
      ...experiences,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }

  function removeFormFields(experience) {
    const newExperiences = [...experiences];
    newExperiences.splice(experience, 1);
    setExperiences(newExperiences);
  }

  return (
    <>
      <div className="info">
        <h2>CV Application</h2>
        <Headers
          name={genInfo.name}
          email={genInfo.email}
          phone={genInfo.phone}
          handleGenInfo={handleGenInfo}
        />
        <Education
          major={education.major}
          school={education.school}
          monthYr={education.monthYr}
          handleEducation={handleEducation}
        />
        <Experience
          experiences={experiences}
          handleExperience={handleExperience}
          addFormFields={addFormFields}
          removeFormFields={removeFormFields}
        />
        <Download downloadPDF={downloadPDF} />
      </div>
      <CV
        name={genInfo.name}
        email={genInfo.email}
        phone={genInfo.phone}
        major={education.major}
        school={education.school}
        monthYr={education.monthYr}
        handleEducation={handleEducation}
        experiences={experiences}
        printRef={printRef}
      />
    </>
  );
}

export default App;
