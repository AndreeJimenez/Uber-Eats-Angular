import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

export interface IRList {
  rating?: number;
}

export class GetRatingAction {
  public static type = '[List] Rating';
  constructor(public rating: number) {}
}

@State<IRList>({
  name: 'listState',
  defaults: {
    rating: 4.5
  },
})
@Injectable()
export class ListState {
  constructor() {}

  @Selector()
  static getRating(state: IRList) {
    return state.rating;
  }

  @Action(GetRatingAction)
  get(state: StateContext<IRList>, action: GetRatingAction) {
    const actualState = state.getState();
    var rounded = Math.round((Number(actualState.rating) + 0.1) * 10) / 10
    state.patchState({ rating: rounded });
  }
}
