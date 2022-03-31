import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/Tomo.jpeg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a React Native Todo App.
          </Text>
          <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            leftIcon={
              <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
            }
          >
            Dont click!
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://twitter.com/TomoNBz"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            @TomoNBz
          </LinkButton>
          <Text fontSize="md" w="full">
          Kalian ingin belajar programan dari 0?. Kunjungi instagram @cword.tech!
          </Text>
          <LinkButton
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            href="https://www.instagram.com/cword.tech/"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            @cword.tech
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
