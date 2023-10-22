import {
  generalInfo,
  educations,
  experiences,
  skills,
  certificates,
} from '../store.js';
import templateData from '../data/template.json';

let initialTemplateData = null; // Store the initial template data
let initialGeneralInfoData = null; // Store the initial generalInfo data

// Initialize the initialTemplateData and initialGeneralInfoData if they're not already set
if (!initialTemplateData) {
  initialTemplateData = { ...templateData };
}

if (!initialGeneralInfoData) {
  initialGeneralInfoData = { ...templateData.generalInfo };
}

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
    if (section === 'generalInfo') {
      templateData[section] = { ...initialGeneralInfoData }; // Reset generalInfo to its initial state
    } else {
      // Reset sections other than generalInfo to their initial state
      templateData[section] = [...initialTemplateData[section]];
    }
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
