import {Headers} from './components/generalinfo';
import {Education} from './components/education';
import { Experience } from './components/experience';
import { CV } from './components/cv';

import "./styles/style.css"


function App() {
  return (
    <>
      <div className='info'>
        <h2>CV Application</h2>
          <Headers />
          <Education />
          <Experience />
      </div>
      <CV />
    </>
  )
}

export default App
