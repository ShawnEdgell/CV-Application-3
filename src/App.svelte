<script>
  import GeneralInfo from './components/GeneralInfo.svelte';
  import Education from './components/Education.svelte';
  import PracticalExp from './components/PracticalExp.svelte';
</script>

<style>
  @import './styles/general.css';
</style>

<main>
  <h1>CV Creator</h1>
  
  <div class="inputs-container">
    <GeneralInfo />
    <Education />
    <PracticalExp />
  </div>
</main>