import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <h1 className="title">Creds Guilds </h1>
        <p className="description">
          The latest edition of the ETHIndia Online Series, ETHForAll is here!
          With this event, we’re shining the spotlight on leveraging crypto
          protocols to solve for the greater good.
          <br /> One which creates for a more positive sum future by solving for
          the most pertinent issues in our society.
        </p>
        <span>
          <Button style={{margin:'30px 0px 0px 570px'}}>
            Create Guilds 
          </Button>&nbsp;
          <Button
          style={{margin:'30px 0px 0px 40px'}}
            onClick={() => {
              navigate("/guilds-list");
            }}
          >
            Explore Guilds
          </Button>
        </span>
      </div>
    </>
  );
}

export default Home;
