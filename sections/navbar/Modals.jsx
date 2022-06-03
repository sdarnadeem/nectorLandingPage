import React, { useState } from "react";
import { Button, Modal, Footer, Header } from "react-bootstrap";

import c from "./Modals.module.css";

const Modals = (props) => {
  // const [show, setShow] = useState(false);
  const show = props.show;

  const handleClose = () => props.setShow(false);

  return (
    <div>
      {/* <div>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </div> */}

      <Modal
        className="p-0 m-0"
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className={c.close}>
          <div onClick={handleClose} className={c.btn}></div>
        </div>
        <Modal.Body className="p-0 m-0">
          <div
            className="p-0 m-0"
            style={{
              backgroundImage: `url("/images/modalBG.jpeg")`,
              backgroundSize: "cover",
              height: "30rem",
              opacity: "50%",
              position: "relative",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              justifyItems: "center",
              verticalAlign: "middle",
              display: "flex",
            }}
          >
            <div style={{}}>
              <h2 className="p-2 m-2">
                Enjoy a{" "}
                <span
                  style={{
                    color: "#5c61cc",
                  }}
                  className=""
                >
                  <strong>Free Trial</strong>
                </span>{" "}
                on Us
              </h2>
              <h5
                className="p-2 m-2"
                style={{
                  color: "#5c61cc",
                }}
              >
                Take control of your love life
              </h5>
              <img className="p-2 m-2" src="/images/apple.png" />
              <img className="p-2 m-2" src="/images/play.png" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// render(<Modals />);
export default Modals;
