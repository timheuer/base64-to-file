# Base64 to File
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Use this action if you need to get a file from a base64-encoded string that you may be storing in Secrets or elsewhere.  This can be useful for certificate signing and storing the base64 cert in the Secrets.

## Usage

```
- name: Run Workflow
  id: write_file
  uses: timheuer/base64-to-file@v1.1
  with:
    fileName: 'myTemporaryFile.txt'
    fileDir: './main/folder/subfolder/'
    encodedString: ${{ secrets.SOME_ENCODED_STRING }}
```
By default this writes the `fileName` to a temporary path defined by `env.RUNNER_TEMP`.  If you want a different path that is writable, specify `fileDir` as an input argument as well and then `fileDir` and `fileName` will be combined to create the path where the output will be written.  This assumes permissions in the `fileDir` are correct and does not try to set them.
## Using the file in a later step
The Action has an output variable named filePath that you can use as this file is written to TEMP.  Make sure you ad an `id` to your step when using this Action so that you can easily pull it out of the steps context later.

```
- name: Run Workflow
  id: write_file
  uses: timheuer/base64-to-file@v1.1
  with:
    fileName: 'myTemporaryFile.txt'
    encodedString: ${{ secrets.SOME_ENCODED_STRING }}

- name: Some other step
  uses: actions/someaction@master
  with:
      filelocation: ${{ steps.write_file.outputs.filePath }}
```
## Building this repo
After making modifications to the source index.js file, to properly package the change you need to run

```
npm run package
```

which will modify/create the /dist folder with the final index.js output

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/filipkowicz"><img src="https://avatars3.githubusercontent.com/u/4691550?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michał Filipek</b></sub></a><br /><a href="https://github.com/timheuer/base64-to-file/commits?author=filipkowicz" title="Documentation">📖</a></td>
    <td align="center"><a href="https://timheuer.com/blog/"><img src="https://avatars3.githubusercontent.com/u/4821?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tim Heuer</b></sub></a><br /><a href="https://github.com/timheuer/base64-to-file/commits?author=timheuer" title="Code">💻</a> <a href="https://github.com/timheuer/base64-to-file/commits?author=timheuer" title="Documentation">📖</a></td>
    <td align="center"><a href="https://portfolio.tubone-project24.xyz/"><img src="https://avatars.githubusercontent.com/u/9511227?v=4?s=100" width="100px;" alt=""/><br /><sub><b>tubone(Yu Otsubo)</b></sub></a><br /><a href="https://github.com/timheuer/base64-to-file/commits?author=tubone24" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Ontokrat"><img src="https://avatars.githubusercontent.com/u/23409319?v=4?s=100" width="100px;" alt=""/><br /><sub><b>GG</b></sub></a><br /><a href="https://github.com/timheuer/base64-to-file/commits?author=Ontokrat" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
