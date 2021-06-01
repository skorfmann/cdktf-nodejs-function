const { ConstructLibraryCdktf } = require('projen');
const project = new ConstructLibraryCdktf({
  author: 'Sebastian Korfmann',
  authorAddress: 'sebastian@korfmann.net',
  cdktfVersion: '0.4.0',
  defaultReleaseBranch: 'main',
  name: 'cdktf-nodejs-function',
  repositoryUrl: 'https://github.com/sebastian/cdktf-nodejs-function.git',
  deps: ['esbuild'],
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
});
project.synth();