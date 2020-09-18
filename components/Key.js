// Single key in the calculator

import { Square } from '@chakra-ui/core'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export default function Key({ children, operator, value }) {
  const { accumulate, operate } = useContext(GlobalContext)

  return (
    <Square
      fontSize="20px"
      bgColor={operator ? 'lightpink' : 'lightblue'}
      size="60px"
      onClick={() => {
        operator ? operate(operator) : accumulate(value)
      }}
      _hover={{ cursor: 'default' }}
    >
      {children}
    </Square>
  )
}
