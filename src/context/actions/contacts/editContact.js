import {
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export default (form, id) => dispatch => onSuccess => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  };

  dispatch({type: EDIT_CONTACT_LOADING});
  axios
    .put(`/contacts/${id}`, requestPayload)
    .then(res => {
      dispatch({type: EDIT_CONTACT_SUCCESS, payload: res.data});
      onSuccess(res.data);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: EDIT_CONTACT_FAILURE,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong'},
      });
    });
};
