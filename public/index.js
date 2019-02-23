class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      'total_amount' : 3200,
      'amount' : 100,
      'email' : ''
    }
  }

  async componentDidMount() {
    const result = await axios.get('/get_total_amount');
    this.setState({total_amount: result.data["0"].total_amount});
  }
  onSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/post_info', {
      amount : this.state.amount,
      email : this.state.email
    })
    console.log(response);
  }
  render() {
    return (
      <div>
        <h1>Crypodia Payment Gateway 1.0</h1>
        <div>
          <p>Total Money Amount is {this.state.total_amount}</p>
        </div>
        <form onSubmit={this.onSubmit}>
          <input placeholder="Amount" value = {this.state.amount}
            onChange = {event=> this.setState({amount : event.target.value})} />
          <input placeholder="Email" value = {this.state.email}
            onChange = {event=> this.setState({email : event.target.value})}/>
          <button type="submit" >Paticipate</button>
        </form>
      </div>
    )
  }
};

ReactDOM.render(
  <div>
    <App />
  </div>
  , document.getElementById('reactBinding')
);
