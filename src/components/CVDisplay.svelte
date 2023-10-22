<script>
  import { generalInfo, educations, experiences, skills, certificates } from '../store.js';
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .cv-container {
    border: 1px solid black;
    width: 800px;
    height: 1128px;
  }
</style>

<div class="cv-container">
  <!-- General Information -->
  <div class="general-info">
    <h1>{$generalInfo.name}</h1>
    <p>{$generalInfo.email}</p>
    <p>{$generalInfo.phone}</p>
  </div>

  <!-- Education -->
  {#if $educations.length > 0}
  <div class="education-section">
    <h2>Education</h2>
    <ul>
      {#each $educations as education}
      <li>{education.schoolName}, {education.titleOfStudy}, {education.dateOfStudy}</li>
      {/each}
    </ul>
  </div>
  {/if}

  <!-- Practical Experience -->
  {#if $experiences.length > 0}
  <div class="experience-section">
    <h2>Practical Experience</h2>
    <ul>
      {#each $experiences as experience}
      <li>{experience.companyName}, {experience.positionTitle}, {experience.mainResponsibilities}</li>
      {/each}
    </ul>
  </div>
  {/if}

  <!-- Skills -->
  {#if $skills.length > 0}
  <div class="skills-section">
    <h2>Skills</h2>
    <ul>
      {#each $skills as skill}
      <li>{skill}</li>
      {/each}
    </ul>
  </div>
  {/if}

  <!-- Certificates -->
  {#if $certificates.length > 0}
  <div class="certificates-section">
    <h2>Certificates</h2>
    <ul>
      {#each $certificates as certificate}
      <li>{certificate.name} from {certificate.institution} on {certificate.date}</li>
      {/each}
    </ul>
  </div>
  {/if}
</div>
