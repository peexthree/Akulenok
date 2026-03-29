const fs = require('fs');

// Patch about.js
const aboutPath = 'components/about.js';
let aboutContent = fs.readFileSync(aboutPath, 'utf8');

const oldStats = `  const stats = [
    { k: "3м+", v: "возраст начала" },
    { k: "4.7★", v: "рейтинг по отзывам" },
    { k: "30 мин", v: "длительность занятия" },
  ];`;

const newStats = `  const stats = [
    { k: "0+", v: "возраст начала" },
    { k: "4.7★", v: "рейтинг по отзывам" },
    { k: "от 30 мин", v: "длительность занятия" },
  ];`;

aboutContent = aboutContent.replace(oldStats, newStats);
fs.writeFileSync(aboutPath, aboutContent);
console.log("about.js stats patched");

// Patch services.js
const servicesPath = 'components/services.js';
let servicesContent = fs.readFileSync(servicesPath, 'utf8');

servicesContent = servicesContent.replace(
  `"Длительность — обычно 30 минут (по показаниям индивидуально)."`,
  `"Длительность — от 30 минут (по показаниям индивидуально)."`
);

fs.writeFileSync(servicesPath, servicesContent);
console.log("services.js duration patched");
