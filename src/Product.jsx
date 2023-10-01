import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
    handleIncrement: this.props.handleIncrement,
    handleDecrement: this.props.handleDecrement,
    handleDelete: this.props.handleDelete,
  };

  render() {
    return (
      <>
        <div className="col-lg-3">
          <div className="card m-2">
            <div className="card-body">
              <div className="text-muted">
                # {this.state.product.id}
                <span className="pull-right">
                  <i
                    className="fa fa-solid fa-trash fa-lg cursor-hand"
                    onClick={() => {
                      this.state.handleDelete(this.state.product);
                    }}
                  ></i>
                </span>
              </div>
              <h5 className="card-title border-top">
                {this.state.product.name}
              </h5>
              <span>
                <b>${this.state.product.price}</b>
              </span>
            </div>
            <div className="card-footer text-end">
              <div className="float-start">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text btn btn-secondary"
                    onClick={() => {
                      this.state.handleDecrement(this.state.product);
                    }}
                  >
                    -
                  </span>
                  <span type="text" className="form-control">
                    {this.state.product.quantity}
                  </span>
                  <span
                    className="input-group-text btn btn-secondary"
                    onClick={() => {
                      this.state.handleIncrement(this.state.product);
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="float-end">{this.props.children}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
