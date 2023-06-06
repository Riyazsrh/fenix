import React, { useState } from 'react'

const Button = ({ children, style, ...otherProps }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const ButtonStyles = {
        backgroundColor: isHover ? 'green' : '#35bf2e',
        color: "#fff",
        borderRadius: "5px",
        padding: 9,
        width: style && style.width ? style.width : "auto",
        border: "1px solid green",
        cursor: "pointer",
        fontWeight: 600,
        transition: "background-color 0.3s",
        fontSize: "18px",
        paddingBottom: 12
    }
    return (
        <button {...otherProps} style={{ ...ButtonStyles }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </button>
    )
}

export default Button