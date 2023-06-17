import './Home.css';
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className='home-container'>
      <h1>FRESH GROCERIES AWAIT</h1>
<h2>hey therer</h2>
<h3>gsdg</h3>
      <div className='home-btns'>
        <button className="nav-items-list">
          <Link to="/delivery">GET STARTED</Link>
        </button>
      </div>
    </div>
  )
}

export default Home