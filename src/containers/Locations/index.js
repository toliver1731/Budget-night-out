import React, { Component } from 'react';
import './Locations.css';
import { connect } from 'react-redux';
import AutoComplete from 'react-google-autocomplete';
import { addLocation, findProducts} from '../../actions/index';



//AutoComplete styling
const styles = {
   height: '30px',
   width: '300px',
   borderRadius: '5px',
   border: '1px solid gray',
   margin: '10px auto',

}

class Locations extends Component {

constructor(props) {
  super(props);
  this.state = {
    name: '',
  }
}

  render() {
    const { findProductsAction } = this.props;
    return (
      <div className='Location'>
        <div className="Location-nameWrapper">
          <span> Enter your name </span>
          <input className="Location-name" value ={this.state.name} onChange={(e)  => this.setState({ name: e.target.value })} />

      </div>
        <AutoComplete
          style={styles}
          //obtains start latitute and longitude
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
            //obtains end latitude and longitude
            onPlaceSelected={(place) => {
              console.log('place', place)
              const endLatitude = place.geometry.location.lat();
              const endLongitude = place.geometry.location.lng();
              this.props.addLocationAction({ endLatitude, endLongitude })
            }}
            types={['address']}
            componentRestrictions={{country: 'us'}}
            />


            <button className="Locations-button" onClick={() => findProductsAction(this.state.name) }>Find Location</button>



      </div>
    )
  }
}

//mapStateToProps

//dispatch

const mapDispatchtoProps = (dispatch) => ({
  addLocationAction: (location) => dispatch(addLocation(location)),
  findProductsAction: (name) => dispatch(findProducts(name))
})

export default connect(null, mapDispatchtoProps)(Locations);
