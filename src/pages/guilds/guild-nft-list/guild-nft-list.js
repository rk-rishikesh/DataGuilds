import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./guild-nft-list.css";

function GuildNftList() {
  const navigate = useNavigate();
  const artImage = [
    {
      imageName: "Brendon Cremer",
      description:
        "Having won the Nature’s Best African Wildlife Photographer of the Year 2017, it is only fitting to pay tribute to Brendon Cremer. Technically, every image is on point, but they also tell a story. Perhaps this is what is most captivating about this born and raised Zimbabwean (who now resides in South Africa).",
      price: "1245",
     src:"https://t4.ftcdn.net/jpg/05/52/20/61/360_F_552206181_KdToyQFo2ZSqBTv2aBiMUJcDVPXaaE3p.jpg"
    },
    {
      imageName: "Brendon Cremer",
      description:
        "Having won the Nature’s Best African Wildlife Photographer of the Year 2017, it is only fitting to pay tribute to Brendon Cremer. Technically, every image is on point, but they also tell a story. Perhaps this is what is most captivating about this born and raised Zimbabwean (who now resides in South Africa).",
      price: "1245",
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjZxiBXilrYnqWygFM6g_T6AA9Aoi7fhBdg&usqp=CAU'
    },
    {
      imageName: "Brendon Cremer",
      description:
        "Having won the Nature’s Best African Wildlife Photographer of the Year 2017, it is only fitting to pay tribute to Brendon Cremer. Technically, every image is on point, but they also tell a story. Perhaps this is what is most captivating about this born and raised Zimbabwean (who now resides in South Africa).",
      price: "1245",
      src: "https://content.wepik.com/statics/11164705/preview-page0.jpg",
    },
    {
      imageName: "Brendon Cremer",
      description:
        "Having won the Nature’s Best African Wildlife Photographer of the Year 2017, it is only fitting to pay tribute to Brendon Cremer. Technically, every image is on point, but they also tell a story. Perhaps this is what is most captivating about this born and raised Zimbabwean (who now resides in South Africa).",
      price: "1245",
      src: "https://www.fabmood.com/wp-content/uploads/2022/01/brown-aesthetic-wallpaper-6.jpg"
    },
  ];
  return (
    <div style={{ backgroundColor: "white", width: "100%",marginTop:'20px' }}>
      <div>
        <h3
          className="heading"
          style={{ fontSize: "40px", fontFamily: "serif",textAlign:'center' }}
        >
          Guild NFT List
        </h3>
        <hr />
        <Button style={{
                        width: "100px",
                        height: "40px",
                        textAlign: "center",
                        borderRadius: "0",
                        backgroundColor: "black",
                        border: "none",
                        margin:'0px 0px 20px 1300px'
                      }} onClick={() => {
                        navigate("/guilds-upload");
                      }}>Upload</Button>
      </div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {artImage.map((image) => {
          return (
            <div className="col" style={{ maxWidth: "560px" }}>
              <Card style={{ width: "" }}>
                <Card.Body>
                  <Card.Img
                    src={image.src}
                    style={{
                      width: "500px",
                      height: "170px",
                    }}
                  />
                  <Card.Title>
                    <br />
                    <strong>{image.imageName}</strong>
                  </Card.Title>
                  <p>{image.description}</p>
                </Card.Body>
                <Card.Footer>
                  <span>
                    <Button
                      style={{
                        width: "100px",
                        height: "40px",
                        textAlign: "center",
                        borderRadius: "0",
                        backgroundColor: "black",
                        border: "none",
                        margin:'0px 0px 0px 280px'
                      }}
                    >
                      Buy 1
                    </Button>
                    <Button style={{
                        width: "100px",
                        height: "40px",
                        textAlign: "center",
                        borderRadius: "0",
                        backgroundColor: "black",
                        border: "none",
                        margin:'0px 0px 0px 20px'
                      }}>Buy 2</Button>
                  </span>
                </Card.Footer>
              </Card>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GuildNftList;
