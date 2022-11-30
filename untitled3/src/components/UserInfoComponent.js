import React, {useState, useEffect} from "react";

function UserInfoComponent() {
    const [userInfo, setUserInfo] = useState({
        name: "Janusz",
        surname: "Lisiak"
    });

    useEffect(() => {
        setUserInfo(prev => {
            return {
                ...prev,
                name: "Mateusz"
            }
        })
    }, [])

    return(
        <>
            <p>
                Imię: {userInfo.name} <br/>
                Nazwisko: {userInfo.surname}
            </p>
        </>
    )
}

export default UserInfoComponent;