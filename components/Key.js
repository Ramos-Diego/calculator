// Single key in the calculator

import { Square } from '@chakra-ui/core'
import { useState } from 'react'

export default function Key({ children, operator, value }) {
  const [data, setData] = useState()

  return (
    <Square
      value={value}
      fontSize="20px"
      bgColor={operator ? "lightpink" : "lightblue"}
      size="60px"
      onClick={() => {
        setData(value)
        console.log(data)
      }}
      _hover={{cursor: 'default'}}
    >
      {children}
    </Square>
  )
}
