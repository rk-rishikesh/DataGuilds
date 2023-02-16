import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./guilds-list.css";

function GuildsList() {
  const navigate = useNavigate();
  const guildsList = [
    {
      imageName: "Guild 1",
      src: "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/6essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg",
      info: {
        guildName: "Dummy Guild Name 1",
        guildDescription: "Dummy Guild Description 1",
      },
    },
    {
      imageName: "Guild 2",
      src: "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/12essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg",
      info: {
        guildName: "Dummy Guild Name 2",
        guildDescription: "Dummy Guild Description 2",
      },
    },
    {
      imageName: "Guild 3",
      src: "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/10essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg",
      info: {
        guildName: "Dummy Guild Name 3",
        guildDescription: "Dummy Guild Description 3",
      },
    },
    {
      imageName: "Guild 4",
      src: "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/11essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg",

      info: {
        guildName: "Dummy Guild Name 4",
        guildDescription: "Dummy Guild Description 4",
      },
    },
    {
      imageName: "Guild 5",
      src: "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/7essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg",
      info: {
        guildName: "Dummy Guild Name 5",
        guildDescription: "Dummy Guild Description 5",
      },
    },
    {
      imageName: "Guild 6",
      src: "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/1essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg",

      info: {
        guildName: "Dummy Guild Name 6",
        guildDescription: "Dummy Guild Description 6",
      },
    },
  ];
  return (
    <div className="list-section">
      <div>
        <h2 className="label">Gallery</h2>
        <p style={{ textAlign: "center", color: "#8d8d8d" }}>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis varius cursus.
          </em>
        </p>
      </div>
      <h2 style={{ margin: "0px 0px 30px 200px", color: "white" }}>
        Create yore own guild{" "}
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "200px" }}>
        <div className="guild-section">
          <div className="row">
            <div className="col">
              <Card.Img
                src="https://img.lovepik.com/element/40032/8218.png_300.png"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  margin: "30px 0px 0px 30px",
                }}
              />
            </div>
            <div className="col">
              {" "}
              <Card.Title
                style={{ margin: "10px 0px 0px 0px", color: "white" }}
              >
                <br />
                <strong>Create guilds</strong>
              </Card.Title>
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ margin: "0px 0px 30px 200px", color: "white" }}>
        All Guild Lists
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "200px" }}>
        {guildsList.map((image, i) => {
          return (
            <div
              key={i}
              className="guild-section"
              onClick={() => {
                navigate("/guilds-info", {
                  state: {
                    data: image.info,
                  },
                });
              }}
            >
              <div className="row">
                <div className="col">
                  <Card.Img
                    src={image.src}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "30px 0px 0px 30px",
                    }}
                  />
                </div>
                <div className="col">
                  {" "}
                  <Card.Title
                    style={{ margin: "20px 0px 0px 0px", color: "white" }}
                  >
                    <br />
                    <strong>{image.imageName}</strong>
                  </Card.Title>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GuildsList;
