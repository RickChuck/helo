import React, {Component} from 'react';
import axios from 'axios'

class Auth extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            passsword:''
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick= e => {
        this.setState({
            
        })
    } 


    
    render(){ 
        return(
            <div className='Login'>
               <form onSubmit={this.handleSubmit}>
                
                 <h1>Username</h1>
                 <input autoFocus type='username' value={this.state.username} onChange={this.handleChange} />
                 <h1>Password</h1>
                 <input value={this.state.passsword} onChange={this.handleChange} type='password' />
                
                <button className='button' onClick={this.handleClick}>Login</button>

               </form>
            </div>
        )
    }
}
export default Auth