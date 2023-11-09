import { Box } from "@mui/material"
import { StyledCaption} from "../../utils/styledComponents"

const CarouselImage = ({ image }) => {
    return (
        <Box sx={{
            height: '500px', // Container height, adjust if necessary
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Centers content vertically within the container
            alignItems: 'center', // Centers content horizontally within the container
        }}>
            <img 
                src={image.link} 
                alt={image.description} 
                style={{ 
                    maxWidth: '100%', // Ensures the image does not exceed the width of the container
                    maxHeight: '300px', // Max image height, adjust if necessary
                    objectFit: 'contain', // Keeps the image's aspect ratio
                    borderRadius: '10px',
                    margin: 'auto' // Centers the image horizontally within the container
                }} 
            />
            <StyledCaption mt={2} gutterBottom sx={{overflow:'auto', paddingX:'4px', paddingY:'20px'}}>
                {image.description}
            </StyledCaption>
        </Box>
    );
};

export default CarouselImage;
