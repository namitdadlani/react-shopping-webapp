import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';

class Product extends Component {

    state = {
        product: null
    }

    //this should be arrow function to access 'this'
    onClickGetHandler = () => {
        axios.get('https://my-react-project-first.firebaseio.com/product.json')
            .then(response => {
                this.setState({product: response.data});
                console.log(response);
            })
            .catch(error => {
                alert(error);
                this.setState({product: 'response'});
            });          
    }

    render() {

        //Updating my card
        let card1= null;        
        if (this.state.product){
        card1= <div><h1>{this.state.product.name}</h1>
            <p className="Price">${this.state.product.price}</p>
            <p>Features: {this.state.product.features}</p>
            <p>Category: {this.state.product.category} > {this.state.product.subcategory}</p>
            <p>Available Units: {this.state.product.quantity}</p>
            <p><button>Add to Cart</button></p></div>;
        }

        return (
            <div>
                <button onClick={this.onClickGetHandler}>Get Data</button>
                <div className="Card">
                    {card1}
                </div>
            </div>
        )
    }

}

export default Product;