// store.js
import { writable } from 'svelte/store';

// Store for general information
export const generalInfo = writable({
  name: '',
  email: '',
  phone: '',
  // ... any other general info fields
});

// Stores for various sections
export const educations = writable([]);
export const experiences = writable([]);
export const skills = writable([]);
export const certificates = writable([]);

export function updateGeneralInfo(data) {
    generalInfo.update(currentInfo => ({ ...currentInfo, ...data }));
  }

export function addEducation(education) {
  educations.update(currentEducations => [...currentEducations, education]);
}

export function addExperience(experience) {
  experiences.update(currentExperiences => [...currentExperiences, experience]);
}

export function addSkill(skill) {
  skills.update(currentSkills => [...currentSkills, skill]);
}

export function addCertificate(certificate) {
  certificates.update(currentCertificates => [...currentCertificates, certificate]);
}

// Similarly, you can add helper functions to remove or edit items if needed.
