import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux';

export class Products extends Component {

  render() {
    const { products } = this.props;
    return (
      <div className="Products">
        Hi i am {this.props.params.name}
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

        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect (mapStateToProps) (Products);
