import React, { Component } from 'react'
import ColorSquare from '../components/ColorSquare'
import { connect } from 'react-redux'
import { colorChangeAction } from '../reducer/modules/counter'


class colorSquareContainer extends Component {
    render() {
        const { colorChange, color, number } = this.props;
        console.log(color)
        return (
            <div>
                <ColorSquare number={number} selected={color} onSelect={colorChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    color: state.counter.color,
    number: state.counter.number,
})

const mapDispatchToProps = (dispatch) => ({
    colorChange: (color) => dispatch(colorChangeAction(color))
})




export default connect(mapStateToProps, mapDispatchToProps)(colorSquareContainer)