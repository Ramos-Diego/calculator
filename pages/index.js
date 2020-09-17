import Head from 'next/head'
import { Box, SimpleGrid, Container, Input, Square } from '@chakra-ui/core'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Key from '../components/Key'

export default function Home() {
  const { handleSubmit, register } = useForm()
  const [data, setData] = useState({})

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
        {/* Input number */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            fontSize="xl"
            name="number"
            ref={register({ required: true })}
            textAlign="right"
            mb={4}
          />
        </form>

        {/* Keyboard */}
        <SimpleGrid columns={4} spacing={1}>
          <Key operator>AC</Key>
          <Key operator>&plusmn;</Key>
          <Key operator>%</Key>
          <Key operator>&divide;</Key>

          <Key value={7}>7</Key>
          <Key value={8}>8</Key>
          <Key value={9}>9</Key>
          <Key operator>&times;</Key>

          <Key value={4}>4</Key>
          <Key value={5}>5</Key>
          <Key value={6}>6</Key>
          <Key operator>-</Key>

          <Key value={1}>1</Key>
          <Key value={2}>2</Key>
          <Key value={3}>3</Key>
          <Key operator>+</Key>

          <Key value={0}>0</Key>
          <Key value=".">.</Key>
          <Key operator>=</Key>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
