<script>
    let name = '';
    let email = '';
    let phone = '';
  </script>
  
  <style>
    /* If needed, you can add component-specific styles here */
  </style>
  
  <!-- Use general styles -->
  <link rel="stylesheet" href="./styles/general.css">
  
  <div class="info-container">
    <label>
      Name:
      <input bind:value={name} placeholder="Enter your name" />
    </label>
    
    <label>
      Email:
      <input type="email" bind:value={email} placeholder="Enter your email" />
    </label>
    
    <label>
      Phone:
      <input type="tel" bind:value={phone} placeholder="Enter your phone number" />
    </label>
  </div>
  