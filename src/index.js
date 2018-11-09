import React from 'react';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';

function renderInputs(props) {
    const { meta: {error, touched} } = props.fieldInput;
    const showError = touched ? error : '';
    if (props.fieldInput.type === 'textarea') {
        return (
            <div>
                <label>{props.fieldInput.label}</label>
                <textarea
                {...props.fieldInput.input}
                > </textarea>
                <span className="errorFormat">
                    {showError}
                </span>
            </div>
        )
    }
    if (props.fieldInput.type === 'select') {
        if( props.fieldInput.multipleAttr ) {
            return (
                <div>
                    <label>{props.fieldInput.label}</label>
                    <Select2 
                    multiple
                    defaultValue={props.fieldInput.defaultValue}
                    className="form-control"
                    data={props.fieldInput.data}
                    options={{
                        placeholder: props.fieldInput.placeholder
                    }}
                    {...props.fieldInput.input}
                    />
                    <span className="errorFormat">
                        {showError}
                    </span>
                </div>
            )
        }
        
        return (
            <div>
                <label>{props.fieldInput.label}</label>
                <Select2
                className="form-control"
                data={props.fieldInput.data}
                onChange={props.fieldInput.onChange}
                defaultValue={props.fieldInput.defaultVal}
                options={{
                    placeholder: props.fieldInput.placeholder
                }}
                {...props.fieldInput.input}
                />
                <span className="errorFormat">
                    {showError}
                </span>
            </div>
        )
    }

    if (props.fieldInput.kind === 'checkbox') {
        return(
            <div>
                <label>{props.fieldInput.label}</label>
                <input
                name={props.fieldInput.name}
                type={props.fieldInput.kind}
                className={props.fieldInput.className}
                placeholder={props.fieldInput.placeholder}
                onChange={props.fieldInput.onChange}
                checked={props.fieldInput.checked}
                {...props.fieldInput.input}
                />
                <span className="errorFormat">
                    {showError}
                </span>
            </div>
        )
    }
    return(
        <div>
            <label>{props.fieldInput.label}</label>
            <input
            name={props.fieldInput.name}
            type={props.fieldInput.kind}
            className={props.fieldInput.className}
            placeholder={props.fieldInput.placeholder}
            onChange={props.fieldInput.onChange}
            {...props.fieldInput.input}
            />
            <span className="errorFormat">
                {showError}
            </span>
        </div>
    )

}
const RenderField = (props) => {
    const { fieldInput } = props;
    return (
        <div>
            {renderInputs(props)}
        </div> 
    )
    
}

export default RenderField;