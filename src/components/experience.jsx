import { useState } from "react";

function Experience() {
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
      

  const [show, setShow] = useState(false);

  function showMore() {
    setShow(!show);
  }

  function handleChange(index, e) {
    let updateExperiences = [...experiences];
    updateExperiences[index][e.target.name] = e.target.value;
    setExperiences(updateExperiences);
  }

  function addFormFields(){
      setExperiences([...experiences,{id: crypto.randomUUID(),company: "", position: "",responsibilities: "",startDate: "",endDate: ""}]);
  }

  function removeFormFields(experience){
      const newExperiences = [...experiences];
      newExperiences.splice(experience,1);
      setExperiences(newExperiences);
  }

   return (
    <>
      <button onClick={showMore}>Experience</button>
      {show && (
        <div>
            <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
           { experiences.map((experience, index) => (
             <div key={experience.id}>
              <div>
                <input
                  name = "company"
                  onChange={e => handleChange(index,e)}
                  value={experience.company || ""}
                  placeholder="company"
                />
              </div>
              <div>
                <input
                 name = "position"
                  onChange={e => handleChange(index,e)}
                  value={experience.position || ""}
                  placeholder="position"
                />
              </div>
              <div>
                <input
                name = "responsibilities"
                   onChange={e => handleChange(index,e)}
                  value={experience.responsibilities || ""}
                  placeholder="responsibilities"
                />
              </div>
              <div>
                <input
                 name = "startdate"
                  onChange={e => handleChange(index,e)}
                  value={experience.startdate || ""}
                  placeholder="start-date"
                />
              </div>
              <div>
                <input
                 name = "enddate"
                  onChange={e => handleChange(index,e)}
                  value={experience.enddate || ""}
                  placeholder="end-date"
               />
              </div>
              {index?  <button onClick={removeFormFields}>DELETE</button> : null}
            </div>
            ))}
            </form>
            <button type="button" onClick={addFormFields}>ADD</button>
        </div>
      )}
    </>
  );
}

export { Experience };
