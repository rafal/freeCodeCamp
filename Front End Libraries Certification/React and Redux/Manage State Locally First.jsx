class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({input: event.target.value})
  }
  submitMessage(){
    this.setState({messages: this.state.messages.concat(this.state.input), input: ''})
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} />
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map(msg => <li>{msg}</li>)}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};