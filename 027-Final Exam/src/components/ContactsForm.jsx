import { useState } from "react"
import FormElement from "./FormElement"
import { toast } from 'react-toastify';


export default function ContactsForm() {

  const [values, setValue] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  })

  const [errors, setError] = useState({
    firstName: {
      isValid: true,
      message: ''
    },
    lastName: {
      isValid: true,
      message: ''
    },
    phone: {
      isValid: true,
      message: ''
    },
    email: {
      isValid: true,
      message: ''
    },
    message: {
      isValid: true,
      message: ''
    }
  })

  const changeHandler = (target) => {
    setValue({...values, [target.name]: target.value})
  }


  const submitHandler = (e) => {
    e.preventDefault()

    let isValid = true;

    if(values.firstName ==='') {
      setError({...errors,'name': {isValid: false, message: 'Enter your name'}})
      isValid = false
    } else {
      setError({...errors,'name': {isValid: true, message: ''}})
    }

    if(isValid) {

      const message = `
          <b>Name: </b>${values.firstName}\r\n
          <b>Last Name: </b>${values.lastName}\r\n
          <b>Email: </b> ${values.email}\r\n
          <b>Phone: </b> ${values.phone}\r\n
          <b>Message: </b> ${values.message}\r\n
      `;

      const url = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;


      fetch(url, {method: 'post'})
        .then(resp => resp.json())
        .then(resp => {
          if(resp.ok) {
            setValue({
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
              message: ''
            })
            toast.success('Your message successfuly sent')
          } else {
            toast.error('Some error occured')
          }
        })
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-top">
        <div className="item">
            <FormElement
            type='text'
            placeholder="First Name"
            label='First Name'
            name='firstName'
            value={values.firstName}
            error={errors.firstName}
            changeHandler={changeHandler}
            required={true}
            
          />
          <FormElement
            type='text'
            label='Last Name'
            name='lastName'
            placeholder="Last Name"
            value={values.lastName}
            error={errors.lastName}
            changeHandler={changeHandler}
            required={true}
          />
        </div>
        <div className="item">
        <FormElement
            type='email'
            label='Email'
            name='email'
            placeholder="Email Address"
            value={values.email}
            error={errors.email}
            changeHandler={changeHandler}
            required={true}
          />
            <FormElement
            type='text'
            label='Phone Number'
            name='phone'
            placeholder="Phone Number"
            value={values.phone}
            error={errors.phone}
            changeHandler={changeHandler}
            required={true}
            mask="+99 (999) 999 99 99"
          />
        </div>
      </div>
      <div className="form-top form-bottom">
        <div className="form-message">
          <FormElement
            type='text'
            label='Your Message'
            name='message'
            placeholder="Your Message"
            value={values.message}
            error={errors.message}
            changeHandler={changeHandler}
            
          />
        </div>
        <div className="block">
          <div className="top">
            <div className="text">Send Message</div>
            <div className="top__btn">
              <button type="submit">
                <svg width="22" height="21" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3125 0.187501L20.375 0.1875C20.6236 0.1875 20.8621 0.286272 21.0379 0.462087C21.2137 0.637903 21.3125 0.87636 21.3125 1.125V15.1875C21.3125 15.7053 20.8928 16.125 20.375 16.125C19.8572 16.125 19.4375 15.7053 19.4375 15.1875V3.38833L2.28791 20.5379C1.9218 20.904 1.3282 20.904 0.962087 20.5379C0.595971 20.1718 0.595971 19.5782 0.962087 19.2121L18.1117 2.0625L6.3125 2.0625C5.79473 2.0625 5.375 1.64277 5.375 1.125C5.375 0.607234 5.79473 0.187501 6.3125 0.187501Z" fill="white"/>
                  </svg>                  
              </button>
            </div>
          </div>
        </div>
      </div>

  </form>
  )
}