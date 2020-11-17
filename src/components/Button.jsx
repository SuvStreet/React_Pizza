import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({ className, children, outline }) => {
    return (
        <button
            className={classNames("button", className, {
                "button--outline": outline,
            })}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;
