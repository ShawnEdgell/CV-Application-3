<script>
  import { skills, addSkill as addSkillToStore } from '../store.js';

  let currentSkill = '';

  function addSkill() {
    if (currentSkill && $skills.length < 6) {
      addSkillToStore(currentSkill);
      currentSkill = '';
    }
  }

  function removeSkill(index) {
    if (index >= 0 && index < $skills.length) {
      $skills = $skills.filter((_, i) => i !== index);
    }
  }
</script>

<div class="skills-container">

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
        <button id="remove" on:click={() => removeSkill(index)}>Remove</button>
      </li>
    {/each}
  </ul>
</div>
