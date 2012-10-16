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
 * @fileoverview Generating Pascal for logic blocks.
 * @author fraser@google.com (Neil Fraser)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

Blockly.Pascal = Blockly.Generator.get('Pascal');

Blockly.Pascal.logic_compare = function() {
  // Comparison operator.
  var mode = this.getTitleValue('OP');
  var operator = Blockly.Pascal.logic_compare.OPERATORS[mode];
  var order = (operator == '=' || operator == '!=') ?
      Blockly.Pascal.ORDER_EQUALITY : Blockly.Pascal.ORDER_RELATIONAL;
  var argument0 = Blockly.Pascal.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Pascal.valueToCode(this, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Pascal.logic_compare.OPERATORS = {
  EQ: '=',
  NEQ: '!=',
  LT: '<',
  LTE: '<=',
  GT: '>',
  GTE: '>='
};

Blockly.Pascal.logic_operation = function() {
  // Operations 'and', 'or'.
  var operator = (this.getTitleValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.Pascal.ORDER_LOGICAL_AND :
      Blockly.Pascal.ORDER_LOGICAL_OR;
  var argument0 = Blockly.Pascal.valueToCode(this, 'A', order) || 'false';
  var argument1 = Blockly.Pascal.valueToCode(this, 'B', order) || 'false';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Pascal.logic_negate = function() {
  // Negation.
  var order = Blockly.Pascal.ORDER_UNARY_PREFIX;
  var argument0 = Blockly.Pascal.valueToCode(this, 'BOOL', order) || 'false';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.Pascal.logic_boolean = function() {
  // Boolean values true and false.
  var code = (this.getTitleValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Pascal.ORDER_ATOMIC];
};
