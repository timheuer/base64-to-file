const core = require('@actions/core');
const fse = require('fs-extra')
const path = require('path');

// get input parameter values from config
var fileName;
if (core.getInput('fileDir', {required: false})) {
  fileName = path.join(core.getInput('fileDir'), core.getInput('fileName', {required: false}));
} else {
  fileName = path.join(process.env.RUNNER_TEMP,core.getInput('fileName'));
}

var encodedString = core.getInput('encodedString');

// most @actions toolkit packages have async methods
async function run() {
  try {
    core.debug(process.env);
    const tempFile = Buffer.from(encodedString, 'base64');

    if (tempFile.length == 0)
      core.setFailed('encodedString value is not set');

    fse.outputFile(fileName, tempFile, (err) => {
      if (err) throw err;
      core.debug('Wrote file!');
    });

    core.setOutput('filePath', fileName);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
