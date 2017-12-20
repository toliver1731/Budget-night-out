import React, { Component } from 'react';
import './Locations.css';
import { connect } from 'react-redux';
import AutoComplete from 'react-google-autocomplete';
import { addLocation } from '../../actions/index';


//AutoComplete styling
const styles = {
   height: '30px',
   width: '300px',
   borderRadius: '5px',
   border: '1px solid gray',
   margin: '10px auto',

}

class Locations extends Component {
  render() {
    return (
      <div className='Location'>
        <AutoComplete
          style={styles}
          //envokes autocomplete function
          onPlaceSelected={(place) => {
            const startLatitude = place.geometry.location.lat();
            const startLongitude = place.geometry.location.lng();
            this.props.addLocationAction({ startLatitude, startLongitude });
          }}
            type={['address']}
            componentRestrictions={{country: 'us'}}
          />
          <AutoComplete
            style={styles}
            //envokes autocomplete function
            onPlaceSelected={(place) => {
              console.log('place', place)
              const endLatitude = place.geometry.location.lat();
              const endLongitude = place.geometry.location.lng();
              this.prop.addLocationAction({ endLatitude, endLongitude })
            }}
            type={['address']}
            componentRestrictions={{country: 'us'}}
            />

      </div>
    )
  }
}

//mapStateToProps

//dispatch

const mapDispatchtoProps = (dispatch) => ({
  addLocationAction: (location) => dispatch(addLocation(location)),
})

export default connect(null, mapDispatchtoProps)(Locations);
