export const getCardHeight = (isMobile, isTablet, isLaptop, isDesktop) => {
    if(isMobile) return 'auto';
    if(isTablet) return 950;
    if(isLaptop) return 900;
    if(isDesktop) return 900;
    return 850;
};
