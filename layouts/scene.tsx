import * as React from 'react';
import { View } from 'react-native';

export const scene = (route: any, navigator: any) => {
  const Component = route.component;
  return (
    <View style={{ flex: 1 }}>
      <Component
        navigator={navigator}
        route={route}
        {...route.passProps}
      />
    </View>
  );
};
