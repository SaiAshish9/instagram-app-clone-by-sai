import createDataContext from './createDataContext';
import Api from './index';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate, setNavigator} from './navigationRef';
import {CommonActions} from '@react-navigation/native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-status-list':
      return {...state, statusList: action.payload};
    case 'set-posts':
      return {...state, posts: action.payload};
    case 'set-categories':
      return {...state, categories: action.payload};
    case 'set-media':
      return {...state, media: action.payload};
    case 'set-suggestions':
      return {...state, suggestions: action.payload};
    case 'toggle-auth':
      return {...state, isAuth: action.payload};
    default:
      return state;
  }
};

const checkUser = (dispatch) => async (nav) => {
  const token = await AsyncStorage.getItem('token');
  setNavigator(nav);
  if (token && token.length > 0) {
    nav.dispatch(
      CommonActions.reset({
        routes: [
          {
            name: 'home',
          },
        ],
      }),
    );
  } else {
    nav.dispatch(
      CommonActions.reset({
        routes: [
          {
            name: 'auth',
          },
        ],
      }),
    );
  }
};

const isLoggedIn = (dispatch) => async () => {  

  const check = await AsyncStorage.getItem('isLoggedIn');

  if (check !== null ) {
    dispatch({
      action: 'toggle-auth',
      payload: 'true',
    });
  } else if (check === null) {
    dispatch({
      action: 'toggle-auth',
      payload: 'false',
    });
  }
};

const signIn = (dispatch) => async () => {
  await AsyncStorage.setItem('token', '23erghju67ujhbvft678ikjnbvgy');
  await AsyncStorage.setItem('isLoggedIn', 'true');
  navigate({name: 'home'});
};

const signOut = (dispatch) => async () => {
   await AsyncStorage.clear();
  // await AsyncStorage.setItem('token', '');
  // await AsyncStorage.setItem('isLoggedIn', '');
  dispatch({
    type: 'toggle-signin',
    payload: false,
  });
  navigate({name: 'auth'});
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

const fetchMedia = (dispatch) => async () => {
  try {
    const {data} = await Api('media');
    dispatch({
      type: 'set-media',
      payload: data,
    });
  } catch (e) {}
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

const fetchSuggestions = (dispatch) => async () => {
  try {
    const {data} = await Api('suggestions');
    dispatch({
      type: 'set-suggestions',
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
    fetchMedia,
    signIn,
    signOut,
    checkUser,
    isLoggedIn,
    fetchSuggestions,
  },
  {
    statusList: null,
    posts: null,
    categories: null,
    media: null,
    suggestions: null,
    isAuth: null,
  },
);
