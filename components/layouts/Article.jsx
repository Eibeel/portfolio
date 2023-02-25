import Head from "next/head"
import { motion } from "framer-motion"


export const Article = ({ children, title }) => {

    const tit = `${title} - Abel Guardo`

    return (
        <motion.article
            style={{ position: 'relative' }}
        >
            <>
                {
                    title && (
                        <Head>
                            <title>{tit}</title>
                        </Head>
                    )
                }
            </>
            {children}
        </motion.article>
    )
}
