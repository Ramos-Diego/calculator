// Use OOP to easily add mathematical operations

class mathOps {
  result: string
  accumulator: string
  operator: string

  constructor({ result, accumulator, operator }: StateProps) {
    this.result = result
    this.accumulator = accumulator
    this.operator = operator
  }

  ADD() {
    if (this.result === '') {
      return this.accumulator
    } else {
      return `${+this.result + +this.accumulator}`
    }
  }

  SUBSTRACT() {
    if (this.result === '') {
      return this.accumulator
    } else {
      return `${+this.result - +this.accumulator}`
    }
  }

  MULTIPLY() {
    if (this.result === '') {
      return this.accumulator
    } else {
      return `${+this.result * +this.accumulator}`
    }
  }

  DIVIDE() {
    if (this.result === '') {
      return this.accumulator
    } else {
      return `${+this.result / +this.accumulator}`
    }
  }

  CLEAR() {
    return ''
  }

  EQUALS() {
    switch (this.operator) {
      case 'ADD':
        return `${+this.result + +this.accumulator}`
      case 'SUBSTRACT':
        return `${+this.result - +this.accumulator}`
      case 'MULTIPLY':
        return `${+this.result * +this.accumulator}`
      case 'DIVIDE':
        return `${+this.result / +this.accumulator}`
      default:
        // TODO: Check if this is right
        return this.result
    }
  }
}

// The 'state' parameter for the useReducer function
// is the current state. The action is a function that gets
// called to update the state.
const AppReducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'ACCUMULATE':
      return {
        // Preserve the rest of the GlobalContext object unchanged
        ...state,
        // Only modify the edit state
        accumulator: state.accumulator + action.payload,
      }
    case 'OPERATE':
      const calculation = new mathOps(state)
      return {
        ...state,
        accumulator: '',
        operator: action.payload,
        result: calculation[action.payload](),
      }
    default:
      return state
  }
}

export default AppReducer
