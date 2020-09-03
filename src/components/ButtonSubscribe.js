import React, { Component } from 'react';

class ButtonSubscribe extends Component {
  
  render() {
      return (
       
      <button disabled={this.props.isDisabled} onClick={()=>{ alert('You have been subscribed.'); }} className="fadeIn fourth submit btn btn-primary btn-lg almostBlock">SUBSCRIBE</button>
    )
  }

}

export default ButtonSubscribe;
