import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
	const { products, cartItems, cartTotal } = useSelector((store) => store);

	return (
		<div className='card m-5 p-5'>
			<h1>Cart</h1>
			{Object.keys(cartItems).length === 0 ? (
				<p>No items in cart.</p>
			) : (
				<div>
					{Object.keys(cartItems).map((id) => (
						<p key={id} className='Cart-product'>
							<Link to={`/products/${id}`}>
								<b>Number of {products[id].name}s: {cartItems[id]}</b>
							</Link>
                            <br/>
							{cartItems[id]} x {products[id].price.toFixed(2)} = {(cartItems[id] * products[id].price).toFixed(2)}
						</p>
					))}
					<p>
						<b>Total:</b> {cartTotal}
					</p>
				</div>
			)}
		</div>
	);
}

export default Cart;
