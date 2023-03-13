import { Flex, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"


export const CardSkill = ({ image, label }) => {

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      fontWeight="medium"
      fontSize="15px"
      fontFamily="inherit"
      bg={useColorModeValue('#eaeaea2c', '#181e289d')}
      rowGap="12px"
      borderRadius="6px"
      p="16px"
    >
      <Image src={image} alt="tecnologia" style={{ width: "auto", maxHeight: "36px" }} />
      {label}
    </Flex>
  )
}
