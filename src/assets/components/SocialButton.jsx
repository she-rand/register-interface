import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({icon}) => {
    return (
    <> 
      <FontAwesomeIcon className='m-2 p-3 rounded-circle border border-2 border-dark' icon={icon} />

    </>
    )
    };
    export default SocialButton;