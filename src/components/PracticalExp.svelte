<script>
  let experiences = [];
  let newExperience = {
    companyName: '',
    positionTitle: '',
    mainResponsibilities: ''
  };

  function addExperience() {
    if (newExperience.companyName && newExperience.positionTitle && newExperience.mainResponsibilities && experiences.length < 6) {
      experiences = [...experiences, newExperience];
      newExperience = {
        companyName: '',
        positionTitle: '',
        mainResponsibilities: ''
      };
    }
  }
</script>

<div class="practical-exp-container">
<h2>Practical Experience</h2>

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

<button on:click={addExperience} disabled={experiences.length >= 6 || !newExperience.companyName || !newExperience.positionTitle || !newExperience.mainResponsibilities}>
  Add Experience
</button>

<ul>
  {#each experiences as exp, index}
    <li>
      Experience {index + 1}: {exp.companyName} as {exp.positionTitle}. Responsibilities: {exp.mainResponsibilities}.
    </li>
  {/each}
</ul>
</div>
