<script>
  import GeneralInfo from './components/GeneralInfo.svelte';
  import Education from './components/Education.svelte';
  import PracticalExp from './components/PracticalExp.svelte';
  import Skills from './components/Skills.svelte';
  import Certificates from './components/Certificates.svelte';
  import logo from './assets/cv-logo.svg';
</script>

<style>
  @import './styles/general.css';
</style>

<main>
  <img id="logo" src={logo} alt="CV Creator Logo">
  <h1>CV Creator</h1>
  
  <div class="inputs-container">
    <GeneralInfo />
    <Education />
    <PracticalExp />
    <Skills />
    <Certificates />
  </div>
</main>