import {
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export default id => dispatch => onSuccess => {
  dispatch({type: DELETE_CONTACT_LOADING});
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch({type: DELETE_CONTACT_SUCCESS, payload: id});
      onSuccess();
    })
    .catch(err => {
      dispatch({
        type: DELETE_CONTACT_FAILURE,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong'},
      });
    });
};
