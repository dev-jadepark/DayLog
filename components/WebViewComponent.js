import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const InAppWebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://m.smartstore.naver.com/dotorijambo'}} // 원하는 웹 페이지 주소를 입력하세요
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default InAppWebViewScreen;
