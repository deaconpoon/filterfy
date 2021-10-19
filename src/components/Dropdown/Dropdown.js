import Select from "react-select";

const Dropdown = ({ options, ...rest }) => {
  return (
    <>
      <Select {...rest} isClearable options={options}></Select>
    </>
  );
};

export default Dropdown;
