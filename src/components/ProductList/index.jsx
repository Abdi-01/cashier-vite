import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

const ProductsList = (props) => {
  const printProduct = () => {
    const data = props.selectedCat ? props.products.filter((val,idx)=>val.category===props.selectedCat.title) : props.products;
    return data.map((val, idx) => {
      return (
        <Card
          key={val.id}
          width={{ base: "30%", md: "31%" }}
          cursor={"pointer"}
          onClick={() => props.onToCart(val)}
        >
          <CardBody>
            <Image
              src={val.img}
              alt={val.name}
              rounded={"full"}
              width={"28"}
              margin={"auto"}
              shadow={"md"}
            />
          </CardBody>
          <CardFooter>
            <Box margin={"auto"}>
              <Text
                textAlign={"center"}
                fontSize={{ base: "small", md: "lg" }}
                fontWeight={"bold"}
              >
                {val.name}
              </Text>
              <Text textAlign={"center"} textColor={"gray.400"}>
                Rp. {val.price.toLocaleString("id")}
              </Text>
            </Box>
          </CardFooter>
        </Card>
      );
    });
  };
  return (
    <Flex flexWrap={"wrap"} gap={"4"} width={"full"}>
      {printProduct()}
    </Flex>
  );
};

export default ProductsList;
