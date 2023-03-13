import { AnimatePresence, motion } from "framer-motion"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { HalfMoon, SunLight } from "iconoir-react";


export const ToggleButton = () => {

  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        key={useColorModeValue('light', 'dark')}
        style={{ display: 'inline-block' }}
        transition={{ duration: .2 }
        }>
        <IconButton
          aria-label="Toggle"
          colorScheme={useColorModeValue('yellow', 'gray')}
          icon={useColorModeValue(<SunLight weight="20px" height="20px" />, <HalfMoon weight="20px" height="20px" />)}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}
