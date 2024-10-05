import React,{useDisclosure,useState} from "react";
import { Avatar, Heading,Button,Box} from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import FullScreenSection from "./FullScreenSection";
import "../images/Landin.css"
const greeting = "Hello, I am Nipun!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#18181b"
    height="98vh"
  >
    <div style={{backgroundColor:"#1a234a",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",width:"90vw"}}>
      <div>
      <ScaleFade in={1} initialScale={0.8} transition={{ enter: { duration: 1.5} }} style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        <Avatar zIndex="4" height="14vw" width="14vw" name="Nipun" src="https://media.licdn.com/dms/image/v2/D5603AQGDJIcYAsmY6Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714545418892?e=1733356800&v=beta&t=4gViv4WgtkdRHC8TFMtn-b5GecIKZZnl2PRvWK2n87o" />
      </ScaleFade>
      <SlideFade direction='bottom' in={1} style={{ zIndex: 1 }} transition={{ enter: { duration: 1.8 } }} offsetY='150px'>
        <Heading textAlign="center" size="lg" fontWeight="200" color="FBE9D0">{greeting}</Heading>
        <Heading marginTop="2%" size="3xl" color="#E64833">{bio1}</Heading>
        <Heading className="typewriter" size="3xl" color="#E64833">{bio2}</Heading>
      </SlideFade>
      </div>
    </div>
  </FullScreenSection>)
};

export default LandingSection;
