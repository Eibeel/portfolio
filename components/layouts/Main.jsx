import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import { NavBar } from "../NavBar"
import { Footer } from "../Footer"


export const Main = ({ children }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Abel Guardo" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Building ideas with code - Abel Guardo</title>
            </Head>
            <NavBar />
            <Container maxW="container.md" pt="6rem">
                {children}
            </Container>
            <Footer />
        </Box>
    )
}
