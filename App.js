import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import CryptoHome from "./src/containers/CryptoHome";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <CryptoHome />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
