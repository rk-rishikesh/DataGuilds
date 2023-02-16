import { Button, Card } from "react-bootstrap";
import "./dao-dashboard.css";

function Dashboard() {
  const dashboardData = [
    {
      id: 1,
      uri: "uri 1",
      status: "Accept",
    },
    {
      id: 2,
      uri: "uri 2",
      status: "Reject",
    },
    {
      id: 3,
      uri: "uri 3",
      status: "Reject",
    },
    {
      id: 4,
      uri: "uri 4",
      status: "Accept",
    },
  ];
  return (
    <>
      <div className="dashboard-data">
        <h2 style={{ margin: "0px 0px 20px 0px" }}>Dao Dashboard Table</h2>
        <p>This is dummy loreum text...........</p>
        <div className="row">
          <div className="col">
            <Card style={{ margin: "20px 0px 0px 130px" }}>
              <Card.Img
                src="https://www.shutterstock.com/image-vector/simple-infographic-line-chart-sky-260nw-534979027.jpg"
                width="300px"
                height="200px"
              />
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "580px", height: " 200px",margin:'19px 0px 0px 30px' }}>
              <Card.Title style={{padding:'20px',color:'blue'}}>Recent Updates</Card.Title>
              <Card.Text>count</Card.Text>
            </Card>
          </div>
        </div>

        <Card
          style={{
            width: "1250px",
            backgroundColor: "white",
            alignItems: "center",
            height: "250px",
            margin: "40px 0px 0px 130px",
          }}
        >
          <h2
            style={{
              margin: "20px 1000px 0px 0px",
              fontSize: "20px",
              color: "blue",
            }}
          >
            Recent Data
          </h2>
          <table style={{ width: "90%", margin: "20px 0px 0px 0px" }}>
            <thead>
              <tr>
                <th>Token_ID</th>
                <th>Token_URI</th>
                <th>Praposal_Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.map((data, i) => {
                return (
                  <>
                    <tr>
                      <td key={i}>{data.id}</td>
                      <td>{data.uri}</td>
                      <td>{data.status}</td>
                      {/* <td>
                    <Button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        borderRadius: "0px",
                        fontSize: "10px",
                        margin: "0px 0px 0px 0px",
                        width: "80px",
                      }}
                    >
                      UpVote
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        borderRadius: "0px",
                        margin: "0px 0px 0px 0px",
                        fontSize: "10px",
                        width: "80px",
                      }}
                    >
                      DownVote
                    </Button>
                  </td> */}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
      {/* <table>
        <thead>
          <tr>
            <th>Token_ID</th>
            <th>Token_URI</th>
            <th>Praposal_Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dashboardData.map((data, i) => {
            return (
              <>
                <tr>
                  <td key={i}>{data.id}</td>
                  <td>{data.uri}</td>
                  <td>{data.status}</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        borderRadius: "0px",
                        fontSize: "10px",
                        margin: "0px 0px 0px 0px",
                        width: "80px",
                      }}
                    >
                      UpVote
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        borderRadius: "0px",
                        margin: "0px 0px 0px 0px",
                        fontSize: "10px",
                        width: "80px",
                      }}
                    >
                      DownVote
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table> */}
    </>
  );
}

export default Dashboard;
