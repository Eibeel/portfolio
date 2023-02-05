import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@/lib/theme"


export const Chakra = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}
