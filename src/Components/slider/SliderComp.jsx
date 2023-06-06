import { FullWidthBgImage } from "./FullWidthBgImage";
import { useResponsive } from "./useResponsive";
import { useRef } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../../Constant/Constant";

export const SliderComp = ({
    data,
    label,
    heading,
    subheading,
    slideNum,
    autoplay,
    autoplaySpeed
}) => {
    const { screenType } = useResponsive();
    const sliderRef = useRef();
    const settings = {
        arrows: false,
        dots: true,
        swipeToSlide: true,
        infinite: true,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        slidesToShow: screenType === "MOBILE" ? 2 : slideNum,
        slidesToScroll: screenType === "MOBILE" ? 2 : slideNum
    };

    return (
        <>
            <div>
                <h2 className="fw-bold position-absolute text-black ps-2">Real-time, interactive, global data</h2>
            </div>
            <div className="container2 ">
                <div className="wrapper">
                    {screenType !== "MOBILE" && (
                        <div onClick={() => sliderRef.current.slickPrev()} className="prev">
                            <ArrowBackIcon className="fs-3" />
                        </div>
                    )}

                    <Slider {...settings} ref={sliderRef}>
                        {data?.length > 0 &&
                            data?.map((item, index) => (
                                <FullWidthBgImage
                                    image={item.image}
                                    text={item.title}
                                    label={label}
                                    borderRadius={"30px"}
                                    height={"465px"}
                                />
                            ))}
                    </Slider>
                    {screenType !== "MOBILE" && (
                        <div onClick={() => sliderRef.current.slickNext()} className="next">
                            <ArrowForwardIcon className="fs-3" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
