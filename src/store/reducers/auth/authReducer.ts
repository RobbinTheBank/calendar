import axios from "axios"
import { IUser } from "../../../models/IUser"
import { AppDispatch } from "../../store"
import { AuthAction, AuthActionEnum, AuthState, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types"

const initialState: AuthState = {
    auth: true,
    user: {} as IUser,
    isLoading: false,
    error: ''
}
export default function authReducer (state = initialState, action: AuthAction): AuthState{
    switch(action.type){
        case AuthActionEnum.SET_AUTH:
            return {...state, auth: action.payload, isLoading: false}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        default: return state
    }
}
export const AuthActionCreators = {
    setAuth: (auth: boolean): SetAuthAction =>({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setUeser: (user: IUser): SetUserAction =>({type: AuthActionEnum.SET_USER, payload: user}),
    setIsLoading: (payload: boolean): SetIsLoadingAction =>({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction =>({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch)=>{
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const mockUsers = await axios.get("./users.json")
            console.log(mockUsers)
        } catch (error) {
            dispatch(AuthActionCreators.setError('Incorect username or password!'))
        }
    },
    logout: ()=> async (dispatch: AppDispatch)=>{
        try {
            
        } catch (error) {
            
        }
    }
}