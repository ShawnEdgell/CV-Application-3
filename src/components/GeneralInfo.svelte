<script>
    let name = '';
    let email = '';
    let phone = '';

    function saveInfo() {
        // Logic to save the general info (if any specific actions are needed)
        console.log("Saved!");
    }
</script>

<div class="info-container">
  <h2>General Info</h2>

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

  <button on:click={saveInfo}>Save</button>

  <ul></ul>
</div>
