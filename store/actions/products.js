export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (product) => {
  return async dispatch => {
    // any async code before dispatch

    // fetch('https://rn-shop-cart-9481e-default-rtdb.firebaseio.com/products.json') // GET call

    const response = await fetch('https://rn-shop-cart-9481e-default-rtdb.firebaseio.com/products.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      }
    );

    if(!response.ok) {
      throw new Error('something went wrong');
    }
    const resData = await response.json()
    console.log('CREATE resData', resData)
    const newProduct = product;
    newProduct.id = resData.name;

    // .then(response => {
    //   console.log('response', response)
    // })


    dispatch({
      type: ADD_PRODUCT,
      newProduct: product
    })
  }
}

export const viewProducts = () => {
  return async dispatch => {
    const response = await fetch('https://rn-shop-cart-9481e-default-rtdb.firebaseio.com/products.json') // GET call
    // response.json().then((result) => console.log('result', result));
    const resData = await response.json()
    console.log('READ resData', resData)
  }
}

export const updateProduct = (product) => {
  return async dispatch => {
    const response = await fetch('https://rn-shop-cart-9481e-default-rtdb.firebaseio.com/products/'+'-MReN0cwVuTRjtuCwfS_.json',
    // const response = await fetch('https://rn-shop-cart-9481e-default-rtdb.firebaseio.com/products/'+'-MReN0cwVuTRjtuCwfS_.json?auth='GETLOGINTOKEN',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }
  );
  const resData = await response.json()
  console.log('UPDATE resData', resData)
  }
}

export const deleteProduct = () => {
  return async dispatch => {
    const response = await fetch('https://rn-shop-cart-9481e-default-rtdb.firebaseio.com/products/'+'-MReN0cwVuTRjtuCwfS_.json',
    {
      method: 'DELETE',
    }
  );
  const resData = await response.json()
  console.log('DELETE resData', resData)
  }
}

// PUT will override entire object
// PATCH will update the entry in object