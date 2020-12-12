const printErrorAlert = (generalContext,setGeneralContext,error) => {
    if(error.response){
        setGeneralContext({
            ...generalContext,
            showErrorToast:true,
            errorMessageToast : error.response.data.message
        })
        setTimeout(() => {
            setGeneralContext({
                ...generalContext,
                showErrorToast:false,
                errorMessageToast : ''
            })
        },5000)
    }
}

const printSingleErrorAlert = (generalContext,setGeneralContext,errorMessageToast) => {
    setGeneralContext({
        ...generalContext,
        showErrorToast:true,
        errorMessageToast
    })
    setTimeout(() => {
        setGeneralContext({
            ...generalContext,
            showErrorToast:false,
            errorMessageToast : ''
        })
    },5000)
}

const printSuccessAlert = (generalContext,setGeneralContext,response) => {
    setGeneralContext({
        ...generalContext,
        showSuccessToast:true,
        successMessageToast : response.data.message
    })
    setTimeout(() => {
        setGeneralContext({
            ...generalContext,
            showSuccessToast:false,
            successMessageToast : ''
        })
    },5000)
}

export {
    printErrorAlert,
    printSuccessAlert,
    printSingleErrorAlert
};