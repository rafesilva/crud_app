import React, { Component } from 'react';


class ProductItem extends Component {
  render() {
    const { name, price } = this.props;

          return (
            <div>
              <span>{name}</span>
              {' | '}
              <span>{price}</span>
              {' | '}
              <button></button>
</div>
);
}
}

export default ProductItem;
