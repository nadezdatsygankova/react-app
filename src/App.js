
import './App.css';
import Button from './component/Button';
import { FcGoogle } from 'react-icons/fc';
import Avatar from './component/Avatar'

function App() {
  return (
    <main>
      <Button variant = "warning" size="lg" className="green" onClick={() => console.log("Logging in...")}>
        <FcGoogle />
        Log in with Google ...
      </Button>
      <Avatar src="../public/bob.jpg" alt="Bob Ziroll" />
      <br />
      <Avatar className="avatar-letters">BZ</Avatar>
      <br />
      <Avatar />
    </main>
  );
}

export default App;
