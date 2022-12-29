export const checkForm = (formData) => {
    const key = Object.keys(formData);

    for (const idx in key){
        if(formData[key[idx]] === ''){
            switch(key[idx]){
                case 'username':
                    return {errorType: 'username', error: true, errorMsg: 'Wprowadź nazwę użytkownika'}
                case 'email':
                    return {errorType: 'email', error: true, errorMsg: 'Wprowadź adres email'}
                case 'password':
                    return {errorType: 'password', error: true, errorMsg: 'Wprowadź hasło'}
                case 'confirmPassword':
                    return {errorType: 'confirmPassword', error: true, errorMsg: 'Wprowadź hasło'}
                default:
                    break;
            }
        }
    }

    return null;
}