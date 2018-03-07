import React, { Component } from 'react';
// import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actUpdateProductRequest, actGetProductRequest } from './../../actions/index';
import { connect } from 'react-redux';



class ProductActionPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			txtName: '',
			txtPrice: '',
			chkbStatus: false,
			id: ''
		};
	}

	componentDidMount() {
		console.log('componentDidMount');
		var { match } = this.props;
		if (match) {
			var id = match.params.id;
			this.props.onEditProduct(id);
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps');
		if (nextProps && nextProps.itemEditing) {
			var { itemEditing } = nextProps;
			this.setState({
				txtName: itemEditing.name,
				txtPrice: itemEditing.price,
				chkbStatus: itemEditing.status,
				id: itemEditing.id
			})
		}
	}


	onChange = (e) => {
		var target = e.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		})
	}

	onSave = (e) => {
		e.preventDefault();
		var { txtName, txtPrice, chkbStatus, id } = this.state;
		var { history } = this.props;
		var product = {
			id: id,
			name: txtName,
			price: txtPrice,
			status: chkbStatus
		}
		if (id) {
			this.props.onUpdateProduct(product);
		} else {
			this.props.onAddProduct(product);	
		}
		history.goBack();
	}


	render() {
		// var products = [];
		var { txtName, txtPrice, chkbStatus } = this.state;
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<form onSubmit={this.onSave}>
					<div className="form-group">
						<label>Tên sản phẩm</label>
						<input
							type="text"
							className="form-control"
							name="txtName"
							value={txtName}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Giá</label>
						<input
							type="text"
							className="form-control"
							name="txtPrice"
							value={txtPrice}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Trạng thái</label>
						<div className="checkbox">
							<label>
								<input
									type="checkbox"
									name="chkbStatus"
									value={chkbStatus}
									onChange={this.onChange}
									checked={chkbStatus}
								/>
								Còn hàng
							</label>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to="/product-list" className="btn btn-info">Trở lại</Link>
				</form>

			</div>
		);
	}
}

//Chuyen data tren store thanh bien trong props
const mapStateToProps = (state) => {
	return {
		itemEditing: state.itemEditing
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddProduct: (product) => {
			dispatch(actAddProductRequest(product));
		},
		onUpdateProduct: (product) => {
			dispatch(actUpdateProductRequest(product));
		},
		onEditProduct: (id) => {
			dispatch(actGetProductRequest(id));
		}

	}
}


//ket noi len store
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
