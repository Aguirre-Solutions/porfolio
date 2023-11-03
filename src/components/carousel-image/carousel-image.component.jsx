import { Box } from "@mui/material"
import { StyledCaption} from "../../utils/styledComponents"

const CarouselImage = ({ image }) => {
    return (
        <Box sx={{
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 100px',
        }}>
            <img 
            src={image.link} 
            alt={image.description} 
            style={{ width: '100%', maxHeight: '200px', borderRadius: '10px' }} />
            <StyledCaption gutterBottom> {image.description} </StyledCaption>
        </Box>
    );
};

export default CarouselImage;