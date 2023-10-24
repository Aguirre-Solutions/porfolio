export const getCardHeight = (isMobile, isTablet, isLaptop, isDesktop) => {
    if(isMobile) return 'auto';
    if(isTablet) return 900;
    if(isLaptop) return 950;
    if(isDesktop) return 1000;
    return 850;
};
