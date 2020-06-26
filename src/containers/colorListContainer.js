import React, { Component } from 'react'
import ColorList from '../components/ColorList'
import { connect } from 'react-redux'

class colorListContainer extends Component {


    handleChange = (e) => {
        this.props.input: e.target.value
    }


    render() {
        return (
            <div>
                <ColorList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    input: state.colorList.input
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(colorListContainer)