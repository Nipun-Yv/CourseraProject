import React,{useEffect,useRef,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import "../images/Landin.css"
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [yPos, setYPos] = useState(0);
  const headerRef = useRef();
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    console.log("Hello")
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
    useEffect(()=>{
      function handleScroll() {
        if (window.scrollY <= 30) {
          headerRef.current.classList.remove("up");
        }
        else {
          if (window.scrollY - yPos > 0) {
            headerRef.current.classList.add("up")
          }
          else {
            console.log("Howdy")
            headerRef.current.classList.remove("up");
          }
        }
        setYPos(window.scrollY)
      }
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[yPos])
  return (
    <Box ref={headerRef}
      className="header-nav"
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" padding="0" marginRight="5.5%">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          padding="0"
        >
          <nav>
            <HStack marginTop="4%" spacing={4} bg="#1a234a" height="60px" width="min-content" paddingLeft="30%" borderBottom="1px solid #E64833" paddingRight="30%" marginLeft="-10%">
            {socials.map((element) => {
              return <Box><a href={element.url}><FontAwesomeIcon color={"#E64833"} icon={element.icon} size="2x"/></a></Box>
            })}
            </HStack>
          </nav>
          <nav style={{height:"70px",margin:"0"}}>
            <HStack fontWeight="500" fontSize="1.1em" height="100%" justifyContent="space-between" spacing={4}  marginLeft="7.5%" paddingLeft="20%" paddingRight="20%" width="20vw">
              <Box><button onClick={()=>{ handleClick("project")}}>Projects</button></Box>
              <Box><button onClick={()=>{handleClick("contact")}}>Contact Me</button></Box>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
