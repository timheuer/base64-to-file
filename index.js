const core = require('@actions/core');
const fs = require('fs');

// get input parameter values from config
var fileName = process.env['TEMP'] + '\\' + core.getInput('fileName');
var encodedString = core.getInput('encodedString');

// most @actions toolkit packages have async methods
async function run() {
  try { 
    const tempFile = Buffer.from(encodedString, 'base64');
    
    if (tempFile.length == 0)
      core.setFailed('Certificate value is not set');
    
    fs.writeFile(fileName, tempFile, (err) => {
      if (err) throw err;
      console.log('Wrote file!');
    });

    core.setOutput('filePath', fileName);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
