// Use OOP to easily add mathematical operations

function mathOps(result, accumulator, operator) {
  this.result = result
  this.accumulator = accumulator
  this.operator = operator

  this.ADD = function () {
    if (result === '') {
      return accumulator
    } else {
      return `${+result + +accumulator}`
    }
  }

  this.SUBSTRACT = function () {
    if (result === '') {
      return accumulator
    } else {
      return `${+result - +accumulator}`
    }
  }

  this.MULTIPLY = function () {
    if (result === '') {
      return accumulator
    } else {
      return `${+result * +accumulator}`
    }
  }

  this.DIVIDE = function () {
    if (result === '') {
      return accumulator
    } else {
      return `${+result / +accumulator}`
    }
  }

  this.CLEAR = function () {
    return ''
  }

  this.EQUALS = function () {
    switch (operator) {
      case 'ADD':
        return `${+result + +accumulator}`
      case 'SUBSTRACT':
        return `${+result - +accumulator}`
      case 'MULTIPLY':
        return `${+result * +accumulator}`
      case 'DIVIDE':
        return `${+result / +accumulator}`
      default:
        return state
    }
  }
}

// The 'state' parameter for the useReducer function
// is the current state. The action is a function that gets
// called to update the state.
export default function AppReducer(state, action) {
  switch (action.type) {
    case 'ACCUMULATE':
      return {
        // Preserve the rest of the GlobalContext object unchanged
        ...state,
        // Only modify the edit state
        accumulator: state.accumulator + action.payload,
      }
    case 'OPERATE':
      const calculation = new mathOps(
        state.result,
        state.accumulator,
        state.operator
      )
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
