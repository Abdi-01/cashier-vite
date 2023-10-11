import { Flex, Button, Input, InputGroup, InputLeftAddon, Text, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalOverlay, FormControl, FormLabel, InputRightAddon, Select } from "@chakra-ui/react";
import LayoutPage from "../../../components/LayoutPage";
import { AiOutlinePlus, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import React from "react";
import axios from "axios";
import useToggle from "../../../hooks/useToggle";
import { API_URL } from "../../../helper";

const ManageAccountPage = () => {
    const [inUsername, setInUsername] = React.useState("");
    const [inPassword, setInPassword] = React.useState("");
    const [inRole, setInRole] = React.useState("");
    const [isVisible, setIsVisible] = React.useState(false);
    const { isOpenModal, onToggleOpen, onToggleClose } = useToggle();
    const getAccounts = () => {
        axios.get("http://localhost:2023/account")
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    const onSave = () => {
        console.log(inUsername, inPassword, inRole);
        if (inUsername && inPassword && inRole) {
            // Data disimpan kedatabase
            axios.post(API_URL + `/account`, {
                username: inUsername,
                password: inPassword,
                role: inRole
            }).then((response) => {
                console.log("RESPONSE ADD ACCOUNT",response.data);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            alert("Fill in all form data");
        }
    }

    React.useEffect(() => {
        getAccounts();
    }, []);
    return <LayoutPage>
        <Text fontSize={"3xl"}>Manage Account</Text>
        <Flex justifyContent={"space-between"} my={"8"}>
            <InputGroup width={["full", "sm"]}>
                <InputLeftAddon children={<BiSearch />} />
                <Input
                    type="text"
                    placeholder="Search your account"
                />
            </InputGroup>
            <Button type="button" onClick={onToggleOpen} colorScheme="green" leftIcon={<AiOutlinePlus />}>Add</Button>
        </Flex>
        <Modal isOpen={isOpenModal} onClose={onToggleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add new account</ModalHeader>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type="text" onChange={(e) => setInUsername(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input type={isVisible ? "text" : "password"} onChange={(e) => setInPassword(e.target.value)} />
                            <InputRightAddon onClick={() => setIsVisible(!isVisible)} cursor={"pointer"}>
                                {
                                    isVisible ?
                                        <AiOutlineEyeInvisible /> :
                                        <AiOutlineEye />
                                }
                            </InputRightAddon>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Role</FormLabel>
                        <Select onChange={(e) => setInRole(e.target.value)}>
                            <option value={"SPV"}>SPV</option>
                            <option value={"CASHIER"}>Cashier</option>
                        </Select>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" onClick={onSave} colorScheme="green" >Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </LayoutPage>;
}

export default ManageAccountPage;