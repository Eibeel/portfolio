import { Box, Highlight, Link, Text } from '@chakra-ui/react'

export const Contacto = () => {

    return (
        <>
            <Box display="flex" flexDir="column" alignItems="center" pt={10}>
                <Text fontWeight="medium" fontSize="lg" pb={4}>
                    ¿Tienes alguna idea en mente?
                </Text>
            </Box>
            <Box textAlign="justify">
                Puedes contactarme a traves
                de <Link href='https://www.linkedin.com/in/abelguardop/' isExternal>
                    <Highlight
                        query="Linkedin"
                        styles={{ color: "#0077b6", fontWeight: "medium", textAlign: "justify" }}
                    >
                        Linkedin
                    </Highlight>
                </Link><sup style={{ color: "#0077b6" }}>↗</sup> ,
                estoy abierto a discutir en cómo puedo aplicar mis habilidades
                y conocimientos en su equipo de trabajo y/o proyectos. ¡Saludos!
            </Box>
        </>
    )
}
