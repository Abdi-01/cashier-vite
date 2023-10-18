import { Flex, Box } from "@chakra-ui/react";
import SideNav from "./SideNav";

const LayoutPage = (props) => {
  return (
    <Flex width={"full"}>
      <SideNav />
      <Box display={"flex"} maxWidth={"full"} flex={1}>
        {props.children}
      </Box>
    </Flex>
  );
};

export default LayoutPage;
