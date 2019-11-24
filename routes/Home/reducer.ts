import { injectReducer } from '../../store/reducers';
import { reducer } from './modules';

export default (store: any):void => {
  injectReducer(store, { key: 'data', reducer });
};
