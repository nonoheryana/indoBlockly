/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Dart for list blocks.
 * @author fraser@google.com (Neil Fraser)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 * 
 * MODIFIED BY INDOBLOCKLY
 * aanx04 2012
 */

Blockly.C = Blockly.Generator.get('C');

Blockly.C.lists_create_empty = function() {
  // Create an empty list.
  return '[]';
};

Blockly.C.lists_create_with = function() {
  // Create a list with any number of elements of any type.
  var code = new Array(this.itemCount_);
  for (n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.C.valueToCode(this, 'ADD' + n, true) || 'null';
  }
  return '[' + code.join(', ') + ']';
};

Blockly.C.lists_repeat = function(opt_dropParens) {
  // Create a list with one element repeated.
  if (!Blockly.C.definitions_['lists_repeat']) {
    // Function adapted from Closure's goog.array.repeat.
    var functionName = Blockly.C.variableDB_.getDistinctName('lists_repeat',
        Blockly.Generator.NAME_TYPE);
    Blockly.C.lists_repeat.repeat = functionName;
    var func = [];
    func.push('List ' + functionName + '(value, n) {');
    func.push('  var array = new List(n);');
    func.push('  for (int i = 0; i < n; i++) {');
    func.push('    array[i] = value;');
    func.push('  }');
    func.push('  return array;');
    func.push('}');
    Blockly.C.definitions_['lists_repeat'] = func.join('\n');
  }
  var argument0 = Blockly.C.valueToCode(this, 'ITEM', true) || 'null';
  var argument1 = Blockly.C.valueToCode(this, 'NUM') || '0';
  return Blockly.C.lists_repeat.repeat + '(' + argument0 + ', ' + argument1 + ')';
  return '[]';
};

Blockly.C.lists_length = function(opt_dropParens) {
  // Testing the length of a list is the same as for a string.
  return Blockly.C.text_length.call(this, opt_dropParens);
};

Blockly.C.lists_isEmpty = function(opt_dropParens) {
  // Testing a list for being empty is the same as for a string.
  return Blockly.C.text_isEmpty.call(this, opt_dropParens);
};

Blockly.C.lists_indexOf = function(opt_dropParens) {
  // Searching a list for a value is the same as search for a substring.
  return Blockly.C.text_indexOf.call(this, opt_dropParens);
};

Blockly.C.lists_getIndex = function(opt_dropParens) {
  // Indexing into a list is the same as indexing into a string.
  return Blockly.C.text_charAt.call(this, opt_dropParens);
};

Blockly.C.lists_setIndex = function() {
  // Set element at index.
  var argument0 = Blockly.C.valueToCode(this, 'AT', true) || '1';
  var argument1 = Blockly.C.valueToCode(this, 'LIST') || '[]';
  var argument2 = Blockly.C.valueToCode(this, 'TO', true) || 'null';
  // Blockly uses one-based indicies.
  if (argument0.match(/^\d+$/)) {
    // If the index is a naked number, decrement it right now.
    argument0 = parseInt(argument0, 10) - 1;
    if(argument0<0){
        argument0 = 0;
    }
  } else {
    // If the index is dynamic, decrement it in code.
    argument0 += ' - 1';
  }
  return argument1 + '[' + argument0 + '] = ' + argument2 + ';\n';
};
