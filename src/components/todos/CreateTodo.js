import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
  	super()
  	this.state = {
    	text: '',
  	};

  }
	handleChange(ev){
		this.setState({
		    text: ev.target.value
		});
	}
	handleSubmit(event) {
	  event.preventDefault();
	  this.props.store.dispatch({
	    type: 'ADD_TODO',
	    todo: this.state
	  });
	}

  	render() {
	    return(
	      <div>
	        <form onSubmit={(event) => this.handleSubmit(event)}>
	          <p>
	            <label>add todo</label>
	            <input type="text" onChange={(event) => this.handleChange(event)}  />
	          </p>
	          <input type="submit" />
	        </form>
        	<p>{this.state.text}</p>
	      </div>
	    )
  	}
}

export default CreateTodo;
