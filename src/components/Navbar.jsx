// Importing required components and assets from Chakra UI and local sources
import { Box, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import Help from "../assets/Help.svg";
import { RiSearchLine } from "react-icons/ri";
import channel from "../assets/channel.svg";
import downFill from "../assets/downFill.svg";

// Functional component for the Navbar
const Navbar = () => {
    return (
        <>
            {/* Container for the entire Navbar, occupying 100% width */}
            <Box w={"100%"} >
                {/* Flex container for organizing content horizontally with padding on the y-axis */}
                <Flex w={"100%"} py={"12px"}>
                    {/* Left section of the Navbar */}
                    <Flex flex={1} color={"#4D4D4D"} alignItems={"center"} gap={"16px"}>
                        {/* Heading for the Navbar */}
                        <Heading as={"h5"} fontSize={"20px"} fontWeight={500} mt={"-2px"} color={"black"}>Payouts</Heading>
                        
                        {/* Help section with icon and text */}
                        <Flex gap={"6px"} alignItems={"center"}>
                            <Image src={Help} w={"14px"} />
                            <Text fontSize={"12px"}>How it works</Text>
                        </Flex>
                    </Flex>
                    
                    {/* Middle section of the Navbar for search functionality */}
                    <Flex flex={1} color={"#808080"} alignItems={"center"} justifyContent={"center"}>
                        <InputGroup>
                            {/* Icon for search functionality */}
                            <InputLeftElement
                                pointerEvents="none"
                                children={<RiSearchLine size={"16px"} color="#808080" />}
                            />
                            {/* Input field for search with placeholder text */}
                            <Input bgColor={"#F2F2F2"} py={"9px"} px={"16px"} type="text" fontWeight={400} fontSize={"15px"} placeholder="Search features, tutorials, etc." />
                        </InputGroup>
                    </Flex>
                    
                    {/* Right section of the Navbar for additional actions */}
                    <Flex flex={1} color={"#4D4D4D"} alignItems={"center"} justifyContent={"right"} gap={"12px"}>
                        {/* Box with rounded corners for channel icon */}
                        <Box p={"10px"} borderRadius={"full"} bgColor={"#E6E6E6"}>
                            <Image src={channel} />
                        </Box>
                        
                        {/* Icon for dropdown or additional actions */}
                        <Image src={downFill} />
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

// Exporting the Navbar component for use in other parts of the application
export default Navbar;
