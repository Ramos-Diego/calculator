import Head from 'next/head'
import {
  Box,
  SimpleGrid,
  Container,
  Heading,
  Input,
  Square,
  Button,
} from '@chakra-ui/core'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Key from '../components/Key'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export default function Home() {
  const { handleSubmit, register } = useForm()
  const [data, setData] = useState({})
  const [keyNumber, setKeyNumber] = useState('')

  const { result, accumulator } = useContext(GlobalContext)

  const onSubmit = ({ digit }) => {
    setData({ number1: digit })
    console.log(data)
  }

  return (
    <Box>
      <Head>
        <title>Calculator</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Container display="grid" alignContent="center" w="250px" h="100vh">
        <Heading as="h1" fontSize="lg" mb={3} textAlign="end">Result: {result}</Heading>
        <Heading as="h1" fontSize="lg" mb={3} textAlign="end">Accumulator: {accumulator}</Heading>

        {/* Input number */}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            fontSize="xl"
            name="number"
            ref={register({ required: true })}
            textAlign="right"
            mb={4}
          />
        </form> */}

        {/* Keyboard */}
        <SimpleGrid columns={4} spacing={1}>
          <Key value="7">7</Key>
          <Key value="8">8</Key>
          <Key value="9">9</Key>
          <Key operator="DIVIDE">&divide;</Key>

          <Key value="4">4</Key>
          <Key value="5">5</Key>
          <Key value="6">6</Key>
          <Key operator="MULTIPLY">&times;</Key>

          <Key value="1">1</Key>
          <Key value="2">2</Key>
          <Key value="3">3</Key>
          <Key operator="SUBSTRACT">-</Key>

          <Key value="0">0</Key>
          <Key value=".">.</Key>
          <Key operator="CLEAR">AC</Key>
          <Key operator="ADD">+</Key>

          <Key operator="EQUALS">=</Key>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
