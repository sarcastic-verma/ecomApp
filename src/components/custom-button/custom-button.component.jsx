import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, ...otherProps}) => {
    return <button {...otherProps} className={"custom-button"}>
        {children}
    </button>
};

export default CustomButton;