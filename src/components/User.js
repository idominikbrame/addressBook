import React from "react"

function UserData(props) {
    const [visible, setVisible] = React.useState(true)

    return (
        <div>
            <h3>{props.name.last}, {props.name.first}</h3>
            <img alt={props.name.last} src={props.picture.thumbnail}/>
            <br></br>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Hide Details' : 'Show Details'}
            </button>

            {!visible &&
                <div>
                    <p>{props.email}</p>
                    <p>{props.phone}</p>
                </div>
            }
        </div>
    )
}

export default UserData
