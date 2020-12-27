import React, { Component } from 'react'
import UserItem from "./UserItem"

class Users extends Component {
    state = {
        users: [
            {
                id: "1",
                login: "Hüseyin Yildirim",
                avatar_url: "https://avatars1.githubusercontent.com/u/54432776?s=460&u=5c9e15225f4d36d4cd2fb844dc5045b14d8b5642&v=4",
                html_url: "https://github.com/berkayyildirim"
            },
            {
                id: "2",
                login: "Berkay Yildirim",
                avatar_url: "https://avatars1.githubusercontent.com/u/54432776?s=460&u=5c9e15225f4d36d4cd2fb844dc5045b14d8b5642&v=4",
                html_url: "https://github.com/berkayyildirim"
            },
            {
                id: "3",
                login: "Hüseyin Berkay Yildirim",
                avatar_url: "https://avatars1.githubusercontent.com/u/54432776?s=460&u=5c9e15225f4d36d4cd2fb844dc5045b14d8b5642&v=4",
                html_url: "https://github.com/berkayyildirim"
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const userStyle= {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}
export default Users
