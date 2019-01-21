import React, { Component } from 'react';
import './CustomDropdown.css';

class CustomDropdown extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		document.querySelector('select').addEventListener('change', this.overrideClick);
		document.querySelector('select').addEventListener('mouseover', this.displayOptions);
	}
	
	overrideClick = (e) =>{
		console.log(e);
		e.preventDefault();
	}
	displayOptions = (e) =>{
		document.querySelector('select').click();
		console.log(document.querySelector('select'));
	}

	renderDropdown = () => {
		return (
		<select>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
		</select>
		);
	}

	render(){
		return (
			<div className='custom-select' style={{width: '200px'}}>
			{ this.renderDropdown() }
			</div>
			)
	}
}

export default CustomDropdown;