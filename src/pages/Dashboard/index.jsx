import React from "react";
import {
  Box,
  Card,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
  Image,
  Button,
  Divider,
  IconButton,
  CardBody,
} from "@chakra-ui/react";
import SideNav from "../../components/SideNav";
import { BiSearch } from "react-icons/bi";
import CategoryList from "../../components/CategoryList";
import ProductsList from "../../components/ProductList";
import { AiOutlineFire, AiOutlineDelete } from "react-icons/ai";
import { BiCake, BiDrink } from "react-icons/bi";
import { LuDessert } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { PiHamburger } from "react-icons/pi";

const DashboardPage = () => {
  const [date, setDate] = React.useState(new Date().toLocaleString("id"));
  const [category, setCategory] = React.useState([
    {
      id: 1,
      title: "Hot",
      icon: <AiOutlineFire size={36} />,
    },
    {
      id: 2,
      title: "Drink",
      icon: <BiDrink size={36} />,
    },
    {
      id: 3,
      title: "Snack",
      icon: <MdFastfood size={36} />,
    },
    {
      id: 4,
      title: "Dessert",
      icon: <LuDessert size={36} />,
    },
    {
      id: 5,
      title: "Cake",
      icon: <BiCake size={36} />,
    },
    {
      id: 6,
      title: "Burger",
      icon: <PiHamburger size={36} />,
    },
  ]);
  const [selectedCat, setSelectedCat] = React.useState(null);
  const [inSearch, setInSearch] = React.useState("");
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: "Burger",
      price: 12000,
      stock: 12,
      img: "https://meatlessfarm.com/wp-content/uploads/2020/02/Meatless-Farm-Ultimate-Meaty-March-Burger-square.jpg",
      isReady: true,
      category: "Burger",
    },
    {
      id: 2,
      name: "Coffee Latte",
      price: 12000,
      stock: 12,
      img: "https://as2.ftcdn.net/v2/jpg/01/32/60/51/1000_F_132605181_LGhweq27AR7L41GILfLJzKPdPf6GsXj4.jpg",
      isReady: true,
      category: "Drink",
    },
    {
      id: 3,
      name: "Arctic Cake",
      price: 12000,
      stock: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAFUgPsElkIAPVTr7KmtfDYxf45ny4uYfBPcV0lnt-NAQCVtSQtBvBcB8SldoUkhUzyM&usqp=CAU",
      isReady: true,
      category: "Cake",
    },
    {
      id: 4,
      name: "French Fries",
      price: 12000,
      stock: 12,
      img: "https://media.istockphoto.com/id/170171626/photo/fried-potato-cubes.jpg?s=612x612&w=0&k=20&c=l79cX_NY-rEoVGSSS3IH6ODtSN7lez0melOBMXKPFjU=",
      isReady: true,
      category: "Snack",
    },
    {
      id: 5,
      name: "Steak",
      price: 12000,
      stock: 12,
      img: "https://www.yourhomebasedmom.com/wp-content/uploads/2020/06/how-to-cook-medium-rare-steak-square.jpg",
      isReady: true,
      category: "Hot",
    },
  ]);
  const [cart, setCart] = React.useState([]);

  const onToCart = (data) => {
    const idx = cart.findIndex((val) => val.id === data.id);
    const temp = [...cart];
    if (idx < 0) {
      temp.push({ ...data, qty: 1 });
    } else {
      temp[idx].qty = temp[idx].qty + 1;
    }
    setCart(temp);
  };

  const onDelete = (data) => {
    const idx = cart.findIndex((val) => val.id === data.id);
    const temp = [...cart];
    if (temp[idx].qty === 1) {
      temp.splice(idx, 1);
    } else {
      temp[idx].qty = temp[idx].qty - 1;
    }
    setCart(temp);
  };

  setInterval(() => {
    setDate(new Date().toLocaleString("id"));
  });

  return (
    <Flex width={"full"}>
      <SideNav />
      <Box padding={{ base: "4" }} maxWidth={"full"} flex={1}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "flex-end" }}
          alignItems={{ md: "center" }}
        >
          <Text fontSize={"3xl"} flex={1} fontWeight={700}>
            Order <span style={{ fontWeight: "normal" }}>Menu</span>{" "}
          </Text>
          <Text flex={1} color={"gray.400"} fontWeight={700}>
            {date}
          </Text>
          <Box position={"relative"}>
            <InputGroup width={["full", "sm"]}>
              <InputLeftAddon children={<BiSearch />} />
              <Input
                type="text"
                placeholder="Search your menu"
                onChange={(e) => setInSearch(e.target.value)}
              />
            </InputGroup>
            <Card
              display={inSearch ? "block" : "none"}
              position={"absolute"}
              zIndex={999}
              width={"full"}
              padding={"2"}
            >
              {/* <CardBody> */}
              {products
                .filter((e) =>
                  e.name.toLowerCase().includes(inSearch.toLowerCase())
                )
                .map((val, idx) => {
                  return (
                    <Box key={val.id} width={"100%"} paddingX={"2"}>
                      <Flex
                        position={"relative"}
                        marginY={"2"}
                        gap={"4"}
                        alignItems={"center"}
                      >
                        <Image
                          width={"16"}
                          rounded={"md"}
                          shadow={"sm"}
                          src={val.img}
                          alt={val.name}
                        />
                        <Box>
                          <Text
                            textAlign={"left"}
                            fontSize={{ base: "xs", md: "lg" }}
                            fontWeight={"bold"}
                          >
                            {val.name}
                          </Text>
                          <Text textAlign={"left"} textColor={"gray.400"}>
                            Rp. {val.price.toLocaleString("id")}
                          </Text>
                        </Box>
                      </Flex>
                      <Divider />
                    </Box>
                  );
                })}
              {/* </CardBody> */}
            </Card>
          </Box>
        </Flex>
        <Box marginTop={"6"} p={"2"} width={"fit-content"}>
          <CategoryList
            category={category}
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
          />
        </Box>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ md: "center" }}
        >
          <Text fontSize={"3xl"} flex={1} fontWeight={700}>
            Menu <span style={{ fontWeight: "normal" }}>List</span>{" "}
          </Text>
          <Box display={"flex"} alignItems={"center"}>
            <label style={{ width: "90px" }}>Sort by :</label>
            <Select border={"none"} fontWeight={"bold"} cursor={"pointer"}>
              <option>Select</option>
              <option>Price ASC</option>
              <option>Price DESC</option>
            </Select>
          </Box>
        </Flex>
        <Box>
          <ProductsList
            products={products}
            onToCart={onToCart}
            selectedCat={selectedCat}
          />
        </Box>
      </Box>
      <Box
        display={cart.length === 0 ? "none" : "flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100vh"}
        bg={"white"}
        shadow={"lg"}
        minW={"72"}
        padding={"4"}
      >
        <Box>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ base: "flex-end" }}
            alignItems={{ md: "center" }}
          >
            <Text fontSize={"3xl"} flex={1} fontWeight={700}>
              Order <span style={{ fontWeight: "normal" }}>List</span>{" "}
            </Text>
          </Flex>
          <Box>
            {cart.map((val, idx) => {
              return (
                <Box key={val.id} width={"100%"} paddingX={"2"}>
                  <Flex
                    position={"relative"}
                    marginY={"2"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Image
                      width={"8"}
                      rounded={"md"}
                      shadow={"sm"}
                      src={val.img}
                      alt={val.name}
                    />
                    <Box>
                      <Text
                        textAlign={"left"}
                        fontSize={{ base: "xs", md: "lg" }}
                        fontWeight={"bold"}
                      >
                        {val.name}
                      </Text>
                      <Text textAlign={"left"} textColor={"gray.400"}>
                        Rp. {val.price.toLocaleString("id")}
                      </Text>
                    </Box>
                    <Text textAlign={"center"} fontWeight={"semibold"}>
                      {val.qty}x
                    </Text>
                    <IconButton
                      size={"xs"}
                      right={-3}
                      rounded={"full"}
                      _hover={{ bg: "orange", color: "white" }}
                      //   position={"absolute"}
                      onClick={() => onDelete(val)}
                      top={0}
                      icon={<AiOutlineDelete />}
                    />
                  </Flex>
                  <Divider />
                  <Text textAlign={"right"} fontWeight={"bold"}>
                    Rp. {(val.qty * val.price).toLocaleString("id")}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Divider />
          <Flex justifyContent={"space-between"} alignItems={"center"} my={"4"}>
            <Text fontWeight={"semibold"} color={"gray.500"}>
              Total Payment
            </Text>
            <Text fontWeight={"bold"} fontSize={"xl"}>
              Rp.{" "}
              {cart
                .reduce((prev, curr) => prev + curr.qty * curr.price, 0)
                .toLocaleString("id")}
            </Text>
          </Flex>
          <Button type="button" width={"full"} colorScheme="green">
            Order Now
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default DashboardPage;
