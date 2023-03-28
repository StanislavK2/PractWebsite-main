import React from "react";
import Sidebar from "./Sidebar";
import {Flex, Grid, Box, Text, Button, Icon, Image} from "@chakra-ui/react";
import axios from "axios";
import {AiFillStar} from 'react-icons/ai'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {setItem} from "../utility/localStorage";
import "../index.css";
import {useDispatch, useSelector} from "react-redux";
import {Get_cloth_item, sortCLOTHES} from "../store/Cloth/Cloth.action";
import Loading from "./Loading";

const CompanyOneC = () => {
    const [filter, setFilter] = useState("Mens");
    const [reset, setReset] = useState(false)

    const navigate = useNavigate();


    const handleClick = (item) => {
        setItem("singleproduct", item);
        navigate("/company/singleproduct");
    };
    const handleChange = (e) => {
        const {value} = e.target;
        console.log(value)
        if (value == "reset") {

            setReset((previous) => !previous)
            return
        }
        dispatch(sortCLOTHES(value))

    }


    const {cloth} = useSelector((store) => store.ClothManger);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Get_cloth_item());
    }, [reset]);
    let data;
    data = cloth.filter((item) => item.category === filter);


    {
        if (data.length == 0) {
            return <Loading/>;
        } else {
            return (
                <div style={{marginTop: "120px"}}>
                    <Flex>
                        {/* <Sidebar setFilter={setFilter}/> */}
                        <Grid
                            mt={"30px"}
                            marginLeft={"240px"}
                            paddingLeft={"15px"}
                            width={"80%"}
                            templateColumns="repeat(3, 1fr)"
                            gap={6}
                        >
                            {data.map((el) => {
                                return (
                                    <Box id="probox" key={Math.random()}>
                                        <Box textAlign={"left"}>
                                            <img id="hov" src={el.image1} alt=""/>
                                            <Text noOfLines={[1]} fontSize={17}>{el.title}</Text>
                                            <Flex gap={2}>
                                                <img
                                                    width={17}
                                                    src="https://img.shop.com/Image/resources/images/onecart-icon.svg"
                                                    alt=""
                                                />
                                                <Text fontSize={13}>Продавец {el.soldby}</Text>
                                            </Flex>
                                            <p>{el.category}</p>
                                            <Text fontWeight={"bold"}>{el.price} рублей</Text>
                                            <Box mb="15px">
                                                {Array(5)
                                                    .fill("")
                                                    .map((_, i) => {
                                                        let rating = Math.ceil(Math.random() * 3);

                                                        return <Icon
                                                            as={AiFillStar}
                                                            key={i}
                                                            color={i <= rating ? "gold" : "gray.300"}
                                                        />
                                                    })}
                                            </Box>
                                            <Button
                                                backgroundColor={"blue.300"}
                                                onClick={() => handleClick(el)}
                                                marginTop={"-65px"}
                                                borderRadius={25}
                                                width={105}
                                                marginLeft={"70%"}
                                            >
                                                Посмотреть
                                            </Button>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Grid>
                    </Flex>
                </div>
            );
        }
    }
};

export default CompanyOneC;
