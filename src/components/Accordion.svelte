<script>
  import { openSection } from '../stores/sectionStore'; // Import the store

  // Get the section name from the slot title
  export let sectionName;
  
  $: isOpen = $openSection === sectionName; // Check if this section should be open

  // Function to handle section open/close
  function handleSectionToggle() {
    openSection.set(isOpen ? null : sectionName);
  }

  // Function to toggle the accordion open and closed
  function toggleAccordion() {
    isOpen = !isOpen;
  }

  // Function to handle click and keyboard events
  function handleClick(event) {
    if (event.type === 'click' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
      toggleAccordion();
    }
  }
</script>

<div class="accordion" tabindex="-1">
  <div class="accordion-header" role="button" tabindex="0" on:click={handleSectionToggle} on:keydown={handleClick} on:keyup={handleClick}>
    <slot name="title"></slot>
    {#if isOpen}
      <img src="src/assets/icon-open.svg" alt="Open Icon" class="icon" />
    {:else}
      <img src="src/assets/icon-closed.svg" alt="Closed Icon" class="icon" />
    {/if}
  </div>
  {#if isOpen}
    <div class="accordion-content">
      <slot></slot>
    </div>
  {/if}
</div>

<style>
  .accordion {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .accordion-header {
    background-color: #334088;
    padding: 10px;
    cursor: pointer;
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease;
  }

  .accordion-header:hover {
    background-color: #222b58;
  }

  .icon {
    width: 20px; 
    height: 20px;
  }
</style>
