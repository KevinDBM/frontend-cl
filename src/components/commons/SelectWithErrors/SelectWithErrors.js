import React from 'react';
import {Field} from 'formik';

const InputWithErrors = (props) => {
    return (
        <div className="form-group">
            <Field as="select" className="custom-select" name={props.name}>
                <option defaultValue value={props.noSelectedValue}>
                    {props.label}
                </option>
                {
                    props.options.map(option => 
                        <option value={option[props.keyValue]}>
                            {option[props.keyLabel]}
                        </option>
                    )
                }
            </Field>
            {props.errors[props.name] && (
                <small className="text-danger">
                    {props.errors[props.name]}
                </small>
            )}            
        </div>
    )
}

export default InputWithErrors;