import { Box, Button, Card, CardBody, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const AuthPage = () => {
    return <Box>
        <Card maxW={"md"} margin={"auto"} marginTop={"80"} paddingY={"4"} shadow={"lg"}>
            <CardBody textAlign={"center"} >
                <Text textAlign={"center"} fontWeight={700} fontSize={"2xl"}>Welcome</Text>
                <Text textAlign={"center"} >Your Dashbord is ready to use</Text>
                <Button type="button" marginTop={"8"} colorScheme="green">
                    <Link to={"/dash"}>
                        Go to Dashboard
                    </Link>
                </Button>
            </CardBody>
        </Card>
    </Box>
}

export default AuthPage;