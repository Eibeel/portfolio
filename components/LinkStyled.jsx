import { Link as LinkChakra, Stack, useColorModeValue } from "@chakra-ui/react"


export const LinkStyled = ({ label }) => {

    const colorLink = useColorModeValue('#6c757d', '')
    const colorLinkHover = useColorModeValue('#343a40', '#ced4da')

    return (
        <Stack
            direction="row"
            alignItems="center"
        >
            <LinkChakra
                href="https://github.com/Eibeel"
                color={colorLink}
                _hover={{ color: `${colorLinkHover}` }}
                fontWeight="medium"
                isExternal
            >
                {label} <sup>↗</sup>
            </LinkChakra>
        </Stack>
    )
}
