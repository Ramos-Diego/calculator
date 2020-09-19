// Single key in the calculator

import { Square } from '@chakra-ui/core'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

const Key = ({ children, operator, value }: KeyProps) => {
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

export default Key