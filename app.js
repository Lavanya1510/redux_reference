import React, { Component } from 'react'
import { loginAction } from '../../action/data_act';
import connect from 'react-redux'
export class app extends Component {
    onsubmit=()=>{
        this.props.loginAction({email,password})
        }
    render() {
        return (
            <div>
            <button onClick={this.onsubmit}>submit</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sales: state.name.alldata,
  })
  
  
  export default connect(mapStateToProps, {
    loginAction
  })(app)



