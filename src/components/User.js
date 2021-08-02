import React from "react"

function UserData(props) {
    const [visible, setVisible] = React.useState(true)

    return (
        <div>
            <h4>{props.name.first}, {props.name.last}</h4>
            <img alt={props.name.last} src={props.picture.thumbnail}/>
            <br></br>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Hide Details' : 'Show Details'}
            </button>

            {!visible &&
                <div>
                    <p>Chicken</p>
                </div>
            }
        </div>
    )
}

export default UserData
