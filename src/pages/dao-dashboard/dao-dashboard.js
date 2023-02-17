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
      status: "Pending",
    },
    {
      id: 4,
      uri: "uri 4",
      status: "Accept",
    },
  ];

  const updateStatus=()=>{
    alert("called")
  }

  return (
    <>
      <div className="dashboard-data">
        <table>
          <thead>
            <tr>
              <th>Token_ID</th>
              <th>Token_URI</th>
              <th>Praposal_Status</th>
              <th>Action</th>
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
                      {data.status === "Accept" && (
                        <img
                          src="https://t3.ftcdn.net/jpg/01/57/86/44/360_F_157864480_TFm1nQsUI1o8VLKg6SK6yV9P6tsK4TXN.jpg"
                          width="50"
                          onClick={updateStatus}
                        />
                      )}
                      {data.status === "Reject" && (
                        <img
                          src="https://img.freepik.com/premium-vector/red-cross-mark-icon-negative-choice-symbol-sign-app-button_744955-339.jpg?w=360"
                          width="35"
                          onClick={updateStatus}
                        />
                      )}
                      {data.status === "Pending" && (
                        <>
                          <img
                            src="https://t3.ftcdn.net/jpg/01/57/86/44/360_F_157864480_TFm1nQsUI1o8VLKg6SK6yV9P6tsK4TXN.jpg"
                            width="50"
                            onClick={updateStatus}
                          />
                          <img
                            src="https://img.freepik.com/premium-vector/red-cross-mark-icon-negative-choice-symbol-sign-app-button_744955-339.jpg?w=360"
                            width="35"
                            onClick={updateStatus}
                          />
                        </>
                      )}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
