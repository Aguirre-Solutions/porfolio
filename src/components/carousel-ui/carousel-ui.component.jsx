import React, { useContext } from 'react';
import { ThemeValuesContext } from '../../context/theme-values.context';

import {SlArrowRight, SlArrowLeft} from 'react-icons/sl'



export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    const {theme, checks} = useContext(ThemeValuesContext);

    const {isMobile, isTablet} = checks;

    // Add conditional style based on the className
    const disabled = className.includes("slick-disabled");
    const dynamicStyle = {
        ...style,
        display: "block",
        right: isMobile ? '40px' : isTablet ? '-2px' : '25px',
        zIndex: 1000,
        fontSize: '30px',
        color: disabled ? theme.palette.additional.lightPurple : theme.palette.additional.deepPurple, // Change color if disabled
    };

    return (
        <SlArrowRight
            size='30px'
            className={className}
            style={dynamicStyle}
            onClick={onClick}
        />
    );
}

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    const {theme, checks} = useContext(ThemeValuesContext);

    const {isMobile, isTablet} = checks;



    // Add conditional style based on the className
    const disabled = className.includes("slick-disabled");
    const dynamicStyle = {
        ...style,
        left: isMobile ? '40px' : isTablet ? '-2px' : '25px',
        display: "block",
        zIndex: 1000,
        fontSize: '30px',
        color: disabled ? theme.palette.additional.lightPurple : theme.palette.additional.deepPurple, // Change color if disabled
    };

    return (
        <SlArrowLeft
            size='30px'
            className={className}
            style={dynamicStyle}
            onClick={onClick}
        />
    );
}
