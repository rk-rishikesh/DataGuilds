import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./guilds-info.css";

function GuildsInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="">
      <div className="info-section">
        <div className="">
          <img
            className="cover-img"
            src="https://www.ifyougiveablondeakitchen.com/wp-content/uploads/2018/06/triple-berry-pie-2020-3-769x1024.jpg"
            alt=""
          />
        </div>
        <div className="">
          <div style={{ margin: "200px 0px 0px 0px" }}>
            <h1 className="guild-title">
              {location.state !== null
                ? location.state.data.guildName
                : "Dummy Text Name"}
            </h1>
            <p className="guild-description">
              {location.state !== null
                ? location.state.data.guildDescription
                : "Dummy Description"}{" "}
              <br />
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis tortor eget sodales ultrices. Pellentesque
              bibendum condimentum neque, nec iaculis augue ultrices ac. Fusce
              interdum viverra aliquet.
            </p>
            <Button
              style={{
                border: "none",
                borderRadius: "0px",
                margin: "30px 200px 0px 10px",
              }}
            >
              Join
            </Button>
            <Button
              style={{
                border: "none",
                borderRadius: "0px",
                margin: "30px 0px 0px 115px",
              }}
              onClick={() => {
                navigate("/guilds-nft-list");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuildsInfo;
