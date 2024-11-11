import React, { ChangeEvent, InputHTMLAttributes, memo, useMemo } from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholer:string,
    label:string,
    onchange:(e:ChangeEvent<HTMLInputElement>)=>void,
    value:any,
    className: string,
    type:string,
    required: boolean,
    isLoading: boolean,

}

const Input :React.FC<InputProps> =memo( ({placeholer,onchange,value,className,type,required,label,isLoading,...props}) => {
    const inputClasses = useMemo(
        () => `px-4 py-2 border rounded focus:outline-none ${isLoading ? 'bg-gray-300' : 'bg-white'} ${className}`,
        [isLoading,className]
        )
    return (
        <div className={inputClasses}>
            <label htmlFor={props.id || label}>
                </label> 
 <input  
      id={props.id}  
      value={value}
      placeholder={placeholer}
      onChange={onchange}
      type={type} 
      required={required}
        disabled={isLoading}
      {...props}
      />
        </div>
     
    )
  },
  (prevProps : InputProps, nextProps : InputProps) => (
    prevProps.placeholder === nextProps.placeholder &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.value === nextProps.value &&
    prevProps.type === nextProps.type &&
    prevProps.className === nextProps.className
  )
)
 

export default Input