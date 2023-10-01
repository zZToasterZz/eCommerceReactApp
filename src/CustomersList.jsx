import React, { Component } from "react";
import "./customers-list.css";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customerCount: 0,
    customers: [
      {
        id: 1,
        name: "Sunny",
        phone: "809-662",
        address: { city: "Lucknow" },
        photo: "https://picsum.photos/id/1/30/30",
      },
      {
        id: 2,
        name: "Bunny",
        phone: "420-420",
        address: { city: "Delhi" },
        photo: "https://picsum.photos/id/2/30/30",
      },
      {
        id: 3,
        name: "Honey",
        phone: "954-234",
        address: { city: "Agra" },
        photo: "https://picsum.photos/id/3/30/30",
      },
      {
        id: 4,
        name: "Money",
        phone: "432-652",
        address: { city: "Lucknow" },
        photo: "https://picsum.photos/id/4/30/30",
      },
      {
        id: 5,
        name: "Killua",
        phone: "",
        address: { city: "Gurgaon" },
        photo: "https://picsum.photos/id/5/30/30",
      },
    ],
  };

  customerNameStyle = (name) => {
    if (name.startsWith("S"))
      return "red-highlight"; //class defined in mainContent.css
    else if (name.startsWith("H")) return "text-bg-primary"; //bootstrap classes
    else if (name.startsWith("M")) return "text-bg-secondary";
    else return "";
  };

  render() {
    return (
      <>
        <div>
          <h4 className="m-1 p-1">
            {this.state.pageTitle}
            <span className="badge badge-secondary m-1 text-bg-secondary">
              {this.state.customerCount}
            </span>
            <button
              className="btn btn-info"
              onClick={this.increaseCustomerCount}
            >
              Increase
            </button>
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Phone</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.getCustomerTableTbodyToRender(this.state.customers)}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  getCustomerTableTbodyToRender = (customers) => {
    return customers.map((customer, index) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img src={customer.photo} alt="customer"></img>
            <button
              className="btn btn-sm btn-secondary ms-2"
              onClick={() => this.changePicture(customer, index)}
            >
              change picture
            </button>
          </td>
          <td className={this.customerNameStyle(customer.name)}>
            {customer.name}
          </td>
          <td>{this.getCustomerPhoneToRender(customer.phone)}</td>
          <td>{customer.address.city}</td>
        </tr>
      );
    });
  };

  changePicture = (customer, index) => {
    const picId = Math.floor(Math.random() * 1000) + 1;
    const photoUrl = "https://picsum.photos/id/" + picId + "/30/30";
    const updatedCustomerArray = this.state.customers;
    updatedCustomerArray[index].photo = photoUrl;
    this.setState({ customers: updatedCustomerArray });
  };

  getCustomerPhoneToRender = (phone) => {
    return phone || <span className="text-danger">No Phone</span>;
  };

  increaseCustomerCount = () => {
    this.setState({
      customerCount: this.state.customerCount + 1,
    });
  };
}
