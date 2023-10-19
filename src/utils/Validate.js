export const FormValidation = (email , password)=>{
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassport = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!validEmail){
        return 'You entered invalid email !'
    }
    if(!validPassport){
        return 'You entered invalid password !'
    }
    return 'Good to go'
}
