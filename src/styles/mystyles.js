import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    ".MuiFormControl-root .MuiTextField-root": {
      width: "15rem",
      marginTop: "1rem",
    },
  },
  ".MuiOutlinedInput-input": {
    width: "15rem",
    marginTop: "1rem",
  },
  test: {
    width: "70%",
    maxWidth: "20rem",
    margin: ".3rem",
  },
}));
