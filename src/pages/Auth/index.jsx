import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/action/accountAction";
import axios from "axios";
import { login } from "../../redux/slice/accountSlice";

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => {
    console.log("cek reducer", state.accountSliceReducer);
    return state.accountSliceReducer.username;
  });
  console.log("CEK SLICE REDUCER", username);

  const [inUsername, setInUsername] = React.useState("");
  const [inPassword, setInPassword] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);

  const onLogin = () => {
    axios
      .get(
        `http://localhost:2025/account?username=${inUsername}&password=${inPassword}`
      )
      .then((response) => {
        if (!response.data.length) {
          alert("Account not found");
        } else {
          localStorage.setItem("auth", JSON.stringify(response.data[0]));
          //   dispatch(loginAction(response.data[0]));
          dispatch(login(response.data[0]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("USERNAME", username);
  React.useEffect(() => {
    if (username) {
      navigate("/dash");
    }
  }, [username]);
  return (
    <Box>
      <Card
        maxW={"md"}
        margin={"auto"}
        marginTop={"60"}
        paddingY={"4"}
        shadow={"lg"}
      >
        <CardBody textAlign={"center"}>
          <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"}>
            Welcome
          </Text>
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
          <Button
            type="button"
            marginTop={"8"}
            colorScheme="green"
            onClick={onLogin}
          >
            Login
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
};

export default AuthPage;
