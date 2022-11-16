import React, { Component } from "react";


// to use component in class 
// we have to take it from react 
// and extend to apply it 


// If you don’t initialize state and you don’t bind methods,
// you don’t need to implement a constructor for your React component.

// super(): It is used to call the constructor of its parent class. 
// This is required when we need to access some variables of its parent class.
// this is uninitialized if super() is not called
// also used to get props from parent component


export default class Products extends Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {
      categories: [],
      products: [],
      selectedCategory: null,
    };
  }

  componentDidMount() {
    // it calls only first time 
    // not again on any render when state change
    console.log("component did mount");
    // this refers to Products class component 
    this.getAllCategories();
  }

  componentWillUnmount() {
    // clean up logic will come inside this function
    console.log("unmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log({ prevProps, prevState, snapshot });
    console.log("this.state.selectedCategory",this.state.selectedCategory);
    if (this.state.selectedCategory !== prevState.selectedCategory) {
      this.getProductsBySelectedCategory();
      console.log("work");
    }
  }

  getAllCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          categories: json,
        });
      });
  }

  getProductsBySelectedCategory() {
    fetch(`https://fakestoreapi.com/products/category/${this.state.selectedCategory}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }

  handleCategoryChange = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };
  render() {
    console.log("component rendered");

    return (
      <div>
        <select name="categories" id="categories" onChange={this.handleCategoryChange}>
          {this.state.categories.map((category) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
        <section className="product">
          {this.state.products.map((prod) => {
            return (
              <section className="product-item">
                <img style={{ height: 200, width: 200 }} src={prod.image} alt={prod.title} />
                <section>
                  <h2>{prod.title}</h2>
                </section>
              </section>
            );
          })}
        </section>
      </div>
    );
  }
}
