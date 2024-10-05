import React, {useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const formik = useFormik({
    initialValues: {firstName:"",email:"",type:"hireMe",comment:"",sub:1},
    onSubmit: async (values,{resetForm}) => {
      try{
        setDisplay(0);
        await submit(values);
        onOpen("success","Form submitted successfully")
        setDisplay(1);
        resetForm();
      }
      catch(err){
        onOpen("error","Looks like there was an error in processing your request")
        setDisplay(1);
        resetForm();
      }
    },
    validationSchema: Yup.object({
      firstName:Yup.string().required("Required"),
      email:Yup.string().email("Invalid email").required("Email is required"),
      comment:Yup.string().min(10, "Please provide a more detailed message")
    }),
  });
  const [display,setDisplay]=useState(1)
  return (
    <FullScreenSection
    zIndex="2"
      backgroundColor="#E64833"
      py={16}
      spacing={8}
      height="100vw"
      id="contact-section"
      color="#1a234a"
    >
      <VStack w="1024px" p={32} alignItems="flex-start" marginTop="-1%" overflowY="hidden" border="2px solid #1a234a" backgroundColor="#E64833">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit} >
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                bg="#1a234a"
                  color="white"
                  id="firstName"
                  name="firstName"
                  border="none"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage><text style={{color:"white",backgroundColor:"maroon",padding:"1%"}}>{formik.errors.firstName}</text></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  border="none"
                  type="email"
                  bg="#1a234a"
                  color="white"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage><text style={{color:"white",backgroundColor:"maroon",padding:"1%"}}>{formik.errors.email}</text></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")} bg="#1a234a" border="none"
                  color="white">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  bg="#1a234a"
                  border="none"
                  color="white"
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage><text style={{color:"white",backgroundColor:"maroon",padding:"1%"}}>{formik.errors.comment}</text></FormErrorMessage>
              </FormControl>
              <Button type="submit" bg="#1a234a" width="full" disabled={!display} color="white">
                {display==1?"Submit":"Loading.."}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
