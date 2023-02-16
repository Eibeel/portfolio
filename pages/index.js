import Image from "next/image";
import { Box, Container, Divider, Stack, Text } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CardSkill } from "@/components/CardSkill";
import { Grid } from "@/components/Grid";
import { Article } from "@/components/layouts/Article";
import { LinkStyled } from "@/components/LinkStyled";
import { Section } from "@/components/Section";
import { Contacto } from "@/components/Contacto";
import Profile from '../public/images/profile.png'

export default function Home() {
  return (
    <Article>
      <Container>

        <Section>
          <Box
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            h={{ base: "256px", md: "240px" }}
          >
            <Box>
              <Text fontSize={{ base: "3xl", md: "32px" }} fontWeight="bold">
                Hola, Soy Abel Guardo
              </Text>
              <Text fontSize="20px" fontWeight="medium">
                Frontend Developer
              </Text>
              <Text>
                ~ 🇨🇴
              </Text>
            </Box>
            <Image src={Profile} alt="Profile" height={144} weight={144} priority="true" style={{ borderRadius: "100%", objectFit: "fill" }} />
          </Box>
        </Section>

        <Divider />

        <Section>
          <Box py="2rem">
            <Text fontWeight="bold" pb="1rem">
              Da vida a las ideas con código. ⚡
            </Text>
            <Text textAlign="justify" fontWeight={400}>
              En un principio solía crear diseños para videojuegos independientes.
              Luego, cuando descubrí mi pasión en el desarrollo web, me di cuenta que encajarían perfectamente.
              Mi lado creativo en el diseño, y mi lado lógico para codificar.
              Esto me permite ser minucioso, y que no se pierda ningún detalle en los resultados.
            </Text>
            <Text textAlign="justify" fontWeight={400} mt="1rem">
              Soy partidario de las buenas practicas, la programación funcional y el minimalismo.
              Por esto, me mantengo abierto en recibir feedback
              para mejorar la calidad de los resultados,
              y crecer como profesional.
            </Text>
          </Box>
        </Section>

        <Divider />

        <Section>
          <Box my="1rem">
            <Stack py={1} direction="row" justifyContent="space-between">
              <Text fontWeight="bold" fontSize="xl">
                Proyectos destacados
              </Text>
              <Stack direction="row">
                <LinkStyled label="GitHub" />
              </Stack>
            </Stack>

            <Grid columnBase={1} columnMd={2}>
              <Card
                title="Nustore"
                description="Aplicación web ecommerce, permite explorar entre miles de productos, desde su
              búsqueda y el navegar entre sus diferentes categorías."
                link="https://nustore.vercel.app/"
              />
              <Card
                title="Journal"
                description="Journal es organizador de notas personales, junto a su fecha de
              creación y el anexo de imágenes, autenticación y registro de usuarios."
                link="https://journalnotes.vercel.app/"
              />
              <Card
                title="Pomodori"
                description="Basada en la Técnica Pomodoro, esta aplicación permite gestionar el tiempo de manera
              óptima entre descansos y tiempos de estudio/trabajo."
                link="https://pomodoritimer.vercel.app/"
              />
              <Card
                title="Peajes Colombia"
                description="Consulta los diferentes peajes en Colombia por medio de su departamento o municipio."
                link="https://eibeel.github.io/Peajes-Colombia/"
              />
            </Grid>
          </Box>
        </Section>

        <Divider />

        <Section>
          <Box py={1}>
            <Text fontWeight="bold" fontSize="xl">
              Stack tecnológico
            </Text>
            <Text pt={1}>
              Me especializo en el desarrollo frontend, estas son algunas de las tecnologías que utilizo frecuentemente...
            </Text>
            <Grid columnBase={2} columnMd={3}>
              <CardSkill labelColor="orange.700" bgColor="orange.200" label="HTML5" />
              <CardSkill labelColor="yellow.800" bgColor="yellow.400" label="Javascript" />
              <CardSkill labelColor="blue.800" bgColor="blue.100" label="React" />
              <CardSkill labelColor="purple.800" bgColor="purple.100" label="Redux" />
              <CardSkill labelColor="gray.100" bgColor="blue.600" label="Typescript" />
              <CardSkill labelColor="yellow.900" bgColor="yellow.400" label="Firebase" />
              <CardSkill labelColor="gray.800" bgColor="gray.300" label="Git - Github" />
              <CardSkill labelColor="gray.900" bgColor="gray.200" label="Next.js" />
              <CardSkill labelColor="purple.800" bgColor="purple.200" label="Figma" />
            </Grid>
          </Box>
        </Section>

        <Divider />

        <Section>
          <Contacto />
        </Section>

      </Container>
    </Article >
  );
}
