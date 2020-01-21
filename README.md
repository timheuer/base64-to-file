# Base64 to File
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Use this action if you need to get a file from a base64-encoded string that you may be storing in Secrets or elsewhere.  This can be useful for certificate signing and storing the base64 cert in the Secrets.

## Usage

```
- name: Run Workflow
  id: write_file
  uses: timheuer/base64-to-file@v1.0.2
  with:
    fileName: 'myTemporaryFile.txt'
    encodedString: ${{ secrets.SOME_ENCODED_STRING }}
```

## Using the file in a later step
The Action has an output variable named filePath that you can use as this file is written to TEMP.  Make sure you ad an `id` to your step when using this Action so that you can easily pull it out of the steps context later.

```
- name: Run Workflow
  id: write_file
  uses: timheuer/base64-to-file@v1.0.2
  with:
    fileName: 'myTemporaryFile.txt'
    encodedString: ${{ secrets.SOME_ENCODED_STRING }}

- name: Some other step
  uses: actions/someaction@master
  with:
      filelocation: ${{ steps.write_file.outputs.filePath }}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/filipkowicz"><img src="https://avatars3.githubusercontent.com/u/4691550?v=4" width="100px;" alt=""/><br /><sub><b>Michał Filipek</b></sub></a><br /><a href="https://github.com/timheuer/base64-to-file/commits?author=filipkowicz" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!