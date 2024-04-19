import { Activity } from "../types"

export type ActivitiActions = 
    {type:'save-activity', payload: {newActivity: Activity}} |
    {type:'set-activeId', payload: {id: Activity['id']}} 

export type ActivityState = {
    activities : Activity[],
    activityId: Activity['id']
}

export const initialState: ActivityState = {
    activities:[],
    activityId:''
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

    if(action.type === 'set-activeId'){

        return{
            ...state,
            activityId: action.payload.id
        }
    }
    return state
}