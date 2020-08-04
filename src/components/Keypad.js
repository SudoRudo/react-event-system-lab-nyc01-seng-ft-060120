<<<<<<< HEAD
import React from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
      </div>
    )
  }
}

export default Keypad;
=======
// Code Keypad Component Here
class Keypad extends React.Component{
  
  handleInputPassword = () => console.log('Entering password...')

  render(){
    
    return <input type="password"></input>
  }
}
>>>>>>> 471e2114a0e3f6fc0530014d622fab9bbda2ce29
