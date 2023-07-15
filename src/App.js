
import './App.css';
import Button from './component/Button';
import { FcGoogle } from 'react-icons/fc';

function App() {
  return (
    <main>
      <Button size="lg" style={{color: "green"}} onClick={() => console.log("Logging in...")}>
        <FcGoogle />

        Log in with Google ...
      </Button>

    </main>
  );
}

export default App;
