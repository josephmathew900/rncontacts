import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';

export default file => onSucess => async onError => {
  const user = await AsyncStorage.getItem('user');
  const userName = JSON.parse(user).username;
  const path = `contact-pictures/${userName}/${uuid.v4()}`;
  const ref = storage().ref(path);

  const task = ref.putFile(file.path);

  task
    .then(async () => {
      const url = await ref.getDownloadURL();
      onSucess(url);
    })
    .catch(error => {
      onError(error);
    });
};
