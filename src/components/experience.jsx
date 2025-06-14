import { useState } from "react";

function Experience({
  experiences,
  handleExperience,
  addFormFields,
  removeFormFields,
}) {
  const [show, setShow] = useState(false);

  function showMore() {
    setShow(!show);
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
            {experiences.map((experience, index) => (
              <div key={experience.id}>
                <div>
                  <input
                    name="company"
                    onChange={(e) => handleExperience(index, e)}
                    value={experience.company || ""}
                    placeholder="company"
                  />
                </div>
                <div>
                  <input
                    name="position"
                    onChange={(e) => handleExperience(index, e)}
                    value={experience.position || ""}
                    placeholder="position"
                  />
                </div>
                <div>
                  <input
                    name="responsibilities"
                    onChange={(e) => handleExperience(index, e)}
                    value={experience.responsibilities || ""}
                    placeholder="responsibilities"
                  />
                </div>
                <div>
                  <input
                    name="startdate"
                    onChange={(e) => handleExperience(index, e)}
                    value={experience.startdate || ""}
                    placeholder="start-date"
                  />
                </div>
                <div>
                  <input
                    name="enddate"
                    onChange={(e) => handleExperience(index, e)}
                    value={experience.enddate || ""}
                    placeholder="end-date"
                  />
                </div>
                {index >= 0 ? (
                  <button onClick={() => removeFormFields(index)}>
                    DELETE
                  </button>
                ) : null}
              </div>
            ))}
          </form>
          <button type="button" onClick={addFormFields}>
            ADD
          </button>
        </div>
      )}
    </>
  );
}

export { Experience };