import { Heading, HStack, Image, Text, VStack,Box,Button} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "../images/Landin.css"
const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg="#1a234a" height="30vw" width="100%" borderRadius="6px" minHeight="400px" className="step" borderRadius="12px">
      <VStack spacing={ 0} zIndex={6} >
        <Box height="21vw" width="100%">
          <HStack spacing={0}>
            <Image overflow="hidden" height="21vw" width="80%" src={imageSrc} borderRadius="6px" borderTopRightRadius={0} borderBottomRightRadius={0}/>
            <Button bg='#E64833' height="21vw" width="20%" borderTopLeftRadius={0} borderBottomLeftRadius={0}>
               <FontAwesomeIcon icon={faGithub} size="3x"/>
               <br/>
               REPO
             </Button>
          </HStack>
        </Box>
        <Box width="55%" marginleft="-70%!important" marginRight="auto" textAlign="center">
          <Heading size="md" color="white"  height="100%"  padding="5%">{title}</Heading>
        </Box>
        <Box justifyContent="center" alignItems="center" backgroundColor="#1a234a" zIndex="3" borderRadius="12px">
          <Text padding="3%" color="#FBE9D0">{description}</Text>
        </Box>
      </VStack>
    </Box>)
}
export default Card;
