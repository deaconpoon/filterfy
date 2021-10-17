import styled from "styled-components";

const Card = ({ resourceName, resourceDescription }) => {
  return (
    <>
      <div>
        <h4>{resourceName}</h4>
        <p>{resourceDescription}</p>
      </div>
    </>
  );
};

export default Card;
