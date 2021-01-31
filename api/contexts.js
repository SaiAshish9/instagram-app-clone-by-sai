import createDataContext from './createDataContext';
import Api from './index';
import AsyncStorage from '@react-native-community/async-storage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-status-list':
      return {...state, statusList: action.payload};
    case 'set-posts':
      return {...state, posts: action.payload};
    case 'set-categories':
      return {...state, categories: action.payload};
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

const fetchPosts = (dispatch) => async () => {
  try {
    const {data} = await Api('posts');
    dispatch({
      type: 'set-posts',
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

const fetchCategories = (dispatch) => async () => {
  try {
    const {data} = await Api('categories');
    dispatch({
      type: 'set-categories',
      payload: data,
    });
  } catch (e) {}
};

export const {Context, Provider} = createDataContext(
  reducer,
  {
    fetchStatusList,
    fetchCategories,
    fetchPosts,
  },
  {
    statusList: null,
    posts: null,
    categories: null,
  },
);
