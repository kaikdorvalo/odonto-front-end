import { ButtonLogin } from "./button-login"
import { Input } from "./input-login"

interface props {
    onEmailChange: (value: string) => void
    onPasswordChange: (value: string) => void
    onLoginButtonClick: () => void
    errorMessage: string;
}

export const FormLogin = (props: props) => {
    return (
        <div className="w-full p-6 text-black flex flex-col items-center bg-transparent backdrop-blur-lg backdrop-filter
            lg:w-1/2 lg:justify-center md:w-96
        ">
            <h1 className="text-4xl font-medium pb-8">Sign In</h1>
            <div className="w-full flex flex-col gap-5">
                <Input type="email" id="email" label="Email" onInputChange={props.onEmailChange}></Input>
                <Input type="password" id="password" label="Password" onInputChange={props.onPasswordChange}></Input>
                <ButtonLogin text="Log in" onButtonLoginClick={props.onLoginButtonClick}></ButtonLogin>
                <span className="text-sm text-error text-center">{props.errorMessage}</span>
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full flex items-center gap-3">
                        <div className="border-b border-black w-full"></div>
                        <button className="w-full whitespace-nowrap outline-none">Create an account</button>
                        <div className="border-b border-black w-full"></div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="text-zinc-600 underline outline-none">Forgot password?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}