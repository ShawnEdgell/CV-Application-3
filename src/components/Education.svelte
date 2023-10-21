<script>
    let educations = [];
    let newEducation = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: ''
    };

    function addEducation() {
      if (newEducation.schoolName && newEducation.titleOfStudy && newEducation.dateOfStudy && educations.length < 6) {
        educations.push({ ...newEducation });
        newEducation = {
          schoolName: '',
          titleOfStudy: '',
          dateOfStudy: ''
        };
      }
    }
</script>

<div class="education-container">
  <h2>Education</h2>

  <label>
    School Name:
    <input bind:value={newEducation.schoolName} placeholder="Enter school name" />
  </label>
  
  <label>
    Title of Study:
    <input bind:value={newEducation.titleOfStudy} placeholder="Enter title of study" />
  </label>

  <label>
    Date of Study:
    <input type="date" bind:value={newEducation.dateOfStudy} />
  </label>

  <button on:click={addEducation} disabled={educations.length >= 6 || !newEducation.schoolName || !newEducation.titleOfStudy || !newEducation.dateOfStudy}>
    Add Education
  </button>

  <ul>
    {#each educations as edu, index}
      <li>
        Education {index + 1}: {edu.schoolName}, {edu.titleOfStudy} in {edu.dateOfStudy}.
      </li>
    {/each}
  </ul>
</div>
