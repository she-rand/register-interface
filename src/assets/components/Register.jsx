import Alert from "./Alert";
import Form from "./Form";
import SocialButton from "./SocialButton";
const Register = ({actionSubmit, actionName, actionEmail, actionPassword, actionConfirmation,mensaje,color}) => {
    return (
    <>       
    <div className="icons-style">
        <SocialButton icon="fa-brands fa-facebook"></SocialButton>
        <SocialButton icon="fa-brands fa-github"></SocialButton>
        <SocialButton icon="fa-brands fa-linkedin"></SocialButton>

        </div>  
       
        <Form actionSubmit={actionSubmit} actionName={actionName} actionEmail={actionEmail} actionPassword={actionPassword} actionConfirmation={actionConfirmation}></Form>
        <Alert mensaje={mensaje} color={color}></Alert>
    </>
    )
    };
    export default Register;