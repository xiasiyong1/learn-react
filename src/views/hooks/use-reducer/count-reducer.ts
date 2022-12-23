export enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

interface CountAction {
  type: CountActionKind
  payload: number
}

interface CountState {
  count: number
}

export const initialState: CountState = { count: 1 }

export function countReducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case CountActionKind.INCREASE:
      return { count: state.count + action.payload }
    case CountActionKind.DECREASE:
      return { count: state.count - action.payload }
    default:
      return state
  }
}

export const increaseAction: CountAction = {
  type: CountActionKind.INCREASE,
  payload: 1,
}
export const decreaseAction: CountAction = {
  type: CountActionKind.DECREASE,
  payload: 1,
}
