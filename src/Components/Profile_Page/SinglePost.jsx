import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

function SinglePost(props) {
  return (
    <>
      <Col md={4} className="mb-4" style={{ position: "relative" }}>
        <Post src={props.post.image} />
        <Overlay />
      </Col>
    </>
  );
}
const Post = styled.img`
  width: 100%;
  height: 300px;
  max-height: 300px;
  object-fit: cover;
  overflow: hidden;
`;

const Overlay = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 221;
  background-color: red;
  display: none;
`;
export default SinglePost;
