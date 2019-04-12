import _classCallCheck from "/Users/daniel.beff/Projects/react-ui-starter/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/daniel.beff/Projects/react-ui-starter/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/daniel.beff/Projects/react-ui-starter/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/daniel.beff/Projects/react-ui-starter/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/daniel.beff/Projects/react-ui-starter/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React from "react";
import classNames from "classnames";

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: classNames("cp-Button", "-".concat(this.props.size), "-".concat(this.props.theme), {
          "-outline": this.props.isOutline
        }),
        onClick: this.props.onClick
      }, this.props.leftIcon, React.createElement("span", {
        className: "text"
      }, this.props.text), this.props.rightIcon);
    }
  }]);

  return Button;
}(React.Component);

export { Button as default };
Button.defaultProps = {
  theme: "red",
  size: "medium",
  isOutline: false
};