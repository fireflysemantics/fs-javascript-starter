# Firefly Semantics Javascript Starter Project

This is a baseline Javascript starter project that extends the Firefly Semantics [Github Flow Starter Project][fs-github-flow].

It makes collaborating with, building, testing, documenting,
and releasing / publishing Javascript [ES2021][es2021] project modules simple.

The [Github Flow Starter Project][fs-github-flow]
that it is based on provides documents that are commonly
used in Github Flow open source projects and includes:

- [MIT Licence](./LICENSE)
- [Contributor Covenant Code of Conduct][conduct]
- [Contribution Guidelines][contributing]
- [Guidelines for Seeking Help][questions]
- [Guidelines for Extending This Project][extension]
- Release and Changelog Automation with [Release It!](https://github.com/release-it/release-it)
- Commit Linting with [commitlint](https://github.com/conventional-changelog/commitlint)
- [Husky](https://www.npmjs.com/package/husky) for triggering commit linting and on commit test automation and linting for projects extending this one.

The [Github Flow Starter Project][fs-github-flow] is setup to make following the [Conventional Commits Specification][conventional-commits] for adding human and machine readable meaning to commit messages easy.

Following the [Conventional Commits Specification][conventional-commits] encourages proper use of the [Semantic Versioning Specification](https://semver.org/) and also enables automatic generation of the projects changelog (`CHANGELOG.md`).

In addition to the capabilities added by the [Github Flow Starter Project][fs-github-flow], this projects adds:

- Published `index.js` Module API Entry Point
- Testing with [@web/test-runner][wtr]
- [JSDoc][jsdoc] Documentation
- [Rollup](https://rollupjs.org/) with [ES2021][ES2021] Module Bundling
- Module Declaration Properties in `package.json`

# Get Started

To get started first clone or [download](https://github.com/fireflysemantics/fs-javascript-starter/archive/refs/tags/1.2.0.zip) the current release of this project.

## Clone the Github Repository

```
git clone git@github.com:fireflysemantics/fs-javascript-starter.git
```

## Setup

Install dependencies by `cd`ing into the root
of the project and running `npm i && npm run init`.

```
cd fs-javascript-starter
npm i && npm run init
```

The `npm run init` script will install `jsdoc` globally,
making it easier to run the command.

Run the default tests. If you get a message like this:

```
Looks like Playwright Test or Playwright was just installed or updated ...
```

Then run the script `npm run playwright-init`. This will download the browsers needed by playwright.

## Lint the Project

To run eslint on the project:

```
npm run lint:eslint
```

Or

```
npm run lint
```

## Test the Project

```
npm run test
```

## JSDoc the Project

```
npm run doc
```

To clean the `doc` directory run:

```
npm run clean:doc
```

To serve the jsdoc locally run:

```
npm run serve:doc
```

Deploy the docs to Github Pages with:

```
npm run deoploy:doc
```

This a link to the [gist](https://gist.github.com/cobyism/4730490) for the `git subtree` command.

To see the generated jsdoc for this project [click on this link](https://fireflysemantics.github.io/fs-javascript-starter/).

## Create a Rollup Module

```
npm run rollup
```

For more see [rollup][rollup].

If the project is published NPM the `index.bundle.js` can be load from
the `UNPKG` CDN via the URL `https://unpkg.com/[package name]`. So for
example the URL for this projects `index.bundle.js` module is
`https://unpkg.com/fs-javascript-starter`.

[Here is a Stackblitz demo of this bundle loaded.][stackblitz].

## Publish the Project

```
npm run npm:pub
```

The [release-it configuration](https://github.com/release-it/release-it/blob/main/docs/npm.md) in `package.json` sets
publish to NPM to `false`, but it's also possible to use [release-it][rl] to perform the publishing.

## Unpublish the Project

```
npm run npm:unpub
```

## Demo the Project

This will serve the `demo/index.html` file using [@web/dev-server][server].
The server resolves node style "bare" import specifiers,
so there are no additional build steps.

```
npm run serve
```

Here is a link to the documentation for [@web/dev-server][server-docs].

## Release the Project

Run [release-it][rl] to perform a release.

```
npm run release
```

## Review Project Commits

```
git log
```

## Delete 2 Commits

```
git reset --hard HEAD~2
```

For more on deleting and cleaning up commit history this [SO Post][so].

Keeping the commit history "Clean" and "Flowing" is creates a better
experience for reviewers intersted in learning more about the project
by running `git log`.

[fs-github-flow]: https://github.com/fireflysemantics/fs-github-flow-docs-starter
[conduct]: .github/CODE_OF_CONDUCT.md
[commit]: .github/COMMIT_GUIDELINES.md
[contributing]: .github/CONTRIBUTING.md
[extension]: .github/PROJECT_EXTENSION.md
[questions]: .github/QUESTIONS.md
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
[es2021]: https://tc39.es/ecma262/2021/
[wtr]: https://www.npmjs.com/package/@web/test-runner
[jsdoc]: https://jsdoc.app/
[rollup]: https://rollupjs.org/
[rl]: https://github.com/release-it/release-it/tree/main
[so]: https://stackoverflow.com/questions/10153486/how-to-delete-the-last-n-commits-on-github-and-locally
[server]: https://www.npmjs.com/package/@web/dev-server
[server-docs]: https://modern-web.dev/docs/dev-server/overview/
[stackblitz]: https://stackblitz.com/edit/stackblitz-starters-zmz5b9?file=index.html
