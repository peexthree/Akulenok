const fs = require('fs');

let fileContent = fs.readFileSync('components/team.js', 'utf8');

fileContent = fileContent.replace(
  /Каждый тренер нашего центра проходит строгий отбор и регулярную сертификацию\./g,
  'Каждый специалист нашего центра проходит строгий отбор и регулярную сертификацию.'
);

fileContent = fileContent.replace(
  /<span className="text-sky-600 font-bold text-sm">\{member.experience\}<\/span>/g,
  '<span className="text-sky-600 font-bold text-sm">{member.role}</span>'
);

fs.writeFileSync('components/team.js', fileContent);
console.log('team.js updated');
