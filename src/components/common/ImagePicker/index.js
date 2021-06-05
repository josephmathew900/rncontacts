import React, {forwardRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../Icon';
import styles from './styles';

const ImagePicker = forwardRef(({openSheet, closeSheet}, ref) => {
  const options = [
    {
      name: 'Take from Camera',
      icon: (
        <Icon type="material" name="camera" color={colors.grey} size={21} />
      ),
      onPress: () => {},
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon type="material" name="image" color={colors.grey} size={21} />,
      onPress: () => {},
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
            <TouchableOpacity style={styles.pickerOption} key={name}>
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
