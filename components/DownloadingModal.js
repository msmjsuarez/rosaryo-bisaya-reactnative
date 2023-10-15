import React from 'react';
import { View, Text, Modal, ActivityIndicator } from 'react-native';

const DownloadingModal = ({ isVisible, downloadComplete }) => {
    return (
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            {downloadComplete ? ( // Show "Download Complete" message
              <>
                <Text>Download Complete!</Text>
                <Button title="Close" onPress={closeModal} />
              </>
            ) : ( // Show loading indicator and download message
              <>
                <ActivityIndicator size="large" />
                <Text>Downloading file, please wait...</Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    );
  };

export default DownloadingModal;