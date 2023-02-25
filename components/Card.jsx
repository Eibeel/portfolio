import { Box, HStack, Link, Tag, Text } from "@chakra-ui/react"
import { Code, GitHub } from "iconoir-react"

export const Card = ({ title, description, link, repo, stack = [] }) => {
    return (
        <Box
            borderRadius="8px"
            border="solid .2px #bbbbbb52"
            p="14px 18px"
            mt="16px"
        >
            <HStack justifyContent='space-between'>
                <Text fontWeight="medium" fontSize="18px" as={Link} href={link} isExternal style={{ textDecoration: "none" }}>
                    {title}  <sup style={{ color: "#6c757d62" }}>↗</sup>
                </Text>
                <Link href={repo} isExternal>
                    <GitHub width='20px' height='20px' color="#989898" />
                </Link>
            </HStack>
            <Text pt="10px">
                {description}
            </Text>
            <HStack pt="18px" wrap="wrap">
                <Code width='22px' height='22px' color="#219ebc" />
                {
                    stack.map(e => (
                        <Tag key={e} colorScheme="gray" fontSize='12px' variant='outline' border='solid 1px #bbbbbb52' px='16px' boxShadow="none">
                            {e}
                        </Tag>
                    ))
                }
            </HStack>
        </Box >
    )
}
