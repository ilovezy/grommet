'use strict';

exports.__esModule = true;
exports.StyledDataTableFooter = exports.StyledDataTableHeader = exports.StyledDataTableBody = exports.StyledDataTableRow = exports.StyledDataTable = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDataTable = exports.StyledDataTable = _styledComponents2.default.table.withConfig({
  displayName: 'StyledDataTable'
})(['border-spacing:0;border-collapse:collapse;height:100%;']);

var StyledDataTableRow = exports.StyledDataTableRow = _styledComponents2.default.tr.withConfig({
  displayName: 'StyledDataTable__StyledDataTableRow'
})(['height:100%;', ''], function (props) {
  return props.size && '\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ';
});

var StyledDataTableBody = exports.StyledDataTableBody = _styledComponents2.default.tbody.withConfig({
  displayName: 'StyledDataTable__StyledDataTableBody'
})(['height:100%;', ''], function (props) {
  return props.size && '\n    display: block;\n    width: 100%;\n    max-height: ' + props.theme.global.size[props.size] + ';\n    overflow: auto;\n  ';
});

var StyledDataTableHeader = exports.StyledDataTableHeader = _styledComponents2.default.thead.withConfig({
  displayName: 'StyledDataTable__StyledDataTableHeader'
})(['height:100%;', ''], function (props) {
  return props.size && '\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ';
});

var StyledDataTableFooter = exports.StyledDataTableFooter = _styledComponents2.default.tfoot.withConfig({
  displayName: 'StyledDataTable__StyledDataTableFooter'
})(['height:100%;', ''], function (props) {
  return props.size && '\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ';
});

exports.default = {};