import { Box, Link as ChakraLink } from "@chakra-ui/react"


export const Footer = () => {
  return (
    <Box
      align="center"
      fontSize="sm"
      fontWeight="medium"
      py={8}
    >
      <ChakraLink href="https://github.com/Eibeel" isExternal>
        &copy; {new Date().getFullYear()} Abel Guardo.
      </ChakraLink>
    </Box>
  )
}
