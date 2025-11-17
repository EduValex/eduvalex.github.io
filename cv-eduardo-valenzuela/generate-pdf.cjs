const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Ruta del archivo HTML
const htmlPath = path.join(__dirname, 'CV-Eduardo-Valenzuela.html');

console.log('🚀 Abriendo Chrome en modo headless para generar PDF...');
console.log('📄 Archivo HTML:', htmlPath);

// Comando para Chrome/Edge en modo headless (Windows)
const chromePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

let chromePath = null;
for (const path of chromePaths) {
    if (fs.existsSync(path)) {
        chromePath = path;
        break;
    }
}

if (!chromePath) {
    console.error('❌ No se encontró Chrome o Edge instalado.');
    console.log('\n📋 ALTERNATIVA MANUAL:');
    console.log('1. Abre el archivo CV-Eduardo-Valenzuela.html en tu navegador');
    console.log('2. Presiona Ctrl + P');
    console.log('3. Selecciona "Guardar como PDF"');
    console.log('4. Guarda el archivo');
    process.exit(1);
}

const pdfPath = path.join(__dirname, 'CV-Eduardo-Valenzuela.pdf');
const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;

const cmd = `"${chromePath}" --headless --disable-gpu --print-to-pdf="${pdfPath}" --no-pdf-header-footer "${fileUrl}"`;

console.log('⚙️  Ejecutando comando...');

exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.error('❌ Error al generar PDF:', error.message);
        console.log('\n📋 ALTERNATIVA MANUAL:');
        console.log('1. Abre el archivo CV-Eduardo-Valenzuela.html en tu navegador');
        console.log('2. Presiona Ctrl + P');
        console.log('3. Selecciona "Guardar como PDF"');
        console.log('4. Guarda el archivo');
        return;
    }
    
    if (fs.existsSync(pdfPath)) {
        console.log('✅ ¡PDF generado exitosamente!');
        console.log('📁 Ubicación:', pdfPath);
        console.log('\n🎉 Tu CV está listo para enviar!');
    } else {
        console.log('⚠️  No se pudo verificar la creación del PDF');
        console.log('📋 Intenta el método manual:');
        console.log('1. Abre el archivo CV-Eduardo-Valenzuela.html en tu navegador');
        console.log('2. Presiona Ctrl + P');
        console.log('3. Selecciona "Guardar como PDF"');
        console.log('4. Guarda el archivo');
    }
});
