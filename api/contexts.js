import createDataContext from './createDataContext';
import Api from './index';
import AsyncStorage from '@react-native-community/async-storage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-status-list':
      return {...state, statusList: action.payload};
    default:
      return state;
  }
};

const fetchStatusList = (dispatch) => async () => {
  try {
    const {data} = await Api('status-list');
    dispatch({
      type: 'set-status-list',
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const {Context, Provider} = createDataContext(
  reducer,
  {
    fetchStatusList,
  },
  {
    statusList: null,
  },
);
