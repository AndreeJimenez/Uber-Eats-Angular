import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface IRList {
  
}

export class InputAction {
  public static type = '[List] Input';
  constructor(public input: String) {}
}

@State<IRList>({
  name: 'listState',
  defaults: {
    
  },
})
@Injectable()
export class ListState {
  constructor() {}

  @Selector()
  static getResult(state: IRList) {
    //return state.Result;
  }

  @Action(InputAction)
  add(state: StateContext<IRList>, action: InputAction) {
    const actualState = state.getState();
    console.log('click input' + action.input);
  }
}
