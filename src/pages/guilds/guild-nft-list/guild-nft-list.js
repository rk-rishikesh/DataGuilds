import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./guild-nft-list.css";

function GuildNftList() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{height:'720px'}}>
        <Card
          style={{
            backgroundColor: "white",
            width: "70%",
            height: "500px",
            margin: " 50px 0px 0px 240px"
          }}
        >
          <div className="row">
            <div className="col">
              <img
                width="60px"
                height="40px"
                src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/Layer-816.png"
                alt="Layer-816"
                style={{ margin: "20px 0px 0px 500px" }}
              />
            </div>
            <div className="col">
              <Button
                style={{
                  backgroundColor: "#000",
                  border: "none",
                  borderRadius: "0px",
                  margin: "0px 20px 0px 800px",
                  width: "100px"
                }}
                onClick={() => {
                  navigate("/guilds-upload");
                }}
              >
                Upload
              </Button>
            </div>
          </div>

          <Card.Title style={{ textAlign: "center" }}>
            Guilds NFT Lists
          </Card.Title>
          <hr />
          <div className="container">
            <div
              className="row"
              style={{ textAlign: "center", marginTop: "" }}
            >
              <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
              <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
              <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
            </div>
            <div
              className="row"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
                <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
              <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
              <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
            
            </div>
            <div
              className="row"
              style={{ textAlign: "center", marginTop: "30px" }}
            >
               <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
              <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
              <div className="col"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100px"/></div>
            
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default GuildNftList;
