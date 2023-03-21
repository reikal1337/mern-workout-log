
export const validateUsernameInput = (username) => {
    if(!/^[A-Za-z0-9]*$/.test(username)){
        return "Use only letters and numbers for username!"
    }
    return ""
}

export const validateUsername = (username) => {
    if(validateUsernameInput(username) !== ""){
        return validateUsernameInput(username)
    }else if(username.length < 6){
        return "Username can't be shorter then 6 char!"
    }
    else if(username.length > 15){
        return "Username can't be longer then 15 char!"
    }else{
        return ""
    }
}