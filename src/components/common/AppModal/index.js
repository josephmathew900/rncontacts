import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import Icon from '../Icon';
import styles from './styles';
import PropTypes from 'prop-types';

const AppModal = ({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(false);
          }
        }}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon type="material" name="close" size={23} />
              </TouchableOpacity>
              <Text style={styles.title}>{title || 'RNContacts'}</Text>
              <View />
            </View>
            <View style={styles.separator} />
            <View style={styles.body}>{modalBody}</View>
            <View>
              {modalFooter}
              {!modalFooter && (
                <View>
                  <>
                    <View style={styles.separator} />
                    <View style={styles.footerItems}>
                      <View style={styles.footer}>
                        <Text style={styles.footerText}>Privacy Policy</Text>
                        <View style={styles.termsView} />
                        <Text style={styles.footerText}>Terms of Service</Text>
                      </View>
                    </View>
                  </>
                </View>
              )}
            </View>
            <View />
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

AppModal.prototypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  closeOnTouchOutside: true,
};

export default AppModal;
