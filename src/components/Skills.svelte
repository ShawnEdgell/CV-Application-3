<script>
    let skills = [];
    let currentSkill = '';
    let description = '';
  
    function addSkill() {
      if (currentSkill && skills.length < 6) {
        skills.push(currentSkill);
        currentSkill = '';
      }
    }
  </script>
  
  <div class="skills-container">
    <h2>Skills</h2>
    <label>
        Description:
        <textarea bind:value={description} placeholder="Describe your skills..."></textarea>
    </label>
  
    <label>
      Add Skill (Max 6):
      <input bind:value={currentSkill} placeholder="Enter a skill..." />
    </label>


    <button on:click={addSkill} disabled={currentSkill === '' || skills.length >= 6}>Add Skill</button>

    <ul>
      {#each skills as skill, index}
        <li>
          Skill {index + 1}: {skill}
        </li>
      {/each}
    </ul>
  </div>