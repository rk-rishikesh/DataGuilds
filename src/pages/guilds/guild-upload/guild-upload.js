import { useNavigate } from "react-router-dom";
import $ from "jquery";
import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./guild-upload.css";

function GuildUpload() {
  const navigate = useNavigate();
  $(function () {
    var container = $(".container"),
      inputFile = $("#file"),
      img,
      btn;

    if (!container.find("#upload").length) {
      container
        .find(".input")
        .append(
          '<input type="button" value="' + '" id="upload" class="button-test">'
        );
      btn = $("#upload");
      img = $("#uploadImg");
    }
    if (btn !== undefined) {
      btn.on("click", function () {
        img.animate({ opacity: 0 }, 300);
        inputFile.click();
      });
    }

    inputFile.on("change", function (e) {
      container
        .find("label")
        .html(inputFile.val().replace(/C:\\fakepath\\/i, ""));

      var i = 0;
      for (i; i < e.originalEvent.srcElement.files.length; i++) {
        var file = e.originalEvent.srcElement.files[i],
          reader = new FileReader();

        // reader.onloadend = function () {
        //   img.attr("src", reader.result).animate({ opacity: 1 }, 700);
        // };
        reader.readAsDataURL(file);
        // img.removeClass("hidden");
      }
    });
  });

  return (
    <div className="container" style={{ display: 'flex',justifyContent: 'center' }}>
      <Form
        style={{
          width: "650px",
          backgroundColor: "aliceblue",
          height:'auto'
        }}
      >
        <Card style={{ height: "auto" }}>
          <Card.Header>
            <Card.Img
              src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
              width="100%"
              height="200px"
            ></Card.Img>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div style={{ textAlign: "center" }}>
                <p>
                  <label id="img-data" htmlFor="input"></label>
                </p>
              </div>

              <div className="input col text-center">
                <input name="input" id="file" type="file" />
              </div>
            </div>
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
                style={{ height: "70px" }}
              />
              <br />
            </Form.Group>
            <div className="row">
              <div
                className="col"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                  style={{
                    backgroundColor: "#000",
                    border: "none",
                    color: "white",
                    width: "150px",
                    height: "56px",
                    fontSize: "18px",
                    textAlign: "center",
                    padding: "10px",
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
