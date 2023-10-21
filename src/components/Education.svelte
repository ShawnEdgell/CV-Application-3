<script>
    import { educations as globalEducations } from '../store.js'; // Adjust the path if necessary
  
    let newEducation = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: ''
    };
  
    function addEducation() {
      if (newEducation.schoolName && newEducation.titleOfStudy && newEducation.dateOfStudy && $globalEducations.length < 6) {
        $globalEducations = [...$globalEducations, { ...newEducation }];
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
      <input bind:value={newEducation.schoolName} placeholder="School Name" />
    </label>
  
    <label>
      Title of Study:
      <input bind:value={newEducation.titleOfStudy} placeholder="Title of Study" />
    </label>
  
    <label>
      Date of Study:
      <input type="date" bind:value={newEducation.dateOfStudy} />
    </label>
  
    <button on:click={addEducation} disabled={$globalEducations.length >= 6 || !newEducation.schoolName || !newEducation.titleOfStudy || !newEducation.dateOfStudy}>
      Add Education
    </button>
  
    <ul>
      {#each $globalEducations as edu, index}
        <li>
          Education {index + 1}: {edu.schoolName} - {edu.titleOfStudy} ({edu.dateOfStudy})
        </li>
      {/each}
    </ul>
  </div>
  