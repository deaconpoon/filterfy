import Select from "react-select";

const Dropdown = ({ testid, options, ...rest }) => {
  return (
    <div data-testid={testid}>
      <Select {...rest} isClearable options={options}></Select>
    </div>
  );
};

export default Dropdown;
