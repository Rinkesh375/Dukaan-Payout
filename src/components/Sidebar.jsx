// Importing required components and assets from Chakra UI and local sources
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { GrDeliver } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { LuMousePointer2 } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";
import { RiFlashlightLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import marketing from "../assets/marketing.svg";
import payout from "../assets/payout.svg";
import analytics from "../assets/analytics.svg";
import image from "../assets/image.png";
import DownArrow from "../assets/down.svg";

// Functional component for the Sidebar
const Sidebar = () => {
    return (
        <div>
            {/* Flex container for Sidebar, with specific styling */}
            <Flex w="224px" bgColor={"#1E2640"} color='white' flexDir={"column"} px={"10px"} pt={"16px"} h={"100vh"} justifyContent={"space-between"} position={"relative"}>
                
                {/* Top section of the Sidebar with store information */}
                <Flex flexDir={"column"} gap="24px">
                    {/* Store logo and name */}
                    <Flex alignItems={"center"} mx={"10px"} gap={"12px"}>
                        <Image w="39px" src={image} borderRadius={"4px"} />
                        <Flex w={"108px"}>
                            <Box>
                                <Text fontSize={"15px"} fontWeight={500}>Nishyan</Text>
                                <Text fontSize={"13px"} fontWeight={400} textDecoration={"underline"} opacity={0.8}>Visit store</Text>
                            </Box>
                        </Flex>
                        <Image src={DownArrow} w={"20px"} />
                    </Flex>
                    
                    {/* Navigation links with icons in the Sidebar */}
                    <Flex flexDir={"column"} gap={"4px"}>
                        {/* Home link */}
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <GoHome size={"20px"} />
                            <Text fontSize={"14px"}>Home</Text>
                        </Flex>
                        
                        {/* Other navigation links with icons */}
                        {/* ... (similar structure for other links) ... */}
                    </Flex>
                </Flex>
                
                {/* Bottom section of the Sidebar with available credits information */}
                <Flex w={"192px"} my={"16px"} m={"auto"} py="6px" px="12px" alignItems={"center"} gap={"10px"} bgColor={"rgba(255, 255, 255, 0.10)"} borderRadius={"4px"} cursor={"pointer"} position={"absolute"} bottom={"16px"} right={"10px"} left={"10px"}>
                    <Box p={"6px"} borderRadius={"4px"} bgColor={"rgba(255, 255, 255, 0.10)"}>
                        <CiWallet color='white' size={"24px"} />
                    </Box>
                    <Box>
                        <Text fontSize={"13px"}>Available credits</Text>
                        <Text fontWeight={500} fontSize={"16px"}>222.10</Text>
                    </Box>
                </Flex>
            </Flex>
        </div>
    );
}

// Exporting the Sidebar component for use in other parts of the application
export default Sidebar;
