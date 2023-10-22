<script>
  import { experiences } from '../store.js';

  
  // Add these variables to your script section
  let startDate = '';
  let endDate = '';

  let newExperience = {
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    startDate: '', 
    endDate: '',
  };

  function addExperience() {
  if (newExperience.companyName && newExperience.positionTitle && newExperience.mainResponsibilities && $experiences.length < 6) {
    newExperience.startDate = startDate; // Set the startDate property
    newExperience.endDate = endDate;     // Set the endDate property
    $experiences = [...$experiences, { ...newExperience }];
    newExperience = {
      companyName: '',
      positionTitle: '',
      mainResponsibilities: '',
      startDate: '', // Reset startDate
      endDate: '',   // Reset endDate
    };
  }
}

  function removeExperience(index) {
    $experiences = $experiences.filter((_, i) => i !== index);
  }
</script>

<div class="practical-exp-container">

  <label>
    Company Name:
    <input bind:value={newExperience.companyName} placeholder="Enter company name" />
  </label>

  <label>
    Position Title:
    <input bind:value={newExperience.positionTitle} placeholder="Enter position title" />
  </label>

  <label>
    Main Responsibilities:
    <textarea bind:value={newExperience.mainResponsibilities} placeholder="Describe your main responsibilities"></textarea>
  </label>

  <label for="startDate">Start Date:
    <input type="date" id="startDate" bind:value={startDate} />
  </label>

  <label for="endDate">End Date:
    <input type="date" id="endDate" bind:value={endDate} />
  </label>  


  <button on:click={addExperience} disabled={$experiences.length >= 6 || !newExperience.companyName || !newExperience.positionTitle || !newExperience.mainResponsibilities}>
    Add Experience
  </button>

  <ul>
    {#each $experiences as exp, index}
      <li>
        {exp.positionTitle} at {exp.companyName}
        <button id="remove" on:click={() => removeExperience(index)}>Remove</button>
      </li>
    {/each}
  </ul>
</div>
