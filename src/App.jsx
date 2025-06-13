import {Headers} from './components/generalinfo';
// import {Education} from './components/education';
// import { Experience } from './components/experience';
import { CV } from './components/cv';
// import Download from './components/downloadpdf';

import "./styles/style.css"
import { useState } from 'react';


function App() {
  const [genInfo, setGenInfo] = useState({name:"", email: "", phone: ""});
  // const [education, setEducation] = useState({major: "",school:"",monthYr:""});
  // const [experiences, setExperiences] = useState([
  //   {
  //     id: crypto.randomUUID(),
  //     company: "",
  //     position: "",
  //     responsibilities: "",
  //     startdate: "",
  //     enddate: "",
  //   },
  // ]);

  function changeGenInfo(name, value){
    let newGenInfo = {...genInfo, [name]: value};
    setGenInfo(newGenInfo);
  }

  return (
    <>
      <div className='info'>
        <h2>CV Application</h2>
          <Headers name={genInfo.name} email={genInfo.email} phone={genInfo.phone} changeGenInfo={changeGenInfo}/>
          {/* <Education />
          <Experience />
          <Download /> */}
      </div>
      <CV name={genInfo.name} email={genInfo.email} phone={genInfo.phone}/>
    </>
  )
}

export default App
