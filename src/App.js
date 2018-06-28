import React, { Component } from 'react';
import './App.css';

import ProductItem from './ProductItem';

const products = [
  {
    name: 'item 1',
    price: 100
  },
  {name: 'item 2',
  price: 200
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props) 

      this.state = {
        products: []
      };
    }

  componentWillMount() {
    this.getProducts();
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'
      ));

    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
         <h1>Products Manager</h1>
      
      {
        this.state.products.map(product => {
          return (
          <ProductItem
            key={product.name}
            {...product}
            />
    );
  })
}
</div>
);
}
}

export default App;
