import Alert from "./Alert";
import Form from "./Form";
import SocialButton from "./SocialButton";
const Register = ({actionSubmit, actionName, actionEmail, actionPassword, actionConfirmation,mensaje,color}) => {
    return (
    <>       
        <div className="icons-style m-2">
            <SocialButton className="m-1" icon="fa-brands fa-facebook"></SocialButton>
            <SocialButton className="m-1" icon="fa-brands fa-github"></SocialButton>
            <SocialButton className="m-1" icon="fa-brands fa-linkedin"></SocialButton>

        </div>  
       <p>Or Sign in with you email</p>
        <Form className="m-2" actionSubmit={actionSubmit} actionName={actionName} actionEmail={actionEmail} actionPassword={actionPassword} actionConfirmation={actionConfirmation}></Form>
        <Alert className="alert-style" mensaje={mensaje} color={color}></Alert>
    </>
    )
    };
    export default Register;