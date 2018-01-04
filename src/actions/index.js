export const ADD_LOCATION ='ADD_LOCATION';
export const FIND_PRODUCTS = 'FIND_PRODUCTS';
//zUWS65TFLrOdra2hAj92nH9FykLfoXGyCBGsPVWx

export const addLocation = (location) => ({
  type: ADD_LOCATION,
  payload: location
})

const headers = {
  'Authorization': 'Token zUWS65TFLrOdra2hAj92nH9FykLfoXGyCBGsPVWx',
  'Content-Type': 'application/json',
  'Accept_Language': 'en_US'
}

export const findProducts = (name) => {

    return (dispatch, getState) => {
      const { startLatitude, startLongitude, endLatitude, endLongitude } = getState().location;

      //fetch gets info from uber and use GET function. Uses headers for authentication

      fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${startLatitude}&start_longitude=${startLongitude}&end_latitude=${endLatitude}&end_longitude=${endLongitude}`,{


        method: 'GET',
        headers,
    })
    .then((data) => data.json())
    .then((estimationData) => {
      console.log('estimationData', estimationData)
    })
  }

    // return ({
    //   type: FIND_PRODUCTS,
    //   payload: name
    // })

}
