import Slider from "react-slick"




const ProjectImageCarousel = ({ images }) => {

    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    console.log(images);

    return (
        <Slider {...settings}>
            {images.map((image, index) => {
                console.log(image.link);
                const img = image.link
                return (
                    <div key={index}>
                        <img src={img} alt={`Project image ${index}`} style={{height:'50px'}} />
                    </div>
                )
            })}
        </Slider>
    )
}

export default ProjectImageCarousel; 