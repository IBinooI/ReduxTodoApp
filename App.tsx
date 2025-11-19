import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import TodoListScreen from './src/screens/TodoListScreen';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <TodoListScreen />
      </SafeAreaView>
    </Provider>
  );
}
