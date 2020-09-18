// Use OOP to easily add mathematical operations

function mathOps(operand1, operand2, operator) {
  this.operand1 = operand1
  this.operand2 = operand2
  this.operator = operator

  this.ADD = function () {
    if (operand1 === '') {
      return operand2
    } else {
      return `${+operand1 + +operand2}`
    }
  }

  this.SUBSTRACT = function () {
    if (operand1 === '') {
      return operand2
    } else {
      return `${+operand1 - +operand2}`
    }
  }

  this.MULTIPLY = function () {
    if (operand1 === '') {
      return operand2
    } else {
      return `${+operand1 * +operand2}`
    }
  }

  this.DIVIDE = function () {
    if (operand1 === '') {
      return operand2
    } else {
      return `${+operand1 / +operand2}`
    }
  }

  this.CLEAR = function () {
    return ''
  }

  this.EQUALS = function() {
    switch (operator) {
      case 'ADD': return `${+operand1 + +operand2}`
      case 'SUBSTRACT': return `${+operand1 - +operand2}`
      case 'MULTIPLY': return `${+operand1 * +operand2}`
      case 'DIVIDE': return `${+operand1 / +operand2}`
      default: return state
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
      const calculation = new mathOps(state.result, state.accumulator, state.operator)
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
