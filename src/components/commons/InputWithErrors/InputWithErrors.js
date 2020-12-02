import React from 'react';
import {Field} from 'formik';

const InputWithErrors = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <Field {...props} type={props.type || 'text'} className={`form-control ${props.errors[props.name] && 'is-invalid'}`} name={props.name} id={props.id} aria-describedby="emailHelp" placeholder={props.label}/>
            {props.errors[props.name] && (
                <small className="text-danger">
                    {props.errors[props.name]}
                </small>
            )}
            
        </div>
    )
}

export default InputWithErrors;