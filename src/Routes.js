import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetails';
import Cart from './Cart';

function Routes() {
	return (
		<Switch>
			<Route exact path="/products">
				<ProductList />
			</Route>
			<Route exact path="/products/:id">
				<ProductDetail />
			</Route>
			<Route exact path="/cart">
				<Cart />
			</Route>
			<Redirect to="/products" />
		</Switch>
	);
}

export default Routes;