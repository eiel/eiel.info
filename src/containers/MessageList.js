import { connect } from 'react-redux'
import MessageList from '../MessageList'

const mapStateToProps = ({ messages, time }, props) => {
    return { messages, time }
};

export default connect(mapStateToProps)(MessageList)
