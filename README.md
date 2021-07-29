# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## i18n

```console
npm run start -- --locale zh-HK
```

You can change the i18n default to different local by this command.

Reference to: https://docusaurus.io/zh-CN/docs/i18n/tutorial

```console
npm run write-translations -- --locale zh-cn
```

Initialize all translate files

```console
cp -r docs/** i18n/zh-HK/docusaurus-plugin-content-docs/current
```

Copy all files from docs for translate
