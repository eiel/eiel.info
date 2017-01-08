import { connect } from 'react-redux'
import MessageList from '../MessageList'

const mapStateToProps = (state, props) => {
    return { messages: state.messages }
};

export default connect(mapStateToProps)(MessageList)
