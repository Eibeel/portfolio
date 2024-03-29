import NextLink from 'next/link'
import { Box, Container, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react'
import { Menu as MenuH, Rocket } from 'iconoir-react';
import { ToggleButton } from './ToggleButton';

export const NavBar = () => {

  const colorLink = useColorModeValue('#6c757d', '')
  const colorLinkHover = useColorModeValue('#343a40', '#adb5bd')


  return (
    <Box
      as="nav"
      bg={useColorModeValue('#ffffff40', '#1a202c80')}
      position="fixed"
      zIndex={2}
      w="100%"
      backdropFilter="blur(6px)"
    >
      <Container
        alignItems="center"
        display="flex"
        maxW="container.md"
        flexWrap="wrap"
        justifyContent="space-between"
        p={4}
      >

        <Link as={NextLink} href="https://github.com/Eibeel" isExternal>
          <Rocket width="2rem" height="2rem" strokeWidth={1} />
        </Link>

        <Stack
          direction={{ md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          justifyContent="right"
          flexGrow={1}
          w={{ base: 'full', md: 'auto' }}
          spacing={6}
          mr={12}
        >
          <Link href='Abel_Guardo_CV.pdf' download fontWeight="semibold" color={colorLink} _hover={{ color: `${colorLinkHover}` }}>
            Currículum
          </Link>
          <Link isExternal href="https://www.behance.net/abelguardop" fontWeight="semibold" color={colorLink} _hover={{ color: `${colorLinkHover}` }}>
            Behance <sup>↗</sup>
          </Link>
          <Link isExternal href="https://www.linkedin.com/in/abelguardop/" fontWeight="semibold" color={colorLink} _hover={{ color: `${colorLinkHover}` }}>
            Linkedin <sup>↗</sup>
          </Link>
        </Stack>

        <Box>
          <ToggleButton />
          <Box display={{ base: 'inline-block', md: 'none' }} ml="1rem">
            <Menu>
              <MenuButton as={IconButton} aria-label="Menu" icon={<MenuH />} variant="outline" />
              <MenuList>
                <MenuItem>
                  <Link href='Abel_Guardo_CV.pdf' download>
                    Curriculum
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link isExternal href="https://www.linkedin.com/in/abelguardop/">
                    Linkedin
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}
