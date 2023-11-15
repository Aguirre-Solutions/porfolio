import {TbBrandNodejs} from 'react-icons/tb';
import {SiMongodb, SiFirebase, SiReact, SiTypescript, SiRedux, SiMui, SiAmazonaws} from 'react-icons/si';
import { Box  } from "@mui/material";


const Icons = ({checks}) => {
    const iconSize = 30;

    const {isTablet, isMobile} = checks;

    return (
        <Box display="flex" marginBottom={2} justifyContent="space-around" gap={1} sx={{width:isTablet ? '70%': isMobile ? '60%' : '60%'}}>
            <SiReact size={iconSize} />
            <SiRedux size={iconSize} />
            <SiTypescript size={iconSize} />
            <TbBrandNodejs size={iconSize} />
            <SiMongodb size={iconSize} />
            <SiFirebase size={iconSize} />
            <SiAmazonaws size={iconSize} />
        </Box>
    )
}


export default Icons;
