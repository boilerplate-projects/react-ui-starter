import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  render() {
    return (
      <div
        className={classNames(
          "cp-Button",
          `-${this.props.size}`,
          `-${this.props.theme}`,
          {
            "-outline": this.props.isOutline
          }
        )}
        onClick={this.props.onClick}
      >
        {this.props.leftIcon}
        <span className="text">{this.props.text}</span>
        {this.props.rightIcon}
      </div>
    );
  }
}

Button.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  isOutline: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  theme: "red",
  size: "medium",
  isOutline: false
};
