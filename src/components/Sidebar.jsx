/*
 * Sidebar Component
 * This component represents the sidebar of the application, providing navigation links and user information.
 */

import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import {
    BiSolidShoppingBagAlt,
    GoHome,
    LuClipboardList,
    GrDeliver,
    RxDashboard,
    LuMousePointer2,
    TbDiscount2,
    FiUsers,
    MdOutlineColorLens,
    RiFlashlightLine,
    CiWallet,
} from 'react-icons';

// Importing images
import marketing from '../assets/marketing.svg';
import payout from '../assets/payout.svg';
import analytics from '../assets/analytics.svg';
import image from '../assets/image.png';
import DownArrow from '../assets/down.svg';

const Sidebar = () => {
    return (
        <div>
            {/* Main container for the sidebar */}
            <Flex
                bgColor={'#1E2640'}
                color='white'
                flexDir={'column'}
                px={'10px'}
                pt={'16px'}
                h={'100vh'}
                justifyContent={'space-between'}
                position={'relative'}
                fontFamily={'Inter'}
            >
                {/* User information section */}
                <Flex flexDir={'column'} gap="24px">
                    <Flex alignItems={'center'} mx={'10px'} gap={'12px'}>
                        {/* User Avatar */}
                        <Image w="39px" src={image} borderRadius={'4px'} />
                        <Flex w={'108px'}>
                            <Box>
                                {/* User Name */}
                                <Text fontSize={'15px'} fontWeight={500}>
                                    Nishyan
                                </Text>
                                {/* Store link */}
                                <Text fontSize={'13px'} fontWeight={400} textDecoration={'underline'} opacity={0.8}>
                                    Visit store
                                </Text>
                            </Box>
                        </Flex>
                        {/* Dropdown Arrow */}
                        <Image src={DownArrow} w={'20px'} />
                    </Flex>

                    {/* Navigation Links */}
                    <Flex flexDir={'column'} gap={'4px'}>
                        {/* Home Link */}
                        <Flex
                            px={'16px'}
                            py={'8px'}
                            alignItems={'center'}
                            gap={'10px'}
                            _hover={{ bgColor: 'rgba(255, 255, 255, 0.10)' }}
                            borderRadius={'4px'}
                            w={'full'}
                            cursor={'pointer'}
                        >
                            <GoHome size={'20px'} />
                            <Text fontSize={'14px'}>Home</Text>
                        </Flex>

                        {/* Other Navigation Links... */}

                    </Flex>
                </Flex>

                {/* Credits Information */}
                <Flex
                    w={'85.71%'}
                    my={'16px'}
                    m={'auto'}
                    py="6px"
                    px="12px"
                    alignItems={'center'}
                    gap={'10px'}
                    bgColor={'rgba(255, 255, 255, 0.10)'}
                    borderRadius={'4px'}
                    cursor={'pointer'}
                    position={'absolute'}
                    bottom={'16px'}
                    right={'10px'}
                    left={'10px'}
                >
                    {/* Wallet Icon */}
                    <Box p={'6px'} borderRadius={'4px'} bgColor={'rgba(255, 255, 255, 0.10)'}>
                        <CiWallet color='white' size={'24px'} />
                    </Box>
                    <Box>
                        {/* Available Credits Information */}
                        <Text fontSize={'13px'}>Available credits</Text>
                        <Text fontWeight={500} fontSize={'16px'}>
                            222.10
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </div>
    );
};

export default Sidebar;
