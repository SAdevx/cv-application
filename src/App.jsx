import { Headers } from "./components/generalinfo";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { CV } from "./components/cv";
import Download from "./components/downloadpdf";

import "./styles/style.css";
import { useState } from "react";

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
        <Download />
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
      />
    </>
  );
}

export default App;
