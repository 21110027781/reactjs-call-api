import React, { Component } from 'react';

class ProductItem extends Component {
	render() {
		var { product, index } = this.props;
		var statusName = product.state ? 'Còn hàng' : 'Hết hàng';
		var statusClass = product.state ? 'info' : 'warning';
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
						<button type="button" className="btn btn-success">Sửa</button>
						<button type="button" className="btn btn-danger">Xóa</button>
					</span>
				</td>
			</tr>
		);
	}
}

export default ProductItem;
