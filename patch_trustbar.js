const fs = require('fs');

const path = 'components/TrustBar.js';
let content = fs.readFileSync(path, 'utf8');

const oldItems = `const trustItems = [
  { text: "Вода лучшего качества", icon: BeakerIcon },
  { text: "Тренеры с мед. образованием", icon: AcademicCapIcon },
  { text: "Без хлора", icon: ShieldCheckIcon },
  { text: "Одобрено педиатрами", icon: HeartIcon },
  { text: "Температура воды 33-34°C", icon: SunIcon },
  { text: "Многоступенчатая очистка", icon: SparklesIcon },
  { text: "Игровой подход без слез", icon: FaceSmileIcon },
  { text: "Теплые пеленальные зоны", icon: HomeModernIcon },
];`;

const newItems = `const trustItems = [
  { text: "Вода лучшего качества", icon: BeakerIcon },
  { text: "Сотрудники с медицинским и педагогическим образованием", icon: AcademicCapIcon },
  { text: "Температура воды 32-33°C", icon: SunIcon },
  { text: "Многоступенчатая очистка воды - вода питьевого качества", icon: SparklesIcon },
  { text: "Игровой подход без слез", icon: FaceSmileIcon },
  { text: "Теплые пеленальные зоны", icon: HomeModernIcon },
];`;

content = content.replace(oldItems, newItems);

fs.writeFileSync(path, content);
console.log("Trustbar patched");

const faqPath = 'components/faq.js';
let faqContent = fs.readFileSync(faqPath, 'utf8');
faqContent = faqContent.replace(/33-34/g, "32-33");
fs.writeFileSync(faqPath, faqContent);
console.log("FAQ patched");

const journeyPath = 'components/JourneyTimeline.js';
let journeyContent = fs.readFileSync(journeyPath, 'utf8');
journeyContent = journeyContent.replace(/33-34/g, "32-33");
fs.writeFileSync(journeyPath, journeyContent);
console.log("JourneyTimeline patched");
