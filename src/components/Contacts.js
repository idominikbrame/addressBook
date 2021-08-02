import React from "react"
import User from "./User";

function ContactList(props) {
    return (
        <ul>
            {props.state.users.map(user => {
                return (
                    <li>
                        <User key={props.key} name={user.name} picture={user.picture} phone={user.phone} email={user.email} birthday={user.birthday}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ContactList