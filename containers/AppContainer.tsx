import * as React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../routes/Home/containers'
import homeReducer from '../routes/Home/reducer';

let RootStack = createStackNavigator({
  Home: Home
})

export default class AppContainer extends React.Component<{ store: any }, {}> {
  constructor(props: any) {
    super(props);
    // TODO: move this to navigation; when the Component is requested, injects it's own reducer to global reducers
    homeReducer(this.props.store);
  }
  render() {
    const Navigation = createAppContainer(RootStack)
    return (
      <Provider store={this.props.store}>
        <Navigation />
      </Provider>
    );
  }
}
