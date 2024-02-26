import React from "react";
import {
  Heading,
  VStack,
  HStack,
  Image,
  Text,
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Button
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Card = ({ title, description, imageSrc }) =>
  <ChakraCard maxW='md'>
      <Image
        src={imageSrc}
        alt='project img'
        borderRadius='lg'
    />
     <CardBody>
      <VStack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>{description}</Text>
      </VStack>
    </CardBody>
    <CardFooter>
      <HStack>
        <Button colorScheme='cyan' variant='ghost' size='xs'>
          See more 
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Button>
        
      </HStack>
    </CardFooter>
</ChakraCard>

export default Card;
