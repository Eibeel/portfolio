import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            bg: mode('#fffefc', '#1a202c')(props),
            color: mode('#343a40', '#ced4da ')(props),
            fontFamily: "Space Grotesk",
        }
    }
    )
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}


export const theme = extendTheme({ styles, config })