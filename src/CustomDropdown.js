import React, { Component } from 'react';
import './CustomDropdown.css';

class CustomDropdown extends Component{
    constructor(props) {
      super(props);
      this.buttonRef = React.createRef();
    }

    makeSelection = (e) => {
      e.persist();
      this.buttonRef.current.textContent = e.target.text;
    }

    renderDropdown = () => {
      return (
      <div className="dropdown">
        <button className="dropbtn" ref={this.buttonRef}>Custom Dropdown</button>
          <div className="dropdown-content" onClick={this.makeSelection}>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </div>
      </div>
      );
    }

    render(){
      return (
        <div className='custom-select'>
          { this.renderDropdown() }
        </div>
      )
    }
}

export default CustomDropdown;
