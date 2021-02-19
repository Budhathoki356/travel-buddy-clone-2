import React from 'react'

const Form = () => {
    return (
        <form className="form" >
            <div className="form__inner">
                <input type="text" name="" id="" placeholder="NAME" />
                <input type="email" name="" id="" placeholder="EMAIL" />
                <input type="tel" name="" id="" placeholder="PHONE" />
            </div>
            <button type="submit" className="btn-secondary">SIGN UP NOW</button>
        </form>
    )
}

export default Form
