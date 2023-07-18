import { IoPersonSharp } from "react-icons/io5"
import classnames from "classnames"

function Avatar({ children, src,alt, ...rest }) {

if (src) {
  return (
      <div className="avatar">
          <img src={src} alt={alt}/>
      </div>
  )
}
if (children) {
  return (
      <div className="avatar avatar-letters">
          {children}
      </div>
  )
}
else {
  return (
      <div className="avatar avatar-icon">
          <IoPersonSharp />
      </div>
  )
}
}

export default Avatar;