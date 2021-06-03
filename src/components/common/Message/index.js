import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const Message = ({
  message,
  onRetry,
  primary,
  danger,
  info,
  success,
  onDismiss,
}) => {
  const [userDismissed, setUserDismissed] = useState(false);

  const getBgColor = () => {
    if (primary) return colors.primary;
    if (danger) return colors.danger;
    if (success) return colors.success;
    if (info) return colors.secondary;
  };
  return (
    <>
      {userDismissed ? null : (
        <View style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: colors.white,
              }}>
              {message}
            </Text>
            {typeof onRetry === 'function' && typeof onDismiss !== 'function' && (
              <TouchableOpacity onPress={onRetry}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default Message;
