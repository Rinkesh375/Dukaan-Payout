import { Box, Flex, Heading, Image, Input, InputGroup,  InputLeftElement, Text } from '@chakra-ui/react'
import Help from "../assets/Help.svg"
import { RiSearchLine } from "react-icons/ri";
import channel from "../assets/channel.svg"
import downFill from "../assets/downFill.svg"
const Navbar = () => {
    return (
        <>
            <Box w={"100%"} >
                <Flex w={"100%"} py={"12px"}>
                    <Flex flex={1} color={"#4D4D4D"} alignItems={"center"} gap={"16px"}>
                        <Heading as={"h5"} fontSize={"20px"} fontWeight={500} mt={"-2px"}
                            color={"black"}>Payouts</Heading>
                        <Flex gap={"6px"} alignItems={"center"}>
                            <Image src={Help} w={"14px"} />
                            <Text fontSize={"12px"}>How it works</Text>
                        </Flex>
                    </Flex>
                    <Flex flex={1} color={"#808080"} alignItems={"center"} justifyContent={"center"}>
                        <InputGroup
                        >
                            <InputLeftElement
                                pointerEvents="none"
                                children={<RiSearchLine size={"16px"} color="#808080" />}
                            />
                            <Input bgColor={"#F2F2F2"} py={"9px"} px={"16px"} type="text" fontWeight={400} fontSize={"15px"} placeholder="Search features, tutorials, etc." />
                        </InputGroup>

                    </Flex>
                    <Flex flex={1} color={"#4D4D4D"} alignItems={"center"} justifyContent={"right"} gap={"12px"}>
                        <Box p={"10px"} borderRadius={"full"} bgColor={"#E6E6E6"}>
                            <Image src={channel} />
                        </Box>
                        <Image src={downFill} />
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar
