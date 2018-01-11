import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class Products extends Component {

  render() {
    const { products } = this.props;
    return (
      <div className="Products">
        Name: {this.props.params.name}
        <div className="Product-list">
          {products.map((product) => {
            return (
              <div
              className="Products-item"
              key={product.product_id}
              >
              <h2>{product.display_name}</h2>
              <h3>{product.estimate}</h3>
              </div>
            )
          })}
          </div>
          <div>
            <Link to={"/"}>Back to Homepage</Link>
            </div>
            <div>
            <Link to={"products/:name/:venues"}>Take me to the Venues!!</Link>
            </div>
        </div>


    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect (mapStateToProps) (Products);
