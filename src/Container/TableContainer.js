import {connect} from 'react-redux';
import Table from '../Component/Table';

const mapStateToProps = state => {
	return {list:state.list,ascending:state.ascending}
}

const TableContainer = connect(mapStateToProps)(Table);
export default TableContainer