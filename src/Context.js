import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            detailProduct: detailProduct
        }
    }

    componentDidMount(){
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState({products: tempProducts})
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return {detailProduct : product}
        })
    }

    addToCart = id => {
        let tempProducts = [...this.state.products] 
    }
    
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider , ProductConsumer };