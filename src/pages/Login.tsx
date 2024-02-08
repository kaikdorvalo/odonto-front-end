import { useContext, useEffect, useState } from "react";
import { FormLogin } from "../components/components/form-login/form-login"
import { ValidateFields } from "../utils/validate-fields";
import { AuthContext } from "../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorMessages } from "../errors/messages/errorMessages";
import { AxiosError } from "axios";

export const Login = () => {
    const auth = useContext(AuthContext);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const validate = new ValidateFields();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.user) {
            navigate('/panel');
        }
    }, [auth.user])

    const handleEmailChange = (value: string) => {
        setEmailInput(value);
    }

    const handlePasswordChange = (value: string) => {
        setPasswordInput(value);
    }

    const handleLoginButton = async () => {
        try {
            if (validate.validateEmail(emailInput)) {
                await auth.signin(emailInput, passwordInput);
            } else {
                setErrorMessage(ErrorMessages.INCORRECT_EMAIL)
            }

        } catch(err: any) {
            switch (err.code) {
                case AxiosError.ERR_BAD_REQUEST:
                    setErrorMessage(ErrorMessages.INCORRECT_EMAIL_OR_PASSWORD);
                    break;
                default:
                    setErrorMessage(ErrorMessages.FAILED_TO_LOGIN);
            }
        }
    }
    
    return (
        <>
            <div className="w-screen h-svh flex flex-col bg-white dark font-poppins bg-cover justify-between
                lg:bg-login-bg lg:relative lg:h-screen
            ">
                <div className="h-3/4 px-6 w-full flex flex-col items-center bg-transparent justify-center
                    lg:w-1/2 lg:h-screen lg:absolute lg:right-0 lg:flex-row
                ">
                    <FormLogin
                        onEmailChange={handleEmailChange}
                        onPasswordChange={handlePasswordChange}
                        onLoginButtonClick={handleLoginButton}
                        errorMessage={errorMessage}    
                    ></FormLogin>
                </div>

                <div className="h-1/4 w-full bg-login-image-mobile bg-cover
                    lg:hidden
                "
                ></div>
            </div>
        </>
    )
}
