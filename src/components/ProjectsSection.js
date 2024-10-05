import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => ("https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land ",
    getImageSrc: () => ("https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8958749/og_image/optimized/long-scroll-websites-408ffd88656f7355c3a6f13eec10a791.png"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => ("https://iso.500px.com/wp-content/uploads/2014/07/hong-kong-cityscape1.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => ("https://slidemodel.com/wp-content/uploads/7543-01-calendar-2018-template-16x9-4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
    zIndex="4"
      backgroundColor="#FBE9D0"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      marginBottom="50vh"
      id="project-section"
    >
      <Heading as="h1" color="#874F41">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        borderRadius="6px"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
