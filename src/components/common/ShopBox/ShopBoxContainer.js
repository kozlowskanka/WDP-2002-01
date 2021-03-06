import { connect } from 'react-redux';
import ShopBox from './ShopBox';
import { getAllToCompare } from '../../../redux/compareRedux';
import { getAll, addProduct, removeProduct } from '../../../redux/cartRedux';
import { getInputValue } from '../../../redux/inputRedux';
import { getCurrency } from '../../../redux/currencyRedux';
import { getRates, getStatus } from '../../../redux/currencyRatesRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
  cartContent: getAll(state),
  value: getInputValue(state),
  getCurrency: getCurrency(state),
  getRates: getRates(state),
  getStatus: getStatus(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addToCart: payload => dispatch(addProduct(payload)),
  removeFromCart: id => dispatch(removeProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopBox);
