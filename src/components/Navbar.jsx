/*
 * Navbar Component
 * This component represents the navigation bar at the top of the application.
 * It includes sections for Payouts, a search input, help information, and user icons.
 */

import React from 'react';
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import Help from '../assets/Help.svg';
import { RiSearchLine } from 'react-icons/ri';
import channel from '../assets/channel.svg';
import downFill from '../assets/downFill.svg';

const Navbar = () => {
    return (
        <>
            {/* Container for the entire navbar */}
            <Box w={'100%'}>
                {/* Flex container for organizing navbar content */}
                <Flex w={'100%'} py={'12px'}>
                    
                    {/* Payouts Section */}
                    <Flex flex={1} color={'#4D4D4D'} alignItems={'center'} gap={'16px'}>
                        <Text fontSize={'20px'} fontWeight={500} mt={'-2px'} color={'#1A181E'}>
                            Payouts
                        </Text>
                        {/* Help Information */}
                        <Flex gap={'6px'} alignItems={'center'}>
                            <Image src={Help} w={'14px'} />
                            <Text fontSize={'12px'}>How it works</Text>
                        </Flex>
                    </Flex>

                    {/* Search Input Section */}
                    <Flex flex={1} color={'#808080'} alignItems={'center'} justifyContent={'center'}>
                        <InputGroup>
                            {/* Search Icon */}
                            <InputLeftElement
                                pointerEvents="none"
                                children={<RiSearchLine size={'16px'} color="#808080" />}
                                ml={'5px'}
                            />
                            {/* Search Input */}
                            <Input
                                bgColor={'#F2F2F2'}
                                py={'9px'}
                                px={'16px'}
                                type="text"
                                fontWeight={400}
                                fontSize={'15px'}
                                placeholder="Search features, tutorials, etc."
                            />
                        </InputGroup>
                    </Flex>

                    {/* User Icons Section */}
                    <Flex flex={1} color={'#4D4D4D'} alignItems={'center'} justifyContent={'right'} gap={'12px'}>
                        {/* Channel Icon */}
                        <Box p={'10px'} borderRadius={'full'} bgColor={'#E6E6E6'}>
                            <Image src={channel} />
                        </Box>
                        {/* Downward Fill Icon */}
                        <Image src={downFill} />
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default Navbar;
