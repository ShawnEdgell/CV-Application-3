<!-- app.svelte -->
<script>
  import Accordion from './components/Accordion.svelte'; // Import the Accordion component
  import GeneralInfo from './components/GeneralInfo.svelte';
  import Education from './components/Education.svelte';
  import PracticalExp from './components/PracticalExp.svelte';
  import Skills from './components/Skills.svelte';
  import Certificates from './components/Certificates.svelte';
  import CVDisplay from './components/CVDisplay.svelte';
  import logo from './assets/cv-logo.svg';

  import { addTemplate, clearTemplate } from './utility/utility.js';
  import { generalInfo, educations, experiences, skills, certificates } from './store.js';

  // Function to add template data
  function addTemplateData() {
    // Add template data for all sections
    // Modify the sections as needed
    const sections = ['generalInfo', 'skills', 'educations', 'experiences', 'certificates'];
    sections.forEach((section) => {
      const templateData = addTemplate(section);
      switch (section) {
        case 'generalInfo':
          generalInfo.set(templateData);
          break;
        case 'skills':
          skills.set(templateData);
          break;
        case 'educations':
          educations.set(templateData);
          break;
        case 'experiences':
          experiences.set(templateData);
          break;
        case 'certificates':
          certificates.set(templateData);
          break;
        // Add more cases for other sections if needed
      }
    });
  }

  // Function to clear the form
  function clearForm() {
    // Clear data for all sections
    // Modify the sections as needed
    const sections = ['generalInfo', 'skills', 'educations', 'experiences', 'certificates'];
    sections.forEach((section) => {
      clearTemplate(section); // Clear the template data
      switch (section) {
        case 'generalInfo':
          generalInfo.set({ name: '', email: '', phone: '' });
          break;
        case 'skills':
          skills.set([]);
          break;
        case 'educations':
          educations.set([]);
          break;
        case 'experiences':
          experiences.set([]);
          break;
        case 'certificates':
          certificates.set([]);
          break;
        // Add more cases for other sections if needed
      }
    });
  }
</script>

<style>
  @import './styles/general.css';
</style>

<main>
  <img id="logo" src={logo} alt="CV Creator Logo">
  <h1>CV Creator</h1>

  <!-- Add Template Button -->
  <button on:click={addTemplateData}>Add Template</button>

  <!-- Clear Form Button -->
  <button on:click={clearForm}>Clear Form</button>

  <div class="main-container">
    <div class="inputs-container">
      <Accordion sectionName="generalInfo">
        <h3 slot="title">General Information</h3>
        <GeneralInfo />
      </Accordion>
  
      <Accordion sectionName="education">
        <h3 slot="title">Education</h3>
        <Education />
      </Accordion>
  
      <Accordion sectionName="practicalExp">
        <h3 slot="title">Practical Experience</h3>
        <PracticalExp />
      </Accordion>
  
      <Accordion sectionName="skills">
        <h3 slot="title">Skills</h3>
        <Skills />
      </Accordion>
  
      <Accordion sectionName="certificates">
        <h3 slot="title">Certificates</h3>
        <Certificates />
      </Accordion>
    </div>
  
    <div class="cv-display-container">
      <CVDisplay />
    </div>
  </div>
</main>
