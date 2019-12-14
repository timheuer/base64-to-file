const core = require('@actions/core');
const wait = require('./wait');
const fs = require('fs');

// get input parameter values from config
var fileName = env['TEMP'] + '\\'+ core.getInput('fileName');
var encodedString = core.getInput('encodedString');

// most @actions toolkit packages have async methods
async function run() {
  try { 
    const tempFile = Buffer.from(encodedString, 'base64');
    
    if (certificate.length == 0)
      core.setFailed('Certificate value is not set');
    
    await fs.writeFile(fileName, tempFile);

    core.setOutput('filePath', fileName);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
