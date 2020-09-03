import React, { Component } from "react";


class NewsHandleChange extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isChecked: false
    };
  }

  handleChange(e) {
    const target = e.target;
    const status = e.target;
    this.setState({
      isChecked: target.checked
    });
    this.props.manageCheckboxes(this.props.id, status);
  }

  render() {

    return (
      <tr id={this.props.id}>
       
        <td className="bgImage">&nbsp;</td>
        <td className="data"><h5>{this.props.title}</h5>{this.props.desc}</td>
        <td className="input">
        
          <input
            className="myinput large custom"
            type="checkbox"
            checked={this.props.checkedArray.includes(this.props.id)}
            onChange={this.handleChange}            
            />
          
        </td>
      </tr>
    );
  }
}

export default NewsHandleChange;
