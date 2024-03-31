import './App.css';
import Profile from './component/resume/Profile';
import Privacy from './component/resume/Privacy';
import Experience from './component/resume/Experience';
import Education from './component/resume/Education';
import Project from './component/resume/Project'
import Skill from './component/resume/Skill';

function App() {
  return (
    <div>
      <Profile/>
      <Privacy/>
      <Project/>
      <Experience/>
      <Education/>
      <Skill/>
    </div>
  );
}

export default App;
