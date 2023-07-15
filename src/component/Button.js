//library for sum classes
import classnames from "classnames"

function Button({ children, size, className, ...rest }) {
  let sizeClass = size ? `button-${size}`: ""
  const allClasses = classnames(sizeClass, className)

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
