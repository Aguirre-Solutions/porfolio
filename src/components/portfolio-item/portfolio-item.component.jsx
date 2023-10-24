import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material"


const  PortfolioItem = ({ imageSrc, title, description }) => {

    return (
        <Card >
            <CardMedia
                sx={{ height: 0, paddingTop: '56.25%' }}
                image={imageSrc}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PortfolioItem;
