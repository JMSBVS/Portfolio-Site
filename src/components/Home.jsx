import React from 'react'
import { useRef } from 'react';
import {
    Stack,
    Flex,
    Box,
    Text,
    useMediaQuery,
    Image,
    useColorMode,
    Button
} from '@chakra-ui/react';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import circle from "/images/circleBG.webp"
import circlemobile from "/images/circleBG-small.webp"
import portrait from "/images/self.webp"

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop)
});

export default function Home() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    const [isTallerThan600] = useMediaQuery('(min-height: 600px)')
    const [isPortrait] = useMediaQuery('(orientation: portrait)')

    const ref = useRef(null);
    const scrollDown = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box>
            <Stack
                height={isLargerThan600 && !isPortrait ? "100vh" : "100%"}

            >
                <ChakraBox animate={
                    isLargerThan600 && isTallerThan600 ? {
                        opacity: [0, 0, 0, 0, 0.5, 0.75, 1],
                        rotate: [0, 0, 0, 0, 0, 0, 0, 15, 0]
                    } : {
                        opacity: [0, 0, 0, 0, 0.1, 0.15, 0.2],
                        rotate: [0, 0, 0, 0, 0, 0, 0, 15, 0]
                    }
                }

                    transition={
                        {
                            duration: 1,
                            ease: "easeInOut",
                            repeatType: "loop"
                        }

                    }
                    position="absolute"
                    bgImage={
                        isLargerThan600 && isTallerThan600 ? circle : circlemobile
                    }
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    w="300px"
                    h="300px"
                    alignSelf="flex-end"
                    zIndex={-1}
                    borderRadius="full"></ChakraBox>
                <Flex direction={
                    isLargerThan600 && isTallerThan600 ? "row" : "column"
                }
                    spacing={
                        isLargerThan600 && isTallerThan600 ? "200px" : "0"
                    }
                    p={
                        isLargerThan600 && isTallerThan600 ? "20" : "0"
                    }
                    alignSelf="flex-start">
                    <Box mt={
                        isLargerThan600 && isTallerThan600 ? "0" : 16
                    }
                        align='flex-start'>
                        <ChakraBox animate={
                            {
                                opacity: [0, 0.1, 0.6, 1],
                                translateX: [-150, 0]
                            }
                        }
                            transition={
                                {

                                    duration: 0.5,
                                    ease: "easeInOut",
                                    repeatType: "loop"
                                }

                            }>
                            <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, blue.200, blue.500, blue.200)" bgClip='text'>
                                James Beavis.
                            </Text>
                        </ChakraBox>
                        <ChakraBox animate={
                            {
                                opacity: [0, 0.1, 0.6, 1],
                                translateX: [150, 0]
                            }
                        }
                            transition={
                                {

                                    duration: 0.5,
                                    ease: "easeInOut",
                                    repeatType: "loop"
                                }

                            }>
                            <Text fontSize="3xl" fontWeight="semibold">
                                Frontend Developer
                            </Text>
                            <Text color={
                                isDark ? "gray.200" : "gray.500"
                            }>
                                Based in Perth, WA.
                            </Text>
                        </ChakraBox>
                    </Box>
                    <ChakraBox animate={
                        {
                            opacity: [0, 0.8, 1, 1, 1],
                            translateX: [50, 0, 0]
                        }
                    }

                        transition={
                            {

                                duration: 1.5,
                                ease: "easeInOut",
                                repeatType: "loop"
                            }

                        }
                        minWidth="300px"
                        alignSelf="center">
                        <Image mt={
                            isLargerThan600 && isTallerThan600 ? "0" : "12"
                        }
                            mb={
                                isLargerThan600 && isTallerThan600 ? "0" : "12"
                            }
                            ml="3"
                            borderRadius='full'
                            backgroundColor="transparent"
                            boxShadow="lg"
                            boxSize="300px"
                            src={portrait}
                            alt="Self portrait"
                        />
                    </ChakraBox>
                </Flex>
                <Flex justify="center">
                    <ChakraBox animate={
                        {
                            opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.75, 1],
                            translateY: [100, 100, 100, 100, 100, 100, 100, 0, 0]
                        }
                    }
                        transition={
                            {
                                duration: 1,
                                ease: "easeInOut",
                                repeatType: "loop"
                            }
                        }
                        alignSelf="center">
                        <Button display={
                            isLargerThan600 && isTallerThan600 && !isPortrait ? "" : "none"
                        }
                            alignSelf="center"
                            mt={14}
                            colorScheme="blue"
                            boxShadow="lg"
                            w="300px"
                            alt="Scroll down to projects"
                            onClick={
                                () => {
                                    scrollDown()
                                }
                            }>
                            Projects.
                        </Button>
                    </ChakraBox>
                </Flex>
            </Stack>
            <Box ref={ref}></Box>
        </Box>
    )
}
