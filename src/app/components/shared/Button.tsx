// 'use client'
// import React,{memo,ButtonHTMLAttributes, useMemo} from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
//     label :string,
//     onClick : ()=> void,
//     isLoading?: boolean,
//     className?: string,
//     variant : 'primary' | 'secondary' | 'danger',
// }
    
//     const buttonVariants = {
//         primary:'bg-blue-500 hover:bg-blue-600 text-white',
//         secondary:'bg-gray-500 hover:bg-gray-600 text-white',
//         danger : 'bg-red-500 hover:bg-red-600 text-white'
//     }
// const Button : React.FC<ButtonProps> = memo(({label,onClick,isLoading,className,variant, ...props})=>{
   

//      const buttonClasses  = useMemo(
//         () =>  `px-4 py-2 rounded focus:outline-none ${className} ${buttonVariants[variant]}`,
//         [variant,className]
//      )
//     return(
//         <button onClick={onClick} disabled={isLoading}  className={`${buttonClasses}`} {...props}>
//             {isLoading ? 'Loading...' : label}
//         </button>
//     )
//     },
//     (prevProps : ButtonProps, nextProps : ButtonProps) => (
//         prevProps.label === nextProps.label &&
//         prevProps.onClick === nextProps.onClick &&
//         prevProps.variant === nextProps.variant &&
//         prevProps.isLoading === nextProps.isLoading &&
//         prevProps.className === nextProps.className
//       )
// )
// export default Button

'use client'
import React, { memo, ButtonHTMLAttributes, useMemo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick: () => void;
    isLoading?: boolean;
    className?: string;
    variant: 'primary' | 'secondary' | 'danger';
}

const buttonVariants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
};

const Button: React.FC<ButtonProps> = memo(({ label, onClick, isLoading, className, variant, ...props }) => {
    const buttonClasses = useMemo(
        () => `px-4 py-2 rounded focus:outline-none ${className} ${buttonVariants[variant]}`,
        [variant, className]
    );

    return (
        <button onClick={onClick} disabled={isLoading} className={`${buttonClasses}`} {...props}>
            {isLoading ? 'Loading...' : label}
        </button>
    );
}, (prevProps: ButtonProps, nextProps: ButtonProps) => (
    prevProps.label === nextProps.label &&
    prevProps.onClick === nextProps.onClick &&
    prevProps.variant === nextProps.variant &&
    prevProps.isLoading === nextProps.isLoading &&
    prevProps.className === nextProps.className
));

// ✅ Adding displayName to fix the ESLint error
Button.displayName = "Button";

export default Button;
