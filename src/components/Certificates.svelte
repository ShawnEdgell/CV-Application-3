<script>
    let certificates = [];
    let newCertificate = {
      name: '',
      institution: '',
      date: ''
    };
  
    function addCertificate() {
      if (newCertificate.name && newCertificate.institution && newCertificate.date && certificates.length < 6) {
        certificates.push({ ...newCertificate });
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

  <button on:click={addCertificate} disabled={certificates.length >= 6 || !newCertificate.name || !newCertificate.institution || !newCertificate.date}>
    Add Certificate
  </button>

  <ul>
    {#each certificates as cert (cert.name)}
      <li>
        {cert.name} from {cert.institution} on {cert.date}
      </li>
    {/each}
  </ul>
</div>
