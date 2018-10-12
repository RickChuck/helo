import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Auth extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            passsword:''
        };
    }


    
    render(){ 
        return(
            <div className='Login'>
               <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="username" bsSize='large'>
                 <ControlLabel>Username</ControlLabel>
                 <FormControl autoFocus type='username' value={this.state.email} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup controlId='password' bsSize='large'>
                 <ControlLabel>Password</ControlLabel>
                 <FormControl value={this.state.passsword} onChange={this.handleChange} type='password' />
                </FormGroup>
                <button block bsSize='large'>Login</button>

               </form>
            </div>
        )
    }
}
export default Auth