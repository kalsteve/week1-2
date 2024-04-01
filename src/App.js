import './App.css';
import Profile from './component/resume/Profile';
import Privacy from './component/resume/Privacy';
import Experience from './component/resume/Experience';
import Education from './component/resume/Education';
import Project from './component/resume/Project'
import Skill from './component/resume/Skill';

function App() {
  return (
    <div className='appPage'>
      <div className='container'>
        <div className='Header'>
        <Profile/>
        <hr/>
        <Privacy/>
        </div>
      </div>
      <div className='container2'>
      <Project/>
      <Experience/>
      <Education/>
      <Skill/>
      </div>
    </div>
  );
}

export default App;
