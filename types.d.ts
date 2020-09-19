type StateProps = {
  result: string
  operator: string
  accumulator: string
}

type ActionProps = {
  type: 'ACCUMULATE' | 'OPERATE'
  payload: 'ADD' | 'SUBSTRACT' | 'MULTIPLY' | 'DIVIDE' | 'CLEAR' | 'EQUALS'
}

type KeyProps = {
  children: React.ReactNode
  operator?: string
  value?: string
}