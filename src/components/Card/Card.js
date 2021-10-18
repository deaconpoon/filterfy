import styled from "styled-components";

const Container = styled.li`
  display: inline-flex;
  flex-direction: column;
  border-radius: 1em;
  padding: 0.5em;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  :hover {
    cursor: pointer;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.05),
      0 6.7px 5.3px rgba(0, 0, 0, 0.078), 0 12.5px 10px rgba(0, 0, 0, 0.12),
      0 22.3px 17.9px rgba(0, 0, 0, 0.082), 0 41.8px 33.4px rgba(0, 0, 0, 0.096),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
`;

const Card = ({ resourceName }) => {
  return (
    <>
      <Container>
        <h4>{resourceName}</h4>
        {/*   <p>{resourceDescription}</p> */}
      </Container>
    </>
  );
};

export default Card;
