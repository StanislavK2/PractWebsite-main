import {AddIcon, DeleteIcon, EditIcon} from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    FormLabel,
    Heading,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Stack,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Textarea,
    Tfoot,
    Th,
    Thead,
    Tr,
    useDisclosure
} from '@chakra-ui/react';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CompanyOneC from '../components/AdminPage/CompanyOneC';
import Useres from '../components/AdminPage/Useres';
import Jewelery from '../components/AdminPage/ProcessingOneC'
import Electronics from '../components/AdminPage/ServicesOneC'
import Dashbord from '../components/AdminPage/Dashbord'


const AdminPage = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const firstField = React.useRef()

    const [dashbord, setDashbord] = useState(true)
    const [userlist, setUserlist] = useState(false)
    const [Clothlist, setCloth] = useState(false)
    const [jewllerylist, setJewllery] = useState(false)
    const [Electrolist, setElectrolist] = useState(false)
    const [cosmetics, setCosmetics] = useState(false)
    const [health, setHealth] = useState(false)


    const handleUser = () => {
        setDashbord(false)
        setUserlist(true)
        setCloth(false)
        setJewllery(false)
        setElectrolist(false)
        setCosmetics(false)
        setHealth(false)
    }
    const handleCloth = () => {
        setUserlist(false)
        setCloth(true)
        setJewllery(false)
        setElectrolist(false)
        setCosmetics(false)
        setDashbord(false)
        setHealth(false)
    }
    const handlejewllery = () => {
        setUserlist(false)
        setCloth(false)
        setJewllery(true)
        setElectrolist(false)
        setCosmetics(false)
        setDashbord(false)
        setHealth(false)

    }
    const handleElectronics = () => {
        setUserlist(false)
        setCloth(false)
        setJewllery(false)
        setElectrolist(true)
        setCosmetics(false)
        setDashbord(false)
        setHealth(false)

    }

    const handleDashbord = () => {
        setDashbord(true)
        setUserlist(false)
        setCloth(false)
        setJewllery(false)
        setElectrolist(false)
        setCosmetics(false)
        setHealth(false)

    }


    return (
        <>

            <Stack display="flex" flexDirection={{base: "column", sm: "row"}} mt="130px">
                <Stack spacing='24px' backgroundColor="#f0f1f7" px="5px">
                    <Box display="flex" flexDirection={{base: "row", sm: "column"}}>
                        <Button colorScheme='teal' mt='2' px='16' mb='10' onClick={handleDashbord}>Dashbord</Button>
                        <Button colorScheme='teal' mt='2' px='16' mb='10' onClick={handleUser}> Пользователи</Button>

                        <FormLabel></FormLabel>

                        <Button colorScheme='teal' mt='2' px='16' mb='10' onClick={handleCloth}> 1С:Предприятие</Button>
                        <Button colorScheme='teal' mt='2' px='16' mb='10' onClick={handlejewllery}> Обработки
                            1С</Button>
                        <Button colorScheme='teal' mt='2' px='16' mb='10' onClick={handleElectronics}> Сервисы
                            1С</Button>

                    </Box>


                </Stack>
                <Stack backgroundColor="white" w="100%">
                    <Heading> Админ-панель</Heading>
                    {dashbord && <Dashbord/>}
                    {userlist && <Useres/>}
                    {Clothlist && <CompanyOneC/>}
                    {jewllerylist && <Jewelery/>}
                    {Electrolist && <Electronics/>}
                </Stack>
            </Stack>
        </>

    )
};

export default AdminPage;