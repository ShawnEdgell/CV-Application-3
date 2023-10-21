<script>
  import { certificates as globalCertificates } from '../store.js'; // Adjust the path if necessary

  let newCertificate = {
    name: '',
    institution: '',
    date: ''
  };

  function addCertificate() {
    if (newCertificate.name && newCertificate.institution && newCertificate.date && $globalCertificates.length < 6) {
      $globalCertificates = [...$globalCertificates, { ...newCertificate }];
      newCertificate = { name: '', institution: '', date: '' };
    }
  }
</script>

<div class="certificates-container">
  <h2>Certificates</h2>

  <label>
    Certificate Name:
    <input bind:value={newCertificate.name} placeholder="Certificate Name" />
  </label>

  <label>
    Issuing Institution:
    <input bind:value={newCertificate.institution} placeholder="Issuing Institution" />
  </label>

  <label>
    Date:
    <input type="date" bind:value={newCertificate.date} />
  </label>

  <button on:click={addCertificate} disabled={$globalCertificates.length >= 6 || !newCertificate.name || !newCertificate.institution || !newCertificate.date}>
    Add Certificate
  </button>

  <ul>
    {#each $globalCertificates as cert (cert.name)}
      <li>
        {cert.name} from {cert.institution} on {cert.date}
      </li>
    {/each}
  </ul>
</div>
