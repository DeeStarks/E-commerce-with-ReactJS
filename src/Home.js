import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import InHeader from './InHeader'
import fire from './config/Fire';
import user from './Login';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';

class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            user: user
        }
        this.logout = this.logout.bind(this)
    }
    
    
    logout(){
        fire.auth().signOut();
    }

    render() {
        return (
            <React.Fragment>
                <InHeader logout={this.logout} user={this.state.user}/>
                <br />
                <br />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route path="*" component={Default} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default Home;