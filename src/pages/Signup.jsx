import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddUser } from "../store/Auth/auth.action";

const SignUp = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });
  //
  const dispatch = useDispatch();
  //
  const navigateTo = useNavigate();
  const GoTo = (path) => {
    console.log("path", path);
    navigateTo(path);
  };
  const HandleChange = (evt) => {
    let { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const SignupUser = () => {
    try {
      console.log("add", formData);
      dispatch(AddUser(formData));
      toast({
        title: "Добро пожаловать на страницу входа.",
        description: "Чтобы перейти дальше, вы должны сначала войти в систему.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      navigateTo("/signin");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      mt={"100px"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Регистрация
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          bgColor="#f0f1f7 "
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Имя</FormLabel>
                  <Input
                    borderColor={"grey"}
                    name="firstName"
                    type="text"
                    placeholder="Enter Firstname"
                    value={formData.firstName}
                    onChange={HandleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Фамилия</FormLabel>
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="Enter LastName"
                    value={formData.lastName}
                    onChange={HandleChange}
                    borderColor={"grey"}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Почтовый адрес</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={HandleChange}
                borderColor={"grey"}
              />
            </FormControl>
            <FormControl id="Contact" isRequired>
              <FormLabel>Номер телефона</FormLabel>
              <Input
                name="mobile"
                type="number"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={HandleChange}
                borderColor={"grey"}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Пароль</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password Here"
                  value={formData.password}
                  onChange={HandleChange}
                  borderColor={"grey"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={SignupUser}
              >
                Зарегистрироваться
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Уже есть аккаунт?{" "}
                <Link color={"blue.400"} onClick={() => GoTo("/signin")}>
                  Войти
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
