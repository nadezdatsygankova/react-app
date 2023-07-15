

function Button({ children, size, className, ...rest }) {

  return (
    <div>
      <button  {...rest} className = {`${className} ${(size==='lg')?'button-large':'button-small'}`}>
        {children}
      </button>
    </div>
  );
}

export default Button;
