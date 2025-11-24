const fs = require('fs');
const PDFDocument = require('pdfkit');

// Cargar datos
const cvData = JSON.parse(fs.readFileSync('./shared/data/cv-data.json', 'utf8'));
const { personal, about, experience, education, skills } = cvData;

// Crear PDF
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 50, bottom: 50, left: 50, right: 50 }
});

// Output
doc.pipe(fs.createWriteStream('CV-Eduardo-Valenzuela.pdf'));

// Colores
const primaryColor = '#1e40af';
const textColor = '#374151';
const grayColor = '#6b7280';

// Helper para agregar línea divisoria
function addDivider() {
  doc.moveDown(0.5);
  doc.strokeColor(primaryColor)
     .lineWidth(2)
     .moveTo(50, doc.y)
     .lineTo(545, doc.y)
     .stroke();
  doc.moveDown(0.5);
}

// HEADER
doc.fontSize(24)
   .fillColor(primaryColor)
   .font('Helvetica-Bold')
   .text(personal.name, { align: 'center' });

doc.fontSize(12)
   .fillColor(textColor)
   .font('Helvetica')
   .text(personal.title, { align: 'center' });

doc.fontSize(10)
   .fillColor(grayColor)
   .text(`${personal.email} | ${personal.phone} | ${personal.location}`, { align: 'center' });

doc.moveDown(1.5);

// PERFIL PROFESIONAL
doc.fontSize(14)
   .fillColor(primaryColor)
   .font('Helvetica-Bold')
   .text('PERFIL PROFESIONAL');

addDivider();

const aboutShort = about.es.split('\n\n')[0];
doc.fontSize(9)
   .fillColor(textColor)
   .font('Helvetica')
   .text(aboutShort, { align: 'justify' });

doc.moveDown(1);

// EXPERIENCIA
doc.fontSize(14)
   .fillColor(primaryColor)
   .font('Helvetica-Bold')
   .text('EXPERIENCIA PROFESIONAL');

addDivider();

experience.forEach((exp, index) => {
  // Company y período
  doc.fontSize(11)
     .fillColor('#111827')
     .font('Helvetica-Bold')
     .text(`${exp.company} | ${exp.period}`);

  // Posición y ubicación
  doc.fontSize(10)
     .fillColor(grayColor)
     .font('Helvetica-Oblique')
     .text(`${exp.position} - ${exp.location}`);

  // Descripción
  doc.fontSize(9)
     .fillColor(textColor)
     .font('Helvetica')
     .text(exp.description, { align: 'justify' });

  // Logros (max 3)
  if (exp.achievements) {
    exp.achievements.slice(0, 3).forEach(achievement => {
      doc.fontSize(9)
         .fillColor(textColor)
         .text(`  • ${achievement}`, { indent: 10 });
    });
  }

  // Tecnologías (max 8)
  if (exp.technologies) {
    const techStr = exp.technologies.slice(0, 8).join(', ');
    doc.fontSize(9)
       .fillColor(grayColor)
       .font('Helvetica-Oblique')
       .text(`  Tecnologías: ${techStr}`, { indent: 10 });
  }

  doc.moveDown(0.8);

  // Nueva página después de Grant Solutions
  if (index === 1) {
    doc.addPage();
  }
});

// EDUCACIÓN
doc.fontSize(14)
   .fillColor(primaryColor)
   .font('Helvetica-Bold')
   .text('EDUCACIÓN Y CERTIFICACIONES');

addDivider();

education.forEach(edu => {
  doc.fontSize(11)
     .fillColor('#111827')
     .font('Helvetica-Bold')
     .text(`${edu.institution} | ${edu.period}`);

  doc.fontSize(10)
     .fillColor(grayColor)
     .font('Helvetica-Oblique')
     .text(edu.degree);

  if (edu.description) {
    doc.fontSize(9)
       .fillColor(textColor)
       .font('Helvetica')
       .text(edu.description, { align: 'justify' });
  }

  doc.moveDown(0.6);
});

doc.moveDown(0.5);

// HABILIDADES
doc.fontSize(14)
   .fillColor(primaryColor)
   .font('Helvetica-Bold')
   .text('HABILIDADES TÉCNICAS');

addDivider();

// Frontend
const frontendSkills = skills.frontend.filter(s => s.level >= 75).map(s => s.name);
doc.fontSize(9)
   .fillColor(textColor)
   .font('Helvetica-Bold')
   .text('Frontend: ', { continued: true })
   .font('Helvetica')
   .text(frontendSkills.join(', '));

// Backend
const backendSkills = skills.backend.filter(s => s.level >= 75).map(s => s.name);
doc.font('Helvetica-Bold')
   .text('Backend: ', { continued: true })
   .font('Helvetica')
   .text(backendSkills.join(', '));

// Databases
const dbSkills = skills.tools.databases.filter(s => s.level >= 80).map(s => s.name);
doc.font('Helvetica-Bold')
   .text('Databases: ', { continued: true })
   .font('Helvetica')
   .text(dbSkills.join(', '));

// SEO & Analytics
const seoSkills = skills.tools.seoAnalytics.filter(s => s.level >= 80).map(s => s.name);
doc.font('Helvetica-Bold')
   .text('SEO & Analytics: ', { continued: true })
   .font('Helvetica')
   .text(seoSkills.join(', '));

// Dev Tools
const devTools = skills.tools.devTools.filter(s => s.level >= 85).map(s => s.name);
doc.font('Helvetica-Bold')
   .text('Herramientas: ', { continued: true })
   .font('Helvetica')
   .text(devTools.join(', '));

// AI
const aiSkills = skills.ai.filter(s => s.level >= 90).map(s => s.name);
doc.font('Helvetica-Bold')
   .text('IA & Asistentes: ', { continued: true })
   .font('Helvetica')
   .text(aiSkills.join(', '));

doc.moveDown(2);

// FOOTER
const footerText = `Portfolio: ${personal.social.portfolio} | GitHub: github.com/${personal.social.github} | LinkedIn: linkedin.com/in/${personal.social.linkedin}`;
doc.fontSize(8)
   .fillColor(grayColor)
   .font('Helvetica')
   .text(footerText, { align: 'center' });

// Finalizar
doc.end();

console.log('✅ PDF generado: CV-Eduardo-Valenzuela.pdf');
