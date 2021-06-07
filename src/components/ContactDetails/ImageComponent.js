import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <View style={styles.imageContainer}>
      {isLoading && <Text style={styles.loading}>Loading Image</Text>}
      <View>
        <Image
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
          source={{uri: src}}
          style={styles.detailPhoto}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
