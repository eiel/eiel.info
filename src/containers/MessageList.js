import { connect } from 'react-redux'
import MessageList from '../MessageList'

const mapStateToProps = (state, props) => {
    console.log(state);
    console.log(state.messages);
    return { messages: state.messages }
};

export default connect(mapStateToProps)(MessageList)
