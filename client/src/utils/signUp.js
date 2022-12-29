import { checkForm } from "./checkForm";

export const signUp = async (formData, setIsError) => {
    try {
        const error = checkForm(formData);
        if(error){
            throw error;
        }
      

    } catch (error) {
        setIsError(error);
    }
}