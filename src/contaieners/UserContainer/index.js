import {useEffect, useState} from "react";
import * as user from '../../services/user'

const UserContainer = (props) => {
    const [check, setCheck] = useState(true)

    useEffect(() => {
        user.getUser().then()
    }, [])

    return check ? props.children : null
}

export default UserContainer