import { Main } from '@/components/layouts/Main';
import { Chakra } from "@/components/Chakra";
import { Fonts } from '@/components/Fonts';


export default function App({ Component, pageProps }) {
  return (
    <Chakra>
      <Fonts />
      <Main>
        <Component {...pageProps} />
      </Main>
    </Chakra>
  )
}
