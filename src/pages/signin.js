import Header from "../components/Header.js";
import Signin from "../components/signin.js";

export default function SigninPage(){
    return(
        <>
             <Header
                title="Retail AR"
                heading="Sign in to your account, to access dashboard"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/"
                />

            <Signin/>
        </>
    )
}