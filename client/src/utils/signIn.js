import { checkForm } from "./checkForm";

export const signIn = async (formData, setIsError) => {
    try {
        const formDataCopy = JSON.parse(JSON.stringify(formData));
        delete formDataCopy.email;
        delete formDataCopy.confirmPassword;

        const error = checkForm(formDataCopy);
        if(error){
            throw error;
        }
      

    } catch (error) {
        setIsError(error);
    }
}