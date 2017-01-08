import { connect } from 'react-redux'
import MessageList from '../MessageList'

const mapStateToProps = (state, props) => {
    console.log('map');
    console.log(state);
    console.log(props);
    return { messages: state.messages }

};

export default connect(mapStateToProps)(MessageList)
