import {
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  FormControl,
  FormLabel,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import LayoutPage from "../../../components/LayoutPage";
import {
  AiOutlinePlus,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import React from "react";
import axios from "axios";
import useToggle from "../../../hooks/useToggle";
import { API_CALL, API_URL } from "../../../helper";

const ManageAccountPage = () => {
  const [inUsername, setInUsername] = React.useState("");
  const [inPassword, setInPassword] = React.useState("");
  const [inRole, setInRole] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const { isOpenModal, onToggleOpen, onToggleClose } = useToggle();
  const getAccounts = async () => {
    try {
      const resGET = await API_CALL.get("/account");
      console.log("GET DATA ACCOUNT", resGET.data);
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .get(import.meta.env.VITE_API_URL + "/account")
    //   .then((response) => {
    //     console.log("GET DATA ACCOUNT", response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const onSave = async () => {
    try {
      if (inUsername && inPassword && inRole) {
        // Memeriksa apakah akun sudah terdaftar
        const resGET = await API_CALL.get(`/account?username=${inUsername}`);
        console.log(resGET.data);
        if (resGET.data.length) {
          alert("Account is already exist");
        } else {
          // Lanjut menambahkan data ke Database
          await API_CALL.post(`/account`, {
            username: inUsername,
            password: inPassword,
            role: inRole,
          });
          alert("Add account success");
        }
      } else {
        alert("Fill in all form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAccounts();
  }, []);
  return (
    <LayoutPage>
      <Text fontSize={"3xl"}>Manage Account</Text>
      <Flex justifyContent={"space-between"} my={"8"}>
        <InputGroup width={["full", "sm"]}>
          <InputLeftAddon children={<BiSearch />} />
          <Input type="text" placeholder="Search your account" />
        </InputGroup>
        <Button
          type="button"
          onClick={onToggleOpen}
          colorScheme="green"
          leftIcon={<AiOutlinePlus />}
        >
          Add
        </Button>
      </Flex>
      <Modal isOpen={isOpenModal} onClose={onToggleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new account</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                onChange={(e) => setInUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={isVisible ? "text" : "password"}
                  onChange={(e) => setInPassword(e.target.value)}
                />
                <InputRightAddon
                  onClick={() => setIsVisible(!isVisible)}
                  cursor={"pointer"}
                >
                  {isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
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
            <Button type="button" onClick={onSave} colorScheme="green">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LayoutPage>
  );
};

export default ManageAccountPage;
