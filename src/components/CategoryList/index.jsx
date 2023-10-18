import React from "react";
import { Card, CardBody, CardFooter, Flex, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CategoryList = (props) => {
  const navigate = useNavigate();
  // return <div style={{ display: "flex", width: "100%", gap: "8px", overflowX: "auto" }}>
  return (
    <Flex
      gap={"4"}
      width={{ sm: "96", md: "xl", lg: "max" }}
      overflowX={{ base: "auto" }}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      paddingY={"4"}
      scrollBehavior={"smooth"}
    >
      {props.category.map((val, idx) => {
        if (props.selectedCat?.id === val.id) {
          return (
            <Box key={val.id}>
              <Card
                bg={"orange"}
                color={"white"}
                cursor={"pointer"}
                rounded={"lg"}
              >
                <CardBody
                  onClick={() => {
                    props.setSelectedCat(null);
                    navigate(`/dash`);
                  }}
                  margin={"2"}
                  cursor={"pointer"}
                  color={"#2F855A"}
                  bg={"white"}
                  shadow={"xl"}
                  rounded={"lg"}
                >
                  {val.icon}
                </CardBody>
                <CardFooter>
                  <Text margin={"auto"} textAlign={"center"}>
                    {val.title}
                  </Text>
                </CardFooter>
              </Card>
            </Box>
          );
        }
        return (
          <Box key={val.id}>
            <Card
              _hover={{ bg: "orange", color: "white" }}
              cursor={"pointer"}
              rounded={"lg"}
            >
              <CardBody
                onClick={() => {
                  props.setSelectedCat(val);
                  navigate(`/dash?category=${val.title}`);
                }}
                margin={"2"}
                cursor={"pointer"}
                _hover={{
                  color: "#2F855A",
                  bg: "white",
                  rounded: "md",
                  shadow: "lg",
                }}
              >
                {val.icon}
              </CardBody>
              <CardFooter>
                <Text margin={"auto"} textAlign={"center"}>
                  {val.title}
                </Text>
              </CardFooter>
            </Card>
          </Box>
        );
      })}
    </Flex>
  );
  // </div>
};

export default CategoryList;
