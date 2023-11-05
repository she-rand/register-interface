const Form = ({actionSubmit, actionName, actionEmail, actionPassword, actionConfirmation}) => {
    

   
    return (
    <> 
        <form onSubmit={actionSubmit} className="form-style">
           
             <input className="input-style" onChange={actionName} id="nameid"  type="text" placeholder="Name"></input>
            <input className="input-style" onChange={actionEmail} id="emailid"  type="text" placeholder="youremail@mail.com"></input>
            <input className="input-style" onChange={actionPassword} id="passwordid"  type="password" placeholder="password"></input>
            <input className="input-style" onChange={actionConfirmation} id="passconfirmationid"  type="password" placeholder="password confirmation"></input>
            <button  className="btn btn-dark mt-3 input-style" type="submit">Enviar</button>
        </form>  
    </>
    )
    };
    export default Form;