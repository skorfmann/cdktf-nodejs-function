import { readFileSync } from 'fs';
import * as path from 'path';
import { Testing, TerraformStack } from 'cdktf';
import { NodejsFunction } from '../src';

test('bundle some code', () => {
  const app = Testing.app();
  const stack = new TerraformStack(app, 'bundled');

  const nodejsFn = new NodejsFunction(stack, 'function', {
    path: path.join(__dirname, 'fixtures', 'simple.ts'),
  });

  expect(readFileSync(nodejsFn.bundledPath, 'utf-8')).toMatchInlineSnapshot(`
"var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, \\"__esModule\\", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// simple.ts
__markAsModule(exports);
__export(exports, {
  handler: () => handler
});
var handler = async () => {
  return {
    statusCode: 200,
    headers: {
      \\"Content-Type\\": \\"text/html; charset=utf-8\\"
    },
    body: \\"<p>Hello world!</p>\\"
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
"
`);
});
