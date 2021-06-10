import { TextField } from "@material-ui/core";

const InputText = (error, helperText, fieldData, label, className) => {
  return (
    <TextField
      error={error}
      helperText={helperText}
      {...fieldData}
      label={label}
      id="outlined-basic"
      variant="outlined"
      className={className}
    />
  );
};

export default InputText;
