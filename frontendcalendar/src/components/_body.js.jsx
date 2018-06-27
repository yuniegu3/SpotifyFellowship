class Body extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
componentDidMount(){
    fetch('https://backendcalendar.herokuapp.com/api/v1/events')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ events: data }) });
  }
render(){
    return(
      <div>
        <NewEvent />
        <AllEvents events={this.state.events} />
      </div>
    )
  }
}
