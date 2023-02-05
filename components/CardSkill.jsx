import { Code, useColorModeValue } from "@chakra-ui/react"


export const CardSkill = ({ label, bgColor, labelColor }) => {

    return (
        <Code
            p=".5rem"
            textAlign="center"
            cursor="pointer"
            fontWeight="medium"
            fontSize="15px"
            fontFamily="inherit"
            bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
            _hover={{
                backgroundColor: `${bgColor}`,
                color: `${labelColor}`,
            }}
            transition="ease-in .2s"
        >
            {label}
        </Code>
    )
}
