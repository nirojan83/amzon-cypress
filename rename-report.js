const fs = require('fs');
const path = require('path');

const reportDir = path.join(__dirname, 'cypress/reports');

// Look for all files like index.html, index_001.html, etc.
const htmlFiles = fs.readdirSync(reportDir).filter(f => /^index.*\.html$/.test(f));

if (htmlFiles.length === 0) {
  console.error('No index*.html report found.');
  process.exit(1);
}

// Get most recent file by modification time
const latestFile = htmlFiles
  .map(file => ({
    name: file,
    time: fs.statSync(path.join(reportDir, file)).mtime.getTime()
  }))
  .sort((a, b) => b.time - a.time)[0].name;

const oldReportPath = path.join(reportDir, latestFile);

const now = new Date();
const timestamp = now.toISOString().replace(/T/, '_').replace(/:/g, '-').replace(/\..+/, '');
const newFileName = `TestReport_${timestamp}.html`;
const newReportPath = path.join(reportDir, newFileName);

// Rename file
fs.rename(oldReportPath, newReportPath, (err) => {
  if (err) {
    console.error('Rename failed:', err);
  } else {
    console.log(`Renamed report: ${latestFile} → ${newFileName}`);
  }
});