export function validater(data,checkData,errorString){
    
}
export const Passwordvalidater=(data,checkData,errorString)=>{
    const {password}=data
    if (!data.password) {
        return "Pls Provide Password";
    }else if (password.length <= 5) {
        return errorString.password;
    }{
        return data.password;
    }
    }

    export const Mobailevalidater=(data,checkData,errorString)=>{
        const {password}=data
    if (!data.password) {
        return "Pls Provide Password";
    }else if (password.length <= 9) {
        return errorString.password;
    }{
        return data.password;
    }
    }

