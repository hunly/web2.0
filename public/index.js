class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      'total_amount' : 3200
    }
  }
  render() {
    return (
      <div>
        <h1>LOTTERY APPLICATION WEB 2.0</h1>
        <div>
          <p>Total Lottery Amount is {this.state.total_amount}</p>
        </div>
        <form>
          <input placeholder="amount"/>
          <input placeholder="email"/>
          <button>Paticipate</button>
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
