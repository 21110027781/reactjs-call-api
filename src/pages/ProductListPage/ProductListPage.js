import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';

class ProductListPage extends Component {

	showProducts = (products) => {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<ProductItem
						key={index}
						product={product}
						index={index}
					/>
				)
			})
		}
		return result;
	}
	render() {
		var { products } = this.props;
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<button type="button" className="btn btn-info m-b-10">Thêm sản phẩm</button>
				<ProductList>
					{this.showProducts(products)}
				</ProductList>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		products: state.products //tại sao là state.product , vào file index.js trong reducer coi

	}
}

export default connect(mapStateToProps, null)(ProductListPage);
