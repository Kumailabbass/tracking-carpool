// import React, { ChangeEvent, InputHTMLAttributes, memo, useMemo } from 'react'
// interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
//     placeholer:string,
//     label:string,
//     onchange:(e:ChangeEvent<HTMLInputElement>)=>void,
//     value:any,
//     className: string,
//     type:string,
//     required: boolean,
//     isLoading: boolean,

// }

// const Input :React.FC<InputProps> =memo( ({placeholer,onchange,value,className,type,required,label,isLoading,...props}) => {
//     const inputClasses = useMemo(
//         () => `px-4 py-2 border rounded focus:outline-none ${isLoading ? 'bg-gray-300' : 'bg-white'} ${className}`,
//         [isLoading,className]
//         )
//     return (
//         <div className={inputClasses}>
//             <label htmlFor={props.id || label}>
//                 </label> 
//  <input  
//       id={props.id}  
//       value={value}
//       placeholder={placeholer}
//       onChange={onchange}
//       type={type} 
//       required={required}
//         disabled={isLoading}
//       {...props}
//       />
//         </div>
     
//     )
//   },
//   (prevProps : InputProps, nextProps : InputProps) => (
//     prevProps.placeholder === nextProps.placeholder &&
//     prevProps.onChange === nextProps.onChange &&
//     prevProps.value === nextProps.value &&
//     prevProps.type === nextProps.type &&
//     prevProps.className === nextProps.className
//   )
// )
 

// export default Input

import React, { ChangeEvent, InputHTMLAttributes, memo, useMemo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string; // 🛠 Fixed typo (`placeholer` → `placeholder`)
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void; // 🛠 Fixed typo (`onchange` → `onChange`)
    value: string | number | undefined; // ✅ Replaced `any` with `string | number | undefined`
    className?: string; // ✅ Made optional
    type?: string; // ✅ Made optional (defaults to 'text' if not provided)
    required?: boolean; // ✅ Made optional
    isLoading?: boolean; // ✅ Made optional
}

const Input: React.FC<InputProps> = memo(
    ({ placeholder, onChange, value, className = '', type = 'text', required = false, label, isLoading = false, ...props }) => {
        const inputClasses = useMemo(
            () => `px-4 py-2 border rounded focus:outline-none ${isLoading ? 'bg-gray-300' : 'bg-white'} ${className}`,
            [isLoading, className]
        );

        return (
            <div>
                <label htmlFor={props.id || label} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <input
                    id={props.id || label}
                    value={value}
                    placeholder={placeholder} // ✅ Fixed typo
                    onChange={onChange} // ✅ Fixed typo
                    type={type}
                    required={required}
                    disabled={isLoading}
                    className={inputClasses} // ✅ Applied `className` correctly
                    {...props}
                />
            </div>
        );
    },
    (prevProps: InputProps, nextProps: InputProps) =>
        prevProps.placeholder === nextProps.placeholder &&
        prevProps.onChange === nextProps.onChange &&
        prevProps.value === nextProps.value &&
        prevProps.type === nextProps.type &&
        prevProps.className === nextProps.className
);

// ✅ Added displayName to fix ESLint error
Input.displayName = "Input";

export default Input;
