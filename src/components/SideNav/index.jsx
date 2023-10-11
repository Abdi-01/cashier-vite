import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react"
import { BiHomeCircle, BiSolidDashboard, BiSolidUserAccount } from "react-icons/bi"
import { useNavigate } from "react-router-dom";

const SideNav = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = React.useState([
        {
            id: 1,
            title: "Home",
            icon: <BiHomeCircle size={28} style={{ margin: "auto" }} />,
            path:"/dash"
        },
        {
            id: 2,
            title: "Manage",
            icon: <BiSolidDashboard size={28} style={{ margin: "auto" }} />
        },
        {
            id: 3,
            title: "Account",
            icon: <BiSolidUserAccount size={28} style={{ margin: "auto" }} />,
            path: "/manage/account"
        }
    ])
    return <Box display={{ base: "none", md: "block" }} height={"100vh"} bg={"white"} roundedRight={"2xl"} shadow={"lg"} width={"24"} padding={"4"}>
        <Flex flexDirection={"column"} alignContent={"center"} gap={"4"}>
            {
                menu.map((val, idx) => {
                    return <Box key={val.id}
                        onClick={() => navigate(val.path)}
                        color={"gray.400"}
                        _hover={{ color: "gray", textColor: "gray", bg: "gray-200", rounded: "md" }} cursor={"pointer"}>
                        <Box _hover={{ color: "green" }}>
                            {val.icon}
                        </Box>
                        <Text fontSize={"xs"} textAlign={"center"} _hover={{}}>{val.title}</Text>
                    </Box>
                })
            }
        </Flex>
    </Box>
}

export default SideNav;