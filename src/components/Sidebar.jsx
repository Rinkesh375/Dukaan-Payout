import { Box, Flex, Image, Text } from '@chakra-ui/react'
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
import marketing from "../assets/marketing.svg"
import payout from "../assets/payout.svg"
import analytics from "../assets/analytics.svg"
import image from "../assets/image.png"
import DownArrow from "../assets/down.svg"
const Sidebar = () => {
    return (
        <div>
            <Flex w="224px" bgColor={"#1E2640"} color='white' flexDir={"column"} px={"10px"} pt={"16px"} h={"100vh"} justifyContent={"space-between"} position={"relative"}>
                <Flex flexDir={"column"} gap="24px">
                    <Flex alignItems={"center"} mx={"10px"} gap={"12px"}>
                        <Image w="39px" src={image} borderRadius={"4px"} />
                        <Flex w={"108px"}>
                            <Box>
                                <Text fontSize={"15px"} fontWeight={500}>Nishyan</Text>
                                <Text fontSize={"13px"} fontWeight={400} textDecoration={"underline"} opacity={0.8}>Visit store</Text>
                            </Box>
                        </Flex>
                        <Image src={DownArrow} w={"20px"}/>
                    </Flex>
                    <Flex flexDir={"column"} gap={"4px"}>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <GoHome size={"20px"} />
                            <Text fontSize={"14px"}>Home</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <LuClipboardList size={"20px"} />
                            <Text fontSize={"14px"}>Orders</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <RxDashboard size={"20px"} />
                            <Text fontSize={"14px"}>Products</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <GrDeliver size={"20px"} />
                            <Text fontSize={"14px"}>Delivery</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <Image src={marketing} size={"20px"} />
                            <Text fontSize={"14px"}>Marketing</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <Image src={analytics} size={"20px"} />
                            <Text fontSize={"14px"}>Analytics</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} bgColor={"rgba(255, 255, 255, 0.10)"} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <Image src={payout} size={"20px"} />
                            <Text fontSize={"14px"}>Payouts</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <LuMousePointer2 size={"20px"} />
                            <Text fontSize={"14px"}>Tools</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <TbDiscount2 size={"20px"} />
                            <Text fontSize={"14px"}>Discounts</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <FiUsers size={"20px"} />
                            <Text fontSize={"14px"}>Customers</Text>
                        </Flex>
                        <Flex px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} w={"full"} cursor={"pointer"}>
                            <MdOutlineColorLens size={"20px"} />
                            <Text fontSize={"14px"}>Appearence</Text>
                        </Flex>
                        <Flex w={"full"} px={"16px"} py={"8px"} alignItems={"center"} gap={"10px"} _hover={{ bgColor: "rgba(255, 255, 255, 0.10)" }} borderRadius={"4px"} cursor={"pointer"}>
                            <RiFlashlightLine size={"20px"} />
                            <Text fontSize={"14px"}>Plugins</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w={"192px"} my={"16px"} m={"auto"} py="6px" px="12px" alignItems={"center"} gap={"10px"} bgColor={"rgba(255, 255, 255, 0.10)"} borderRadius={"4px"} cursor={"pointer"}
                position={"absolute"} bottom={"16px"} right={"10px"} left={"10px"}
                >
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
    )
}

export default Sidebar
