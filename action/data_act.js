import Axios from 'axios';
import { DISPLAY_DATA,LOADING_DATA} from '../action/types'

export const loginAction = ({email, password}) => async dispatch => {
   const res=await Axios.post(port+'/adminLogin',{
        email,
        password,
      })         
            dispatch({
            type:DISPLAY_DATA,
             payload: res.data
            })
        }
