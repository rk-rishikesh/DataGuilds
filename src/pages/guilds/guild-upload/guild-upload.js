import { useNavigate } from "react-router-dom";
import React from "react";
import { Card, Form } from "react-bootstrap";
import "./guild-upload.css";

function GuildUpload() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{height:'630px'}}>
      <Form style={{ width: "700px", margin: " 50px 0px 0px 390px" }}>
        <Card style={{ height: "520px" }}>
          <Card.Header
            style={{
              fontSize: "30px",
              fontFamily: "serif",
              backgroundColor: "#000",
              color: "white",
              textAlign: "center"
            }}
          >
            Guild Upload
          </Card.Header>
          <Card.Body>
            <Form.Group controlId="title">
              <Form.Control
                className="form-input-style"
                placeholder="Title"
                required
              />
              <br />
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Control
                className="form-input-style"
                placeholder="Description..."
                required
                as="textarea"
                rows={8}
              />
              <br />
            </Form.Group>
            <div className="row">
              <div
                className="col"
                style={{
                  width: "50%"
                }}
              >
                <div
                  style={{
                    width: "470px",
                    height: "50px",
                    fontSize: "18px",
                    backgroundColor: "lightgray",
                    borderRadius: "5px",
                    marginTop: "4px"
                  }}
                >
                  <input
                    type="file"
                    id="actual-btn"
                    style={{ margin: "10px 0px 0px 20px" }}
                  />
                </div>
              </div>
              <div className="col">
                <button
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                  style={{
                    margin: "0px 0px 0px 160px",
                    backgroundColor: "#000",
                    border: "none",
                    color: "white",
                    width: "150px",
                    height: "50px",
                    fontSize: "18px",
                    textAlign: "center",
                    padding: "10px"
                  }}
                >
                  DAO Dashboard
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Form>
    </div>
  );
}

export default GuildUpload;
