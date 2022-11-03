import React from "react";
import { Flex, Heading, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Flex w="100%" p={3} position="sticky">
            <Heading
                ml="8"
                size="md"
                fontWeight="semibold"
                color="blue.400"
            >
                James Beavis
            </Heading>
            <Spacer></Spacer>
            <IconButton
                icon={<FaLinkedin />}
                isRound='true'
                onClick={() =>
                    window.open("https://www.linkedin.com/in/james-beavis-92244124a/")}
            >
            </IconButton>
            <IconButton
                ml={2}
                icon={<FaGithub />}
                isRound='true'
                onClick={() =>
                    window.open("https://github.com/JMSBVS")}
            >

            </IconButton>
            <IconButton
                ml={8}
                icon={isDark ? <FaSun /> : <FaMoon />}
                isRound='true'
                onClick={toggleColorMode}
            >
            </IconButton>
        </Flex>
    )
}