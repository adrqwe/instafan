import { compose } from 'redux';
const composeEnhancers = () =>
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export default composeEnhancers;