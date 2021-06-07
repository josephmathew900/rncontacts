import {
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInterceptor';

export default form => dispatch => onSuccess => {
  const requestPayload = {
    country_code: form.phoneCode || '',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    isFavorite: form.isFavorite || false,
  };

  dispatch({type: CREATE_CONTACT_LOADING});
  axios
    .post('/contacts/', requestPayload)
    .then(res => {
      dispatch({type: CREATE_CONTACT_SUCCESS, payload: res.data});
      onSuccess();
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: CREATE_CONTACT_FAILURE,
        payload: err.response
          ? err.response.data
          : {error: 'something went wrong'},
      });
    });
};
