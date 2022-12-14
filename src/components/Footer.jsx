import React from "react";
import { Flex, Heading, IconButton, Spacer } from '@chakra-ui/react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'


export default function Footer() {
    return (
        <Flex
            w="100%"
            p={5}
            alignItems="center"
            h="100px"
            position="relative"
            bgGradient="linear(to-b, blue.700, blue.900)"
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
                color="white"
            >
                © James Beavis 2022
            </Heading>
        </Flex>
    )
}