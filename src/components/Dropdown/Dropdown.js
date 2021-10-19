import Select from "react-select";

const Dropdown = ({ options, ...rest }) => {
  /*   const handleOnChange = (value) => {
    console.log(value);
  }; */
  return (
    <>
      <Select {...rest} isClearable options={options}></Select>
    </>
  );
};

export default Dropdown;
