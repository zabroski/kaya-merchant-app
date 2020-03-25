import React from 'react'

function DashboardPage(props) {
    const { user } = props
    return(
        <h1>{user.name &&  `Welcome back ${user.name}`}</h1>
    )

}

export default DashboardPage;