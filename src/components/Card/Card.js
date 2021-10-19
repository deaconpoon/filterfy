import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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

const Card = ({ resourceName }) => {
  const spring = { type: "spring", bounce: 0.8 };
  return (
    <>
      <AnimatePresence>
        <Container
          transition={spring}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
        >
          <h4>{resourceName}</h4>
        </Container>
      </AnimatePresence>
    </>
  );
};

export default Card;
