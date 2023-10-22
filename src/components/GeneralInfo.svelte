<script>
  import { generalInfo } from '../store.js';

  let localInfo = {
    name: '',
    email: '',
    phone: ''
  };

  // Initialize the localInfo with the values from the store if available
  if ($generalInfo.name) {
    localInfo = $generalInfo;
  }

  // Function to update the global store as the user types
  function updateGeneralInfo() {
    generalInfo.set(localInfo);
  }
</script>

<div class="info-container">

  <label>
    Name:
    <input bind:value={localInfo.name} placeholder="Enter your name" on:input={updateGeneralInfo} />
  </label>

  <label>
    Email:
    <input bind:value={localInfo.email} type="email" placeholder="Enter your email" on:input={updateGeneralInfo} />
  </label>

  <label>
    Phone:
    <input bind:value={localInfo.phone} type="tel" placeholder="Enter your phone number" on:input={updateGeneralInfo} />
  </label>

  <!-- ... any other general info fields -->

</div>
