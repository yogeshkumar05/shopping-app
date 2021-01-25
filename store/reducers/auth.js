export const SIGN_UP = 'SIGN_UP';

export const signUp = (email, password) => {
  return async dispatch => {

    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyACTOcXcApGm2Tznfnf_yMFRqQLBtCi7aY', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password, returnSecureToken})
    });

    if(response.ok) {
      throw new Error('Something went wrong');
    }

    const resData = await response.json();
    console.log('resData', resData);

    dispatch({
      type: SIGN_UP
    })
  }
}