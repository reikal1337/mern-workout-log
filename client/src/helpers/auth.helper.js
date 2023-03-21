
const aZ09 = "Use only letters and numbers for username!"
const tooLong = 

export const validateUsernameInput = (username) => {
    if(!/^[A-Za-z0-9]*$/.test(username)){
        return aZ09
    }
    return ""
}

export const validateUsername = (username) => {
    validateUsernameInput(username) === "" ? "" : aZ09
    username.leng 
}