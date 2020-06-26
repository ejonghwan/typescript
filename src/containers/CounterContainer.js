import React, { Component } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux'
import {incrementAction, decrementAction} from '../reducer/modules/counter' 

class CounterContainer extends Component {
    render() {
        return (
            <div>
                <Counter 
                    number={this.props.number}
                    increment={this.props.increment}
                    decrement={this.props.decrement}
                    color={this.props.color}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    number: state.counter.number,
    color: state.counter.color,
})

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)