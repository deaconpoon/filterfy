import styled from "styled-components";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { selectProgram } from "../../store/reducer/programReducer";

const Container = styled(motion.li)`
  width: 100%;
  background-color: #ffffff;
  display: inline-flex;
  flex-direction: column;
  border-radius: 1em;
  padding: 0.5em;
  margin-bottom: 0.5em;
  gap: 1em;
  box-shadow: 1px 2px 6px 0px rgba(99, 99, 99, 0.527);
`;

const Card = ({ resourceName, key, id }) => {
  const dispatch = useDispatch();
  const handleSelectedProgram = (id) => {
    dispatch(selectProgram(id));
  };
  const spring = { type: "spring", bounce: 0.66 };
  return (
    <>
      <AnimatePresence>
        <Container
          onClick={() => handleSelectedProgram(id)}
          key={key}
          positionTransition={spring}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h4>{resourceName}</h4>
        </Container>
      </AnimatePresence>
    </>
  );
};

export default Card;
