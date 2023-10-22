<script>
  import { generalInfo, educations, experiences, skills, certificates } from '../store.js';
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family:'Times New Roman', Times, serif;
  }

  .cv-container {
    width: 800px;
    height: 1128px;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .general-info {
    background-color: #6277ba;
    color: white;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  #title {
    font-size: 3.2em;
    font-weight: 600;
    text-align: center;
  }

  h2 {
    background-color: #e8eaf3;
  }

  .cv-container-body {
    padding: 40px 60px;
  }

  .skills-section {
    display: flex;
    gap: 20px;
    padding: 12px 0;
    justify-content: center;
  }

  p, li {
    text-align: left;
  }

  .text-box {
    padding: 12px 0;
  }

</style>

<div class="cv-container">
  <!-- General Information -->

  <div class="general-info">
    <p id="title">{$generalInfo.name}</p>
    <div class="contact-info">
      <p>{$generalInfo.email}</p>
      <p>{$generalInfo.phone}</p>
    </div>
  </div>

  <div class="cv-container-body">

  <!-- Education -->
  {#if $educations.length > 0}
  <div class="education-section">
    <h2>Education</h2>
    <div class="text-box">
    <ul>
      {#each $educations as education}
      <li>{education.schoolName}, {education.titleOfStudy}, {education.dateOfStudy}</li>
      {/each}
    </ul>
  </div>
  </div>
  {/if}

<!-- Practical Experience -->
{#if $experiences.length > 0}
<div class="experience-section">
  <h2>Practical Experience</h2>
  <div class="text-box">
    <ul>
    {#each $experiences as experience}
    <li>
      <p><strong>{experience.companyName}</strong></p>
      <p>{experience.positionTitle}</p>
      <p>{experience.startDate} - {experience.endDate}</p>
      <p>{experience.mainResponsibilities}</p>
    </li>
    {/each}
  </ul>
</div>
</div>
{/if}


  <!-- Skills -->
  {#if $skills.length > 0}
  <h2>Skills</h2>
  <div class="skills-section">
      {#each $skills as skill}
      <li>{skill}</li>
      {/each}
  </div>
  {/if}

  <!-- Certificates -->
  {#if $certificates.length > 0}
  <div class="certificates-section">
    <h2>Certificates</h2>
    <div class="text-box">
    <ul>
      {#each $certificates as certificate}
      <li>{certificate.name} from {certificate.institution} on {certificate.date}</li>
      {/each}
    </ul>
  </div>
  </div>
  {/if}
</div>
</div>