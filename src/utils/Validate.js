export const FormValidation = (email , password , username)=>{
    const validName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(username)
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassport = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!validEmail){
        return 'You entered invalid email !'
    }
    if(!validPassport){
        return 'You entered invalid password !'
    }
    if(!validName){
        return 'You entered invalid name !'
    }
    return 'You really have a nice name👌'
}
