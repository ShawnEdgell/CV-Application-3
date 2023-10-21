<script>
    import { skills, addSkill as addSkillToStore } from '../store.js';
  
    let currentSkill = '';
  
    function addSkill() {
      if (currentSkill && $skills.length < 6) {
        addSkillToStore(currentSkill);
        currentSkill = '';
      }
    }
  </script>
  
  <div class="skills-container">
    <h2>Skills</h2>
  
    <label>
      Skill:
      <input bind:value={currentSkill} placeholder="Enter skill" />
    </label>
  
    <button on:click={addSkill} disabled={$skills.length >= 6 || !currentSkill}>
      Add Skill
    </button>
  
    <ul>
      {#each $skills as skill, index}
        <li>
          Skill {index + 1}: {skill}.
        </li>
      {/each}
    </ul>
  </div>
  