import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react"

export const Card = ({ title, description, link }) => {
    return (
        <Box
            bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
            p={4}
            borderRadius="2px"
            _hover={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
            transition="ease-in .2s"
            cursor="pointer"
            as={Link}
            href={link}
            isExternal
            style={{ textDecoration: "none" }}
        >
            <Text fontWeight="medium" fontSize="18px" display="flex" justifyContent="space-between" alignItems="center">
                {title} <sup style={{ color: "#6c757d62" }}>↗</sup>
            </Text>
            <Stack mt={6}>
                <Text>
                    {description}
                </Text>
            </Stack>
        </Box >
    )
}
