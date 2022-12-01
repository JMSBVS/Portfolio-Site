import { Box, Stack, Flex, Wrap, Heading, Button, Image, useMediaQuery, chakra } from '@chakra-ui/react'
import React from 'react'
import travel from "/images/travel-journal-screenshot.webp"
import flag from "/images/what-the-flag-screenshot.webp"
import password from "/images/password-generator-screenshot.webp"


export default function Projects() {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const [isSmallerThan1000] = useMediaQuery('(max-width: 1000px)')
    return (
        <Stack>
            <Flex>
                <Heading ml={20} fontWeight="semibold" color="blue.400" size="2xl">
                    Projects:
                </Heading>
            </Flex>
            <Wrap
                flexWrap="wrap-reverse"
                p={35}
                w="full"
                justify="center"
                spacing={6}
            >
                <Box
                    mx="auto"
                    rounded="lg"
                    shadow="lg"
                    border="1px"
                    borderColor="gray.200"
                    bg="white"
                    _dark={{ bg: "gray.800", borderColor: "gray.900", shadow: "dark-lg" }}
                    maxW={isLargerThan800 ? "30%" : "90%"}
                    minW={isSmallerThan1000 ? "80%" : "30%"}
                    mb={isLargerThan800 ? "" : "50px"}

                >
                    <Image
                        roundedTop="lg"
                        w="full"
                        h={64}
                        fit="cover"
                        align="top"
                        src={travel}
                        alt="Screenshot of travel journal project"
                        shadow="md"
                    />

                    <Box p={6}>
                        <Box>

                            <Box
                                display="block"
                                color="gray.800"
                                _dark={{ color: "white" }}
                                fontWeight="bold"
                                fontSize="2xl"
                                mt={2}
                            >
                                Travel Journal.
                            </Box>
                            <chakra.p
                                mt={2}
                                fontSize="sm"
                                color="gray.800"
                                _dark={{ color: "white" }}
                            >
                                A project exploring reusable code. This App will render any number of destination cards to the page from a single component, by passing props from an external data source.
                            </chakra.p>
                        </Box>

                        <Box mt={4}>
                            <Wrap
                                spacing='20px'
                                justify='center'>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    React
                                </Box>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    CSS
                                </Box>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    Vite
                                </Box>
                            </Wrap>
                            <Flex justify="space-evenly" p={3}>
                                <Button alt="Open travel diary live app" mt={8} colorScheme="blue" boxShadow="lg" onClick={() =>
                                    window.open("https://courageous-donut-715ba0.netlify.app/")
                                }>Live App</Button>
                                <Button alt="Open travel diary code" mt={8} colorScheme="blue" boxShadow="lg" onClick={() =>
                                    window.open("https://github.com/JMSBVS/Travel-Diary/tree/main/Pre%20Bundled/src")
                                }>Code</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Box
                    mx="auto"
                    rounded="lg"
                    shadow="lg"
                    border="1px"
                    borderColor="gray.200"
                    bg="white"
                    _dark={{ bg: "gray.800", borderColor: "gray.900", shadow: "dark-lg" }}
                    maxW={isLargerThan800 ? "30%" : "90%"}
                    minW={isSmallerThan1000 ? "40%" : "30%"}
                    mb={isLargerThan800 ? "" : "50px"}
                >
                    <Image
                        roundedTop="lg"
                        w="full"
                        h={64}
                        fit="cover"
                        align="top"
                        src={flag}
                        alt="Screenshot of travel flag game project"
                        shadow="md"
                    />

                    <Box p={6}>
                        <Box>

                            <Box
                                display="block"
                                color="gray.800"
                                _dark={{ color: "white" }}
                                fontWeight="bold"
                                fontSize="2xl"
                                mt={2}
                            >
                                What the flag.
                            </Box>
                            <chakra.p
                                mt={2}
                                fontSize="sm"
                                color="gray.800"
                                _dark={{ color: "white" }}
                            >
                                A multiple choice vexillology game; made using React hooks and styled with Chakra UI.
                            </chakra.p>
                        </Box>

                        <Box mt={4}>
                            <Wrap
                                spacing='20px'
                                justify='center'>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    React
                                </Box>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    Chakra UI
                                </Box>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    Vite
                                </Box>
                            </Wrap>
                            <Flex justify="space-evenly" p={3}>
                                <Button alt="Open what the flag live app" mt={8} colorScheme="blue" boxShadow="lg" onClick={() =>
                                    window.open("https://melodious-cascaron-088d65.netlify.app/")
                                }>Live App</Button>
                                <Button alt="Open what the flag code" mt={8} colorScheme="blue" boxShadow="lg" onClick={() =>
                                    window.open("https://github.com/JMSBVS/What-the-flag-")
                                }>Code</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Box
                    mx="auto"
                    rounded="lg"
                    shadow="lg"
                    border="1px"
                    borderColor="gray.200"
                    bg="white"
                    _dark={{ bg: "gray.800", borderColor: "gray.900", shadow: "dark-lg" }}
                    maxW={isLargerThan800 ? "30%" : "90%"}
                    minW={isSmallerThan1000 ? "40%" : "30%"}
                    mb={isLargerThan800 ? "" : "50px"}
                >
                    <Image
                        roundedTop="lg"
                        w="full"
                        h={64}
                        fit="cover"
                        src={password}
                        alt="Screenshot of travel password generator project"
                        shadow="md"
                    />

                    <Box p={6}>
                        <Box>

                            <Box
                                display="block"
                                color="gray.800"
                                _dark={{ color: "white" }}
                                fontWeight="bold"
                                fontSize="2xl"
                                mt={2}
                            >
                                Secure Password Generator.
                            </Box>
                            <chakra.p
                                mt={2}
                                fontSize="sm"
                                color="gray.800"
                                _dark={{ color: "white" }}
                            >
                                Generate an eight or fifteen digit secure password containing a random
                                collection of letters numbers and symbols. You can then copy the result to the
                                clipboard, utilising an API.
                            </chakra.p>
                        </Box>

                        <Box mt={4}>
                            <Wrap
                                spacing='20px'
                                justify='center'>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    HTML
                                </Box>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    CSS
                                </Box>
                                <Box
                                    bg="blue.500"
                                    color='white'
                                    _dark={{ bg: "white", color: "blue.800" }}
                                    p={2}
                                    borderRadius={20}
                                    fontWeight="bold"
                                    fontSize='xs'
                                    shadow="md"
                                >
                                    JavaScript
                                </Box>
                            </Wrap>
                            <Flex justify="space-evenly" p={3}>
                                <Button alt="Open password generator live app" mt={8} colorScheme="blue" boxShadow="lg" onClick={() =>
                                    window.open("https://majestic-pixie-7072ce.netlify.app/")
                                }>Live App</Button>
                                <Button alt="Open password generator code" mt={8} colorScheme="blue" boxShadow="lg" onClick={() =>
                                    window.open("https://github.com/JMSBVS/Password-Generator")
                                }>Code</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Wrap>

        </Stack >


    )
}
