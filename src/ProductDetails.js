import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
	const { id } = useParams();
	const { products, cartItems } = useSelector((store) => store);
	const product = products[id];

	const dispatch = useDispatch();
	const add = () => dispatch(addToCart(id));
	const remove = () => dispatch(removeFromCart(id));

	return (
		<div className='my-5 p-5 container text-center'>
            <div className="card-img-top"><img className="img-fluid" src={product.image_url} width='300'/></div>
			<div className='card-body'>

                <h3><strong>{product.name}</strong></h3>
				<p>
					<b>Price:</b> {product.price}
				</p>
				<p>
					<b>Description:</b> {product.description}
				</p>
				<button className='mx-2 btn btn-success' onClick={add}>
					Add to Cart
				</button>

				{cartItems[id] > 0 && (
					<button className='mx-2 btn btn-danger' onClick={remove}>
						Remove from Cart
					</button>
				)}

				{cartItems[id] > 0 && (
                    <div className="my-3">

                        <Link to='/cart'>
                            <p>{cartItems[id]} in cart!</p>
                        </Link>

                    </div>
				)}
			</div>
		</div>
	);
}

export default ProductDetails;
