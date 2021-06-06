import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from './styles';

const Settings = ({settingsOptions}) => {
  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      {settingsOptions.map(({title, subTitle, onPress}, index) => (
        <TouchableOpacity key={index}>
          <View
            style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20}}>
            <Text style={{fontSize: 17}}>{title}</Text>
            {subTitle && (
              <Text style={{fontSize: 14, color: colors.grey, paddingTop: 2}}>
                {subTitle}
              </Text>
            )}
          </View>
          <View style={{height: 0.5, backgroundColor: colors.grey}} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Settings;
