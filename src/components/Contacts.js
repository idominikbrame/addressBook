import React from "react"
import UserData from "./User";

function ContactList(props) {
    return (
        <ul>
            {props.state.users.map((user) => {
                return (
                    <li>
                        <UserData key={props.key} name={user.name} picture={user.picture} phone={user.phone} email={user.email}/>
                    </li>
                )
            })}
        </ul>
    )
}

export default ContactList