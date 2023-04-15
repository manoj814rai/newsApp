import React, {useState} from 'react';

const useLogin = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);

    let isUsernameValid = false, isPasswordValid = false;
    if(username === "test"){
        isUsernameValid = true;
    }
    if(password === "123"){
        isPasswordValid = true;
    }
    return {
        username: {
            value: username,
            set: setUsername,
            valid: isUsernameValid
        },
        password: {
            value: password,
            set: setPassword,
            valid: isPasswordValid
        },
        submit: {
            value: submit,
            set: () => {
                setSubmit(true);
                if(isUsernameValid && isPasswordValid){
                    fetch('https://dummyjson.com/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({

                            username: username,
                            password: password,
                            // expiresInMins: 60, // optional
                        })
                    })
                        .then(res => res.json())
                        .then((json) => {
                            navigation.navigate("Home");
                        });
                }
            }
        }
    }

};

export {
    useLogin
}