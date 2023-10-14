import Image from "next/image"
import { Box, Container, Divider, Text } from "@chakra-ui/react"
import { Card } from "@/components/Card"
import { CardSkill } from "@/components/CardSkill"
import { Grid } from "@/components/Grid"
import { Article } from "@/components/layouts/Article"
import { Section } from "@/components/Section"
import { Contacto } from "@/components/Contacto"
import JavascriptSVG from '../public/images/javascript.svg'
import ReactSVG from '../public/images/react.svg'
import ReduxSVG from '../public/images/redux.svg'
import NextSVG from '../public/images/nextjs.svg'
import TsSVG from '../public/images/typescript.svg'
import NodeSVG from '../public/images/nodejs.svg'
import Tailwind from '../public/images/tailwind.svg'
import FigmaSVG from '../public/images/figma.svg'
import Profile from '../public/images/profile.png'
import Col from '../public/images/col.svg'
import { Code } from "iconoir-react"

export default function Home () {
  return (
    <Article>
      <Container maxW="container.sm">

        <Section>
          <Box
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            h={{ base: "256px", md: "240px" }}
          >
            <Box width={'full'}>
              <Text fontSize={{ base: "3xl", md: "32px" }} fontWeight="bold">
                Abel Guardo
              </Text>
              <Text fontSize="20px" fontWeight="medium">
                Frontend Developer
              </Text>
              <Image src={Col} height={22} width={22} alt='col' />
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
            <Text fontWeight={400}>
              Al principio solía crear diseños para videojuegos independientes.
              Luego, cuando descubrí mi pasión por el desarrollo web, me di cuenta de que ambos mundos encajaban perfectamente.
              Mi enfoque creativo en el diseño, y mi habilidad lógica para codificar.
              Esto me permite ser minucioso, asegurándome que ningún detalle se pierda en los resultados.
            </Text>
            <Text fontWeight={400} mt="1rem">
              Soy partidario de las buenas prácticas, la programación funcional y el minimalismo.
              Por esto, me mantengo abierto en recibir feedback
              para mejorar la calidad de los resultados,
              y crecer como profesional.
            </Text>
          </Box>
        </Section>

        <Divider />

        <Section>
          <Box my="1rem">
            <Text fontWeight="bold" fontSize="xl" py="8px">
              Proyectos destacados
            </Text>

            <Box>
              <Card
                title="Nustore"
                description="Aplicación web ecommerce, navega y explora miles de productos."
                link="https://nustore.vercel.app/"
                stack={['React', 'Redux', 'Firebase', 'Axios', 'Chakra UI']}
                repo="https://github.com/Eibeel/nustore"
              >
                <Code width='22px' height='22px' color="#219ebc" />
              </Card>
              <Card
                title="Journal"
                description="Organizador de notas personales."
                link="https://journalnotes.vercel.app/"
                stack={['React', 'Redux', 'Firebase', 'Material UI']}
                repo="https://github.com/Eibeel/journal"
              >
                <Code width='22px' height='22px' color="#219ebc" />
              </Card>
              <Card
                title="Rick and Morty viewer"
                description="Colección de personajes de la famosa serie Rick And Morty."
                link="https://rickviewer.vercel.app/"
                stack={['React', 'Redux', 'Axios', 'Chakra UI', 'Custom Hooks']}
                repo="https://github.com/Eibeel/viewerRickAndMorty"
              >
                <Code width='22px' height='22px' color="#219ebc" />
              </Card>
              <Card
                title="Todo Task"
                description="Facilite la organización de sus tareas con Todo Task"
                link="https://todo4task.vercel.app/"
                stack={['Javascript', 'Node.js']}
                repo="https://github.com/Eibeel/todotasks"
              >
                <Code width='22px' height='22px' color="#219ebc" />
              </Card>
            </Box>
          </Box>
        </Section>

        <Divider />

        <Section>
          <Box py={1}>
            <Text fontWeight="bold" fontSize="xl">
              Stack tecnológico
            </Text>
            <Grid columnBase={2} columnMd={4}>
              <CardSkill image={JavascriptSVG} label="Javascript" />
              <CardSkill image={ReactSVG} label="React" />
              <CardSkill image={ReduxSVG} label="Redux" />
              <CardSkill image={TsSVG} label="Typescript" />
              <CardSkill image={Tailwind} label="Tailwind" />
              <CardSkill image={NextSVG} label="Next.js" />
              <CardSkill image={NodeSVG} label="Nodejs" />
              <CardSkill image={FigmaSVG} label="Figma" />
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
