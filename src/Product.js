import React from "react";
import { Link } from "react-router-dom";

function Product({ id, name, image_url, price }) {
	return (
		<Link
			to={`/products/${id}`}
			style={{ color: "black", textDecoration: "none" }}
		>
			<div id={id} className='my-2 card'>
				<div className='card-body'>
					<h3>
						<strong>{name}</strong>
					</h3>
					<p>
						<b>Price:</b> {price}
					</p>
					<img className='img-fluid' src={image_url} />
				</div>
			</div>
		</Link>
	);
}

export default Product;
