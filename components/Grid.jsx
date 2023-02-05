import { SimpleGrid } from "@chakra-ui/react"


export const Grid = ({ children, columnBase, columnMd }) => {
    return (
        <SimpleGrid
            mt="2rem"
            columns={{ base: `${columnBase}`, md: `${columnMd}` }}
            spacing={8}
        >
            {children}
        </SimpleGrid>
    )
}
