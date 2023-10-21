<script>
    let schoolName = '';
    let titleOfStudy = '';
    let dateOfStudy = '';
  </script>
  
  <style>
    /* If needed, you can add component-specific styles here */
  </style>
  
  <!-- Use general styles -->
  <link rel="stylesheet" href="./styles/general.css">
  
  <div class="education-container">
    <label>
      School Name:
      <input bind:value={schoolName} placeholder="Enter school name" />
    </label>
    
    <label>
      Title of Study:
      <input bind:value={titleOfStudy} placeholder="Enter title of study" />
    </label>
    
    <label>
      Date of Study:
      <input bind:value={dateOfStudy} placeholder="Enter date of study" />
    </label>
  </div>
  