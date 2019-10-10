/* 3 things of an action suite:
1. action creators: a function that creates actions (returns action OBJECTS out of it)
2. action types: variables that contain the type strings to save us from spelling erros
3. actions: objects that describe to the reducer what event has occured and how it should update the state.

export const someFunc = () => {
  return {type: 'SOME_ACTION', payload: }
}

*/
// action type:
export const ADD_FEATURE = 'ADD_FEATURE';
// action creator - you will import this action into the component in which you wan to use AND the reducer it action is in the return
export const addFeature = feature => {
  return { type: ADD_FEATURE, payload: feature };
};
