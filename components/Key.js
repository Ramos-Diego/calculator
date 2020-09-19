// Single key in the calculator

import { Square } from '@chakra-ui/core'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

export default function Key({ children, operator, value }) {
  const { dispatch } = useContext(GlobalContext)

  return (
    <Square
      fontSize="20px"
      bgColor={operator ? 'lightpink' : 'lightblue'}
      size="60px"
      onClick={() => {
        operator
          ? dispatch({
              type: 'OPERATE',
              payload: operator,
            })
          : dispatch({
              type: 'ACCUMULATE',
              payload: value,
            })
      }}
      _hover={{ cursor: 'default' }}
    >
      {children}
    </Square>
  )
}
