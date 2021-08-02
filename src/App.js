import {Component} from "react"
import axios from "axios";
import Contacts from "./components/Contacts";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api?results=25')
            .then(res => {
                const users = res.data.results;
                this.setState({users})
            })
    }





    render(){
        return (
            <div className="App">
                <Contacts  state={this.state}/>
            </div>
        )
    }
}

    export default App;
