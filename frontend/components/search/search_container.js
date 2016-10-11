import { connect } from 'react-redux';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
});

const SearchContainer = {};
export default SearchContainer;
