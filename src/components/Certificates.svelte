<script>
  import { certificates as globalCertificates } from '../store.js'; // Adjust the path if necessary

  let localCertificates = $globalCertificates;
  let newCertificate = {
    name: '',
    institution: '',
    date: ''
  };

  function addCertificate() {
    if (newCertificate.name && newCertificate.institution && newCertificate.date && localCertificates.length < 6) {
      localCertificates = [...localCertificates, { ...newCertificate }];
      newCertificate = { name: '', institution: '', date: '' };
    }
  }

  function removeCertificate(index) {
    localCertificates = localCertificates.filter((_, i) => i !== index);
  }
</script>

<div class="certificates-container">

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

  <button on:click={addCertificate} disabled={localCertificates.length >= 6 || !newCertificate.name || !newCertificate.institution || !newCertificate.date}>
    Add Certificate
  </button>

  <ul>
    {#each localCertificates as cert, index (cert.name)}
      <li>
        {cert.name} from {cert.institution} on {cert.date}
        <button id="remove" on:click={() => removeCertificate(index)}>Remove</button>
      </li>
    {/each}
  </ul>
</div>
