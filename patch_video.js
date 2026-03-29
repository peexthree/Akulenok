const fs = require('fs');

let fileContent = fs.readFileSync('components/video.js', 'utf8');

fileContent = fileContent.replace(
  /pretitle="Атмосфера Акулёнка"/,
  'pretitle="Познакомьтесь с нами ближе"'
);

fileContent = fileContent.replace(
  /Посмотрите, как проходят занятия: никакой воды в ушах, только улыбки,(\s*)профессиональная поддержка и чистая радость движения\./,
  'Посмотрите, как проходят занятия: только улыбки, профессиональная поддержка и чистая радость движения.'
);

fs.writeFileSync('components/video.js', fileContent);
console.log('video.js updated');
