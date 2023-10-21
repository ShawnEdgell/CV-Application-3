<script>
    import { generalInfo } from '../store.js'; // Adjust the path if necessary
  
    let localInfo = {
      name: '',
      email: '',
      phone: ''
      // ... any other general info fields
    };
  
    // Function to update the global store
    function saveGeneralInfo() {
      $generalInfo = localInfo;
    }
  </script>
  
  <div class="info-container">
    <h2>General Information</h2>
  
    <label>
      Name:
      <input bind:value={localInfo.name} placeholder="Enter your name" />
    </label>
  
    <label>
      Email:
      <input bind:value={localInfo.email} type="email" placeholder="Enter your email" />
    </label>
  
    <label>
      Phone:
      <input bind:value={localInfo.phone} type="tel" placeholder="Enter your phone number" />
    </label>
  
    <!-- ... any other general info fields -->
  
    <button on:click={saveGeneralInfo}>Save</button>

    <ul></ul>

  </div>
  