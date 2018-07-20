import React from "react";
import { AppRegistry, SafeAreaView } from "react-native";
import dva from "./utils/dva";
import Router, { routerMiddleware, routerReducer } from './router'
import models from './utils/models'

const app = dva({
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  models,
  onError(e) {
    console.log('onError', e)
  },
});
const App = app.start(<Router />);

AppRegistry.registerComponent('saasPartClubApp', () => App)

