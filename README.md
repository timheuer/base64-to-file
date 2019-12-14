# Base63 to File

Use this action if you need to get a file from a base64-encoded string that you may be storing in Secrets or elsewhere.  This can be useful for certificate signing and storing the base64 cert in the Secrets.

## Usage

```
- name: Run Workflow
  id: write_file
  uses: ./
  with:
    fileName: 'myTemporaryFile.txt'
    encodedString: ${{ secrets.SOME_ENCODED_STRING }}
```