import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

	onDelete = (id) => {
		if(confirm('Bạn có muốn xóa không?')){ // eslint-disable-line
			this.props.onDelete(id);
		}
	}
	render() {
		var { product, index } = this.props;
		var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
		var statusClass = product.status ? 'info' : 'warning';
		return (
			<tr>
				<td>{index + 1}</td>
				<td>{product.id}</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>
					<span className={`label label-${statusClass}`}>{statusName}</span>
				</td>
				<td>
					<span className="input-group-btn">
						<Link 
							to={`/product/${product.id}/edit`}
							type="button" 
							className="btn btn-success"

						>Sửa</Link>
						<button 
							type="button" 
							className="btn btn-danger"
							onClick={() => this.onDelete(product.id)}
						>Xóa</button>
					</span>
				</td>
			</tr>
		);
	}
}

export default ProductItem;
