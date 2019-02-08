/* eslint-disable max-len */
import test from 'tape-catch';
import {parseFileSync, getGLTFAttribute} from '@loaders.gl/core';
import {OBJLoader} from '@loaders.gl/obj';

import OBJ_ASCII from 'test-data/obj/bunny.obj.js';
import {validateLoadedData} from '../conformance';

test('OBJLoader#parseText', t => {
  const data = parseFileSync(OBJ_ASCII, OBJLoader);
  validateLoadedData(t, data);

  t.equal(data.mode, 4, 'mode is TRIANGLES (4)');
  t.equal(data.indices.value.length, 14904, 'INDICES attribute was found');
  t.equal(data.indices.count, 14904, 'INDICES attribute was found');

  t.equal(getGLTFAttribute(data, 'POSITION').value.length, 7509, 'POSITION attribute was found');
  t.equal(getGLTFAttribute(data, 'POSITION').size, 3, 'POSITION attribute was found');

  // TODO - need OBJ test model with normals and uvs
  // const NORMAL = data.glTFAttributeMap.NORMAL;
  // const TEXCOORD_0 = data.glTFAttributeMap.TEXCOORD_0;
  // t.equal(data.attributes[NORMAL].value.length, 7509, 'NORMAL attribute was found');
  // t.equal(data.attributes[NORMAL].size, 3, 'NORMAL attribute was found');
  // t.equal(data.attributes[TEXCOORD_0].value.length, 7509, 'TEXCOORD_0 attribute was found');
  // t.equal(data.attributes[TEXCOORD_0].size, 3, 'TEXCOORD_0 attribute was found');

  t.end();
});