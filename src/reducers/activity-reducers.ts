import { Activity } from "../types"

export type ActivitiActions = 
    {type:'save-activity', payload: {newActivity: Activity}} |
    {type:'set-activeId', payload: {id: Activity['id']}} |
    {type:'delete-activity', payload: {id: Activity['id']}} 

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

        let updatedActivities : Activity[] = []

        if(state.activityId){
            updatedActivities = state.activities.map(activity => activity.id === state.activityId ? action.payload.newActivity : activity)
        }else{
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if(action.type === 'set-activeId'){

        return{
            ...state,
            activityId: action.payload.id
        }
    }

    if(action.type === 'delete-activity'){
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }    return state
}