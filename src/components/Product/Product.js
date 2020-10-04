import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';

class Product extends Component {

    state = {
        product: null
    }

    //this should be arrow function to access 'this'
    onClickGetHandler = () => {
        axios.get('http://localhost:8080/products')
            .then(response => {
                this.setState({product: response.data[0]});
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
        card1= <div><h1>{this.state.product.productName}</h1>
            <p className="Price">${}</p>
            <p>Features: {this.state.product.features}</p>
            <p>Category: {this.state.product.category} > {this.state.product.subCategory}</p>
            <p>Available Units: {this.state.product.quantity}</p>
            <p><button>Add to Cart</button></p></div>;
        }

        return (
            <div>
                <br></br>
                <button onClick={this.onClickGetHandler}>Get Data</button>
                
                <div className="Card">
                    {card1}
                </div>
            </div>
        )
    }

}

export default Product;