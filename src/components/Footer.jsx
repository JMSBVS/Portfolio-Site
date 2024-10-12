import React from "react";
import { Flex, Heading, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'


export default function Footer() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const currentYear = new Date().getFullYear();
    return (
        <Flex
            w="100%"
            p={5}
            alignItems="center"
            h="100px"
            position="relative"
            flexDirection="column"
        >
            <Flex>
                <IconButton
                    ml={3}
                    icon={<FaLinkedin />}
                    isRound='true'
                    onClick={() =>
                        window.open("https://www.linkedin.com/in/james-beavis-92244124a/")}
                    alt="Linkedin icon button"
                    aria-label="Linkedin icon button"

                >
                </IconButton>
                <IconButton
                    ml={3}
                    icon={<FaGithub />}
                    isRound='true'
                    onClick={() =>
                        window.open("https://github.com/JMSBVS")}
                    alt="Github icon button"
                    aria-label="Github icon button"
                >

                </IconButton>
            </Flex>
            <Spacer></Spacer>
            <Heading
                mt={2}
                size="xs"
                fontWeight="semibold"
            >
                © James Beavis {currentYear}
            </Heading>
        </Flex>
    )
}