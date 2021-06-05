import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const getIcons = type => {
  switch (type) {
    case 'material':
      return MaterialIcons;
  }
};

const Icon = ({type, ...props}) => {
  const FontIcon = getIcons(type);
  return <FontIcon {...props} />;
};

export default Icon;
