import React, { Component } from 'react';

class ProductActionPage extends Component {

	render() {
		// var products = [];
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<form>
					<div className="form-group">
						<label>Tên sản phẩm</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group">
						<label>Giá</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group">
						<label>Trạng thái</label>
						<div className="checkbox">
							<label>
								<input type="checkbox" value="" />
								Còn hàng
							</label>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>

			</div>
		);
	}
}

export default ProductActionPage;
