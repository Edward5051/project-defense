import Header from "../admindashboard/Header";
import Signup from "../components/signup";

export default function SignupPage(){
    return(
        <>
            <Header
              title="Retail AR"
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Signin"
              linkUrl="/signin"
            />
            <Signup/>
        </>
    )
}