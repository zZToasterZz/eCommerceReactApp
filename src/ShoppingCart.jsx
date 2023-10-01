import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, name: "ASUS ROG Motherboard", price: 15000, quantity: 0 },
      { id: 2, name: "GSkill 16GB RAM", price: 20000, quantity: 0 },
      { id: 3, name: "GTX 1080Ti", price: 83000, quantity: 0 },
      { id: 4, name: "Noctua NF-F12", price: 8000, quantity: 0 },
      { id: 5, name: "Corsair Full Tower case", price: 10000, quantity: 0 },
      { id: 6, name: "Logitech G512", price: 10000, quantity: 0 },
    ],
  };
  render() {
    return (
      <>
        <div className="container-fluid m-2">
          <div className="row border-bottom">
            <div className="col">
              <h4>Shopping Cart</h4>
            </div>
            <div className="col"></div>
            <div className="col">
              <h4>Total cart value: {this.calculateCartValue()}</h4>
            </div>
          </div>
          <div className="row">{this.renderProducts(this.state.products)}</div>
        </div>
      </>
    );
  }

  renderProducts = (products) => {
    return products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          handleIncrement={this.incrementProductQuantity}
          handleDecrement={this.decrementProductQuantity}
          handleDelete={this.deleteProduct}
        >
          <button className="btn btn-primary">Buy now !</button>
        </Product>
      );
    });
  };

  calculateCartValue = () => {
    let value = 0;
    for (let product of this.state.products) {
      value += product.price * product.quantity;
    }
    return <span>{value}</span>;
  };

  incrementProductQuantity = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts[index].quantity = allProducts[index].quantity + 1;
    this.setState({
      products: allProducts,
    });
  };

  decrementProductQuantity = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts[index].quantity =
      allProducts[index].quantity > 0 ? allProducts[index].quantity - 1 : 0;
    this.setState({
      products: allProducts,
    });
  };

  deleteProduct = (product) => {
    let allProducts = [...this.state.products];

    let filderedProducts = allProducts.filter((p) => product.id !== p.id);

    this.setState({
      products: filderedProducts,
    });
  };
}
