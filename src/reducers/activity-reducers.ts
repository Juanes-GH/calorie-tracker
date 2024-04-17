import { Activity } from "../types"

export type ActivitiActions = 
    {type:'save-activity', payload: {newActivity: Activity}}

type ActivityState = {
    activities : Activity[]
}

export const initialState: ActivityState = {
    activities:[]
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivitiActions
) => {

    if(action.type === 'save-activity'){
        // Este codigo maneja la logica para actulizar el state
        return {
             ...state,
             activities: [...state.activities, action.payload.newActivity]
        }
    }
    return state
}