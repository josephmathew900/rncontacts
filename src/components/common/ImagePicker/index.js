import React, {forwardRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';
import ImagePickerCropper from 'react-native-image-crop-picker';

const ImagePicker = forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from Camera',
      icon: (
        <Icon type="material" name="camera" color={colors.grey} size={21} />
      ),
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => onFileSelected(image))
          .catch(error => console.log(error));
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon type="material" name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(image => onFileSelected(image))
          .catch(error => console.log(error));
      },
    },
  ];

  return (
    <View>
      <RBSheet
        ref={ref}
        height={190}
        openDuration={250}
        closeOnDragDown
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
        <View style={styles.optionWrapper}>
          {options.map(({name, onPress, icon}) => (
            <TouchableOpacity
              style={styles.pickerOption}
              key={name}
              onPress={onPress}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </RBSheet>
    </View>
  );
});

export default ImagePicker;
