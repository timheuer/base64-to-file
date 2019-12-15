# Base64 to File

Use this action if you need to get a file from a base64-encoded string that you may be storing in Secrets or elsewhere.  This can be useful for certificate signing and storing the base64 cert in the Secrets.

## Usage

```
- name: Run Workflow
  id: write_file
  uses: timheuer/base64-to-file@v1
  with:
    fileName: 'myTemporaryFile.txt'
    encodedString: ${{ secrets.SOME_ENCODED_STRING }}
```

## Using the file in a later step
The Action has an output variable named filePath that you can use as this file is written to TEMP.  Make sure you ad an `id` to your step when using this Action so that you can easily pull it out of the steps context later.

```
- name: Run Workflow
  id: write_file
  uses: timheuer/base64-to-file@v1
  with:
    fileName: 'myTemporaryFile.txt'
    encodedString: ${{ secrets.SOME_ENCODED_STRING }}

- name: Some other step
  uses: actions/someaction@master
  with:
      filelocation: ${{ steps.write_file.outputs.filePath }}
```