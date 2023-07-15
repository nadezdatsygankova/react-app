

function Button({ children, size, ...rest }) {

  return (
    <div>
      <button  {...rest} className = {(size==='lg')?'button-large':'button-small'}>
        {children}
      </button>
    </div>
  );
}

export default Button;
