import './App.css';
import ResumeIntroduction from '../resumeIntroduction/ResumeIntroduction';
import ContactInformation from '../contactInformation/ContactInformation';
import ProfessionalExperience from '../professionalExperience/ProfessionalExperience';
import Skills from '../skills/Skills';
import Education from '../education/Education';
//import TrainingCertification from '../optionalParts/trainingCertificationLicenses/TrainingCertification';
import ProjectsFreelanceWork from '../optionalParts/projectsFreelanceWork/ProjectsFreelanceWork';
//import VolunteerWork from '../optionalParts/volunteerWork/VolunteerWork';
//import AwardsAndHonor from '../optionalParts/awardsAndHonors/AwardsAndHonor';
//import HobbiesInterests from '../optionalParts/hobbiesAndInterests/HobbiesInterests';
import Footer from '../footer/footer';



function App() {
    return (
        <div className="App">
                <ContactInformation/>
                <ResumeIntroduction/>
                <Skills/>
                <ProfessionalExperience/>
                <Education/>
                <ProjectsFreelanceWork/>
                <Footer/>
    </div>
    );
}

export default App;
