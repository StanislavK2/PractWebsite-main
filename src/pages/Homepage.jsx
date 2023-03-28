import React from "react";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {
    Flex,
    Text,
    Spacer,
    HStack,
    Card,
    CardBody,
    Link,
    Image,
    Button,
    Box,
    VStack,
    Stack,
    Grid,
} from "@chakra-ui/react";

import {AiFillDollarCircle} from "react-icons/ai";
import Carousel from "../components/Carousel";
import CarouselCosmetics from "../components/CarouselCosmetics";
import CarouselHealth from "../components/CarouselHealth";
import CarouselElectronics from "../components/CarouselElectronics";

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "black",
                borderRadius: "50%",
                margin: "auto",
                width: "50px",
                height: "50px",
                position: "absolute",
                zIndex: "1",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                background: "black",
                borderRadius: "50%",
                margin: "auto",
                width: "50px",
                height: "50px",
                position: "absolute",
                zIndex: "1",
            }}
            onClick={onClick}
        />
    );
}

const Homepage = () => {
    const navigateTo = useNavigate();
    const GoTo = (path) => {
        console.log("path", path);
        navigateTo(path);
    };
    const [data, setData] = React.useState([]);
    useEffect(() => {
        axios
            .get("https://next-backend-orpin.vercel.app/jewelery")
            .then((response) => {

                setData(response.data);
            });
    }, []);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    nextArrow: <SampleNextArrow/>,
                    prevArrow: <SamplePrevArrow/>,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    nextArrow: <SampleNextArrow/>,
                    prevArrow: <SamplePrevArrow/>,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <SampleNextArrow/>,
                    prevArrow: <SamplePrevArrow/>,
                },
            },
        ],
    };
    return (
        <div style={{textAlign: "center"}}>
            <Flex
                backgroundColor="#f0f1f7"
                height="30px"
                alignItems="center"
                // direction={["column", "column", "row", "row"]}
                // h={["12vh", "12vh", "10vh", "10vh"]}
                marginTop="120px"
            >
                <Spacer/>

                <Flex>
                    <Text
                        style={{color: "#545871", fontSize: ".75rem"}}
                        marginRight="20px"
                    >
                        <Text color="#545871" display="flex">
                            Получайте кэшбэк до 50% за онлайн покупки.
                            <Text as="u" fontWeight="bold">
                                <Link> Узнать больше</Link>
                            </Text>
                        </Text>
                    </Text>
                </Flex>
            </Flex>
            <Image
                id="hov"
                height="500px"
                marginTop="30px"
                marginLeft="160px"
                src="https://sun9-42.userapi.com/impg/rGbMaXrNZiGAWg9C5CEjf2Zre7VMnzgLwej6Cw/iwIWpcWp6R0.jpg?size=1344x449&quality=96&sign=934e798c86c59f1f68ed04df992c90c3&type=album"
            />
            <Box bgColor="#f0f1f7" mt="70px">
                <VStack>
                    <Text mb="50px"
                          fontFamily="oswald, serif"
                          fontSize="38px"
                          fontWeight="normal"
                          color="#2e2c38">
                        СЕРВИСЫ 1С
                    </Text>
                    <CarouselElectronics/>
                </VStack>
            </Box>
            {/*
font-size: 1rem;
    text-align: center;
    line-height: 1.625rem;
    font-weight: 700;
    text-transform: uppercase; */}


        </div>
    );
};

export default Homepage;
