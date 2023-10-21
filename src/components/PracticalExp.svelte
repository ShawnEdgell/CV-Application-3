<script>
    let companyName = '';
    let positionTitle = '';
    let mainResponsibilities = '';
  </script>
  
  <style>
    /* If needed, you can add component-specific styles here */
  </style>
  
  <!-- Use general styles -->
  <link rel="stylesheet" href="./styles/general.css">
  
  <div class="practical-exp-container">
    <label>
      Company Name:
      <input bind:value={companyName} placeholder="Enter company name" />
    </label>
    
    <label>
      Position Title:
      <input bind:value={positionTitle} placeholder="Enter position title" />
    </label>
    
    <label>
      Main Responsibilities:
      <textarea bind:value={mainResponsibilities} placeholder="Describe your main responsibilities"></textarea>
    </label>
  </div>
  