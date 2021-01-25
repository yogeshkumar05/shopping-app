import {AsyncStorage} from 'react-native';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const signUpAction = (email, password) => {
  console.log(email);
  console.log(password);
  return async dispatch => {

    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACTOcXcApGm2Tznfnf_yMFRqQLBtCi7aY', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password, returnSecureToken: true})
    });

    const resData = await response.json();
    console.log('resData', resData);

    dispatch({
      type: SIGN_UP,
      response: resData
    })
  }
}

export const signInAction = (email, password) => {
  console.log(email);
  console.log(password);
  return async dispatch => {

    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACTOcXcApGm2Tznfnf_yMFRqQLBtCi7aY', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password, returnSecureToken: true})
    });

// console.log('response', response);

    const resData = await response.json();
    console.log('resData', resData);

    // to save token to device storage & avoid login prompts everytime user refreshes app
    AsyncStorage.setItem('userData', JSON.stringify(resData.idToken));  

    dispatch({
      type: SIGN_IN,
      response: resData
    })
  }
}