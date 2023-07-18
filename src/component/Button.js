//library for sum classes
import classnames from "classnames"

function Button({ children, size, className,variant, ...rest }) {
  let sizeClass = size ? `button-${size}`: ""
  let variantClass = variant ? `button-${variant}`:"";

  const allClasses = classnames(sizeClass, className,variantClass)



  return (
    <div>
      <button  {...rest}
      //my solution without library
      // className = {`${className} ${(size==='lg')?'button-large':'button-small'}`}
      className = {allClasses}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
