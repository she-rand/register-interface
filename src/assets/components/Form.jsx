const Form = ({actionSubmit, actionName, actionEmail, actionPassword, actionConfirmation}) => {
    

   
    return (
    <> 
        <form onSubmit={actionSubmit} className="form-style">
           
             <input className="input-style m-1 p-1" onChange={actionName} id="nameid"  type="text" placeholder="Name"></input>
            <input className="input-style m-1 p-1" onChange={actionEmail} id="emailid"  type="text" placeholder="youremail@mail.com"></input>
            <input className="input-style m-1 p-1" onChange={actionPassword} id="passwordid"  type="password" placeholder="password"></input>
            <input className="input-style m-1 p-1" onChange={actionConfirmation} id="passconfirmationid"  type="password" placeholder="password confirmation"></input>
            <button  className="btn btn-dark mt-3 input-style" type="submit">Send</button>
        </form>  
    </>
    )
    };
    export default Form;