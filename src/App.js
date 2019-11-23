import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      l:"",
      w:""
    };
    // this is the nasty way to change the class
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let change = e.target.value;
    if (e.target.name==="slipLength")this.setState({ l:change });
    if (e.target.name==="slipWidth")this.setState({ w:change });
  }
  

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
<form onSubmit="{handleSubmit}">
<label>
  <span>Port</span>
  <input
    name="text"
    placeholder="Add To Do List Item"
    onChange={this.handleChange}
  />
</label>
<label>
  <span>Length {this.state.l}</span>
  <input type="range" min="1" max="50" name="slipLength" onChange={this.handleChange} />
</label>
<label>
  <span>Width {this.state.w}</span>
  <input type="range" min="1" max="50" name="slipWidth" onChange={this.handleChange} />
</label>
<label>
  <span>Vessel Type</span>
  <p>a<input type="radio" name="a" onChange={this.handleChange} />
    b<input type="radio" name="b" onChange={this.handleChange} />
    c<input type="radio" name="c" onChange={this.handleChange} /></p>
</label>
<label>
  <span>Date</span>
  <input type="date" name="due" onChange={this.handleChange} />
</label>
<button>Search</button>
</form>
    );
  }
}
function App() {

  return (
    <>

      <div className="hero">
        <section className="header">
          <h1>Boats 'n Moor!</h1>
          <p>Helping find moor(age) for boats and boats to moor.</p>
        </section>
      </div>

      <section className="searchBox">
        <h3>Find a Slip</h3>
        <Form/>
      </section>

    </>
  );
}

export default App;
