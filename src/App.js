import {Component} from "react"
import axios from "axios";


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
                let contacts = res.data.results
                console.log(contacts)
            })
    }


    render(){
        return (
            <div className="App">

            </div>
        )
    }
}

    export default App;
