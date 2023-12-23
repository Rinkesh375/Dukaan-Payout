// Importing required components and assets from Chakra UI and local sources
import { Box, Button, Flex, Image, Input, InputGroup, InputLeftElement, Link, Select, Text } from '@chakra-ui/react';
import Help2 from "../assets/Help2.svg";
import Help from "../assets/Help.svg";
import DownArrow from "../assets/down.svg";
import DownArrow2 from "../assets/DownArrow2.svg";
import { RiSearchLine } from 'react-icons/ri';
import sortIcon from "../assets/sortIcon.svg";
import download from "../assets/download.svg";
import elipsegrey from "../assets/elipsegrey.svg";
import elipsegreen from "../assets/elipsegreen.svg";
import data from "../db/db.js";

// Destructuring the necessary data from the imported data module
const {payoutDataArray} = data;
console.log(payoutDataArray.length);

// Functional component for the Payout page
const Payout = ({handlePage}) => {
   
    return (
        <div>
            {/* Container for the entire Payout page with specific font family */}
            <Box fontFamily={"Inter"}>
                {/* Flex container for the top section of the page */}
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={"20px"} fontWeight={500}>Overview</Text>
                    {/* Dropdown for selecting the time period */}
                    <Select name="" id="" w={"137px"} fontSize={"16px"}>
                        <option value="this month">This Month</option>
                    </Select>
                </Flex>
                
                {/* Flex container for the main content */}
                <Flex mt={"24px"} gap={"20px"}>
                    {/* Box for displaying the Next Payout information */}
                    <Box flex={1} p={"20px"} color={'white'} bgColor={"#146EB4"} borderRadius={"8px"} position={"relative"}>
                        {/* Flex container for the title and help icon */}
                        <Flex fontSize={"16px"} gap={"4px"}>
                            <Text fontSize={"12px"}>Next Payout</Text>
                            <Image src={Help2} color={"white"} w={"14px"} />
                        </Flex>
                        
                        {/* Flex container for the payout amount and related information */}
                        <Flex mt={"16px"} alignItems={"center"} justifyContent={"space-between"}>
                            <Text fontSize={"32px"} fontWeight={500}>₹2,312.23</Text>
                            <Flex>
                                <Link fontSize={"16px"} fontWeight={500} textDecor={"underline"}>23 orders</Link>
                                <Image src={DownArrow} transform={'rotate(-90deg)'} />
                            </Flex>
                        </Flex>
                        
                        {/* Hidden text element (visibility set to "hidden") */}
                        <Text visibility={"hidden"}>5</Text>
                        
                        {/* Notification bar for the next payout date */}
                        <Flex borderRadius={"8px"} py={"8px"} bgColor={"#0E4F82"} px="24px" w={"100%"} position={"absolute"} right={"-0.003px"} color={"#F2F2F2"} fontSize={"14px"} fontWeight={400} justifyContent={"space-between"}>
                            <Text>Next payout date:</Text>
                            <Text>Today, 04:00PM</Text>
                        </Flex>
                    </Box>
                    
                    {/* Box for displaying the Amount Pending information */}
                    <Box flex={1} h={"120px"} p={"20px"} color={'white'} bgColor={"#ffffff"} borderRadius={"8px"} boxShadow={'sm'}>
                        {/* Flex container for the title and help icon */}
                        <Flex fontSize={"16px"} gap={"4px"}>
                            <Text fontSize={"12px"} color={"#4D4D4D"}>Amount Pending</Text>
                            <Image src={Help} color={"white"} w={"14px"} />
                        </Flex>
                        
                        {/* Flex container for the pending amount and related information */}
                        <Flex mt={"16px"} alignItems={"center"} justifyContent={"space-between"} color={"#1A181E"}>
                            <Text fontSize={"32px"} fontWeight={500}>₹2,312.23</Text>
                            <Flex>
                                <Link color={"#146EB4"} fontSize={"16px"} fontWeight={500} textDecor={"underline"}>23 orders</Link>
                                <Image src={DownArrow2} transform={'rotate(-90deg)'} />
                            </Flex>
                        </Flex>
                    </Box>
                    
                    {/* Box for displaying the Amount Processed information */}
                    <Box flex={1} h={"120px"} p={"20px"} color={'white'} bgColor={"#ffffff"} borderRadius={"8px"} boxShadow={'sm'}>
                        {/* Flex container for the title and help icon */}
                        <Flex fontSize={"16px"} gap={"4px"}>
                            <Text fontSize={"12px"} color={"#4D4D4D"}>Amount Processed</Text>
                            <Image src={Help} color={"white"} w={"14px"} />
                        </Flex>
                        
                        {/* Flex container for the processed amount and related information */}
                        <Flex mt={"16px"} alignItems={"center"} justifyContent={"space-between"} color={"#1A181E"}>
                            <Text fontSize={"32px"} fontWeight={500}>₹23,92,312.19</Text>
                        </Flex>
                    </Box>
                </Flex>
                
                {/* Heading for the Transactions section */}
                <Text mt={"44px"} fontSize={"20px"} fontWeight={500}>Transactions | This Month</Text>
                
                {/* Flex container for switching between Payouts and Refunds */}
                <Flex mt={"20px"} gap={"12px"}>
                    <Text p={"6px 16px"} color={"white"} borderRadius={"full"} bgColor={"#146EB4"} cursor={"pointer"} onClick={()=>handlePage(true)}>
                        Payouts (22)
                    </Text>
                    <Text p={"6px 16px"} color={"#808080"} borderRadius={"full"} bgColor={"#E6E6E6"} cursor={"pointer"} onClick={()=>handlePage(false)}>
                        Refunds (2)
                    </Text>
                </Flex>
                
                {/* Box for search and sorting functionality */}
                <Box mt={"24px"} px={"12px"} pt={"12px"} pb={"8px"} bgColor={"white"}>
                    {/* Flex container for search input and sort/download buttons */}
                    <Flex>
                        {/* Input field for searching orders */}
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<RiSearchLine size={"14px"} color="#999999" />}
                            />
                            <Input bgColor={"#FFFFFF"} py={"10px"} px={"16px"} type="text" fontWeight={400} fontSize={"14px"} w={"248px"}
                                boxSizing='border-box' placeholder="Order ID or transaction ID" _placeholder={{ color: "#999999" }} />
                        </InputGroup>
                        
                        {/* Flex container for sort and download buttons */}
                        <Flex gap={"16px"}>
                            <Button bgColor={"#FFFFFF"} variant={'outline'}>
                                <Text fontSize={"16px"} fontWeight={400} color={"#4D4D4D"}>Sort</Text> 
                                <Image w="16px" src={sortIcon} />
                            </Button>
                            <Button p={"8px"} bgColor={"#FFFFFF"} variant={'outline'}>
                                <Image w="16px" src={download} />
                            </Button>
                        </Flex>
                    </Flex>
                    
                    {/* Flex container for table headers */}
                    <Flex color={"#4D4D4D"} fontWeight={500} fontSize={"14px"} mt={"12px"} py={"10px"} px={"12px"} bgColor={"#F2F2F2"}
                        justifyContent={"space-between"} borderRadius={"4px"}
                    >
                        <Text flex={1}>Order ID</Text>
                        <Text flex={1}>Status</Text>
                        <Text flex={1}>Transaction ID</Text>
                        <Text flex={1}>Order amount</Text>
                        <Text flex={1} textAlign={"right"}>Transaction fees</Text>
                        <Text flex={1} textAlign={"right"}>Total</Text>
                    </Flex>
                    
                    {/* Mapping through the payoutDataArray to render transaction entries */}
                    {payoutDataArray?.map((el, i) => (
                        <Flex key={i} color={"#1A181E"} py={"14px"} px={"12px"} bgColor={"#ffffff"} justifyContent={"space-between"} borderBottom={(payoutDataArray.length - 1) === i ? "" : "1px solid #E6E6E6"} fontSize={"14px"} fontWeight={400}>
                            <Text flex={1} color={"#146EB4"}>{el.orderId}</Text>
                            <Text display={"flex"} gap={"6px"} flex={1} alignItems={"center"}>
                                <Image src={el.status === "Processing" ? elipsegrey : elipsegreen} />
                                {el.status}
                            </Text>
                            <Text flex={1}>{el.transactionId}</Text>
                            <Text flex={1}>{el.orderAmount}</Text>
                            <Text flex={1} textAlign={"right"}>{el.transactionFee}</Text>
                            <Text flex={1} textAlign={"right"}>{el.total}</Text>
                        </Flex>
                    ))}
                </Box>
            </Box>
        </div>
    );
}

// Exporting the Payout component for use in other parts of the application
export default Payout;
