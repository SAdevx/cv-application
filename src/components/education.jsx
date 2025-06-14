import { useState } from "react";

export default function Education({ school, major, monthYr, handleEducation }) {
  const [show, setShow] = useState(false);

  function showMore() {
    setShow(!show);
  }

  return (
    <>
      <button onClick={showMore}>Education</button>
      {show && (
        <form>
          <div>
            <input
              name="major"
              onChange={(e) => handleEducation(e.target.name, e.target.value)}
              value={major}
              placeholder="Major"
            />
          </div>
          <div>
            <input
              name="school"
              onChange={(e) => handleEducation(e.target.name, e.target.value)}
              value={school}
              placeholder="School"
            />
          </div>
          <div>
            <input
              name="monthYr"
              onChange={(e) => handleEducation(e.target.name, e.target.value)}
              value={monthYr}
              placeholder="startdate-enddate"
            />
          </div>
        </form>
      )}
    </>
  );
}

export { Education };
