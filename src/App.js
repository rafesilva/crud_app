import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';

const products = [
  {
    name: 'item 1',
    price: 100
  },
  {
    name: 'item 2',
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
   this.onDelete = this.onDelete.bind(this)
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  getProducts() {
   return JSON.parse(localStorage.getItem('products'));
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

  
  this.setState({ products: filteredProducts })

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
            onDelete={this.onDelete}
            />
            );
          })
          }
      </div>
);
}
}

export default App;
