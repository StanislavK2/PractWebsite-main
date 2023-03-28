import React from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { CgMail } from "react-icons/cg";
import { Image } from "@chakra-ui/react";

const Footer = () => {
  return (

    <Box borderTop="1px solid grey" width={"100%"}>
      <Box justifyContent={"space-between"} backgroundColor={"#545871"}>
        <Flex
          justifyContent={"space-between"}
          borderBottom="1px solid white"
          p={2}
        >
          <Box display={"flex"} w={"60%"}>
        
            <Text
              color={"white"}
              fontSize={{ xl: "20", lg: "15", sm: "12", base: "8" }}
            >
                Получайте предложения по электронной почте и получайте кэшбэк
            </Text>{" "}
            <Input placeholder="Введите ваш почтовый адрес..." width={"50%"} ml={2} />
            <Button>Зарегистрироваться</Button>
          </Box>
        </Flex>
      </Box>
      <Box justifyContent={"space-between"} backgroundColor={"#545871"}>
        <Flex
          justifyContent={"space-between"}
          borderBottom="1px solid white"
          p={1}
        >
          <Box
            display={"flex"}
            mr={"10px"}
            fontSize={{ xl: "20", lg: "18", sm: "16", base: "13" }}
          >
            <CgMail color="white" />
            <ImFacebook color="white" />
            <BsTwitter color="white" />
          </Box>
        </Flex>
      </Box>
      <Box
        fontSize={{ xl: "12", lg: "10", sm: "8", base: "7" }}
        borderBottom="1px solid grey"
        backgroundColor={"#f0f1f7 "}
        p={3}
      >
        <Text>
          © 2023 ООО "Сетевые решения"
        </Text>
          <Image
              height="5px"
              backgroundColor="rgba(0,0,0,.5)"
              src="https://ae04.alicdn.com/kf/H0fc292a8b2f34ae1845e141cf67e6ed4Q.jpg_640x640.jpg"
              alt="beauty"
              borderRadius="lg"
          />
      </Box>
    </Box>
  );
};

export default Footer;
