import { useId, useState } from "react"
import InputMask from 'react-input-mask';

export default function FormElement(props) {
  const elId= useId()

  const [error, setError] = useState(props.error)

  const changeHandler = (target) => {
    props.changeHandler(target)
  }

  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  const blurHandler = (target) => {
    if(props.required && target.value === '') {
        setError ({
          isValid: false,
          message: "This field is required"
        })
    } 
    if(props.type === 'email') {
      if(target.value !== '' && !isValidEmail(target.value)) {
        setError ({
          isValid: false,
          message: "Invalid email address"
        })
      }
    }
  }

  const focusHandler = (target) => {
    if(!error.isValid) {
      setError ({
        isValid: true,
        message: ""
      })
    }
  }

  return (
    <div>
      <label 
        htmlFor={elId}>{props.label}
      </label>
      {props.mask ? 
        <InputMask mask={props.mask} id={elId}  
        placeholder={props.placeholder}
        className={`input ${!error.isValid ? 'has-error' : ''}`} 
        name={props.name} 
        value={props.value} 
        onChange={(e) => changeHandler(e.target)}
        onBlur={(e) => blurHandler(e.target)}
        onFocus={(e) => focusHandler(e.target)}/> 
      : <input 
          id={elId} 
          type={props.type} 
          placeholder={props.placeholder}
          className={`input ${!error.isValid ? 'has-error' : ''}`} 
          name={props.name} 
          value={props.value} 
          onChange={(e) => changeHandler(e.target)}
          onBlur={(e) => blurHandler(e.target)}
          onFocus={(e) => focusHandler(e.target)}/>}  
      <div className="error-msg">{error.message}</div>
    </div>
  )
}