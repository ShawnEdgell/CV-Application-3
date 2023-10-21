import {
    generalInfo,
    educations,
    experiences,
    skills,
    certificates,
  } from '../store.js';
  import templateData from '../data/template.json';
  
  export function addTemplate(section) {
    try {
      return templateData[section] || [];
    } catch (error) {
      console.error('Error loading template data:', error);
      return [];
    }
  }
  
  export function clearTemplate(section) {
    try {
      const templateSection = templateData[section] || [];
      templateSection.forEach((item) => {
        item = {};
      });
    } catch (error) {
      console.error('Error clearing template data:', error);
    }
  }
  
  export function addTemplateData() {
    // Set data from the JSON file into the store
    generalInfo.set(templateData.generalInfo);
    educations.set(templateData.educations);
    experiences.set(templateData.experiences);
    skills.set(templateData.skills);
    certificates.set(templateData.certificates);
  }
  