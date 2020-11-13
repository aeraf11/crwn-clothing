import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...othereProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...othereProps}>
        {children}
    </button>
)

export default CustomButton;