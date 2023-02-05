import { Box } from "@chakra-ui/react"


export const Section = ({ children }) => {
    return (
        <Box p={{ base: "1rem 0 3rem", md: "2rem 0 3rem" }}>
            {children}
        </Box>
    )
}
