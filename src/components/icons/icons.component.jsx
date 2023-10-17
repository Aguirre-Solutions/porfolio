import {TbBrandNodejs} from 'react-icons/tb';
import {SiMongodb, SiFirebase, SiReact, SiTypescript, SiGithub, SiRedux, SiMui} from 'react-icons/si';
import { Box } from "@mui/material";

const Icons = () => {
    const iconSize = 30;
    return (
        <Box  display="flex" justifyContent="center" gap={2}>
        <SiTypescript size={iconSize} />
        <SiReact size={iconSize} />
        <SiMui size={iconSize} />
        <SiRedux size={iconSize} />
        <TbBrandNodejs size={iconSize} />
        <SiMongodb size={iconSize} />
        <SiFirebase size={iconSize} />
        <SiGithub size={iconSize} />
    </Box>
    )
}

export default Icons