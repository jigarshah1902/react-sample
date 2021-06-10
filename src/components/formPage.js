import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useStyles } from "../styles/mystyles";

const FormPage = () => {
  const { handleSubmit, control, getValues } = useForm();
  const onSubmit = (data) => {
    if (data) {
      Object.entries(data).map((data) =>
        console.log("key " + data[0] + " " + "values " + data[1])
      );
    }
  };

  const classes = useStyles();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const [errorState, setErrorState] = useState({
    firstname: {
      error: false,
      hpT: "",
    },
    lastname: {
      error: false,
      hpT: "",
    },
    email: {
      error: false,
      hpT: "",
    },
    password: {
      error: false,
      hpT: "",
    },
    confirm: {
      error: false,
      hpT: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes.root}
      className="formBox"
    >
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{
          validate: () => {
            if (getValues("firstName").length > 1) {
              setIsButtonDisabled(false);
              setErrorState({
                ...errorState,
                firstname: { error: false, hpT: "" },
              });
              return true;
            } else {
              setErrorState({
                ...errorState,
                firstname: { error: true, hpT: "firstname is required" },
              });
              setIsButtonDisabled(true);
              return false;
            }
          },
        }}
        render={({ field }) => (
          <TextField
            error={errorState.firstname.error}
            helperText={errorState.firstname.hpT}
            {...field}
            label="First name"
            id="outlined-basic"
            variant="outlined"
            className={classes.test}
          />
        )}
      />
      <Controller
        name="lastname"
        control={control}
        defaultValue=""
        rules={{
          validate: () => {
            if (getValues("lastname").length > 1) {
              setIsButtonDisabled(false);
              setErrorState({
                ...errorState,
                lastname: { error: false, hpT: "" },
              });
              return true;
            } else {
              setErrorState({
                ...errorState,
                lastname: { error: true, hpT: "lastname is required" },
              });
              setIsButtonDisabled(true);
              return false;
            }
          },
        }}
        render={({ field }) => (
          <TextField
            error={errorState.lastname.error}
            helperText={errorState.lastname.hpT}
            {...field}
            label="Last name"
            id="outlined-basic"
            variant="outlined"
            className={classes.test}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          validate: () => {
            {
              if (getValues("email").match(mailformat)) {
                setIsButtonDisabled(false);
                setErrorState({
                  ...errorState,
                  email: { error: false, hpT: "" },
                });
                return true;
              } else {
                setErrorState({
                  ...errorState,
                  email: { error: true, hpT: "lastname is required" },
                });
                setIsButtonDisabled(true);
                return false;
              }
            }
          },
        }}
        render={({ field }) => (
          <TextField
            error={errorState.email.error}
            helperText={errorState.email.hpT}
            {...field}
            label="Email"
            id="outlined-basic"
            variant="outlined"
            className={classes.test}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          validate: () => {
            let pV = getValues("password");

            if (pV?.length < 8) {
              setErrorState({
                ...errorState,
                password: {
                  error: true,
                  hpT: "must be more than 8 characters",
                },
              });
              setIsButtonDisabled(true);

              return false;
            } else {
              setErrorState({
                ...errorState,
                password: { error: false, hpT: "" },
              });
              setIsButtonDisabled(false);
              return true;
            }
          },
        }}
        render={({ field }) => (
          <TextField
            error={errorState.password.error}
            helperText={errorState.password.hpT}
            type="password"
            {...field}
            label="Password"
            id="outlined-basic"
            variant="outlined"
            className={classes.test}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        rules={{
          validate: () => {
            let pV = getValues("password");
            let pCV = getValues("confirmPassword");
            if (pV === pCV) {
              setIsButtonDisabled(false);
              setErrorState({
                ...errorState,
                confirm: { error: false, hpT: "" },
              });
              return true;
            } else if (pCV == "" || pCV == undefined) {
              setErrorState({
                ...errorState,
                confirm: {
                  error: true,
                  hpT: "confirm is empty",
                },
              });
              setIsButtonDisabled(true);
              return false;
            } else {
              setErrorState({
                ...errorState,
                confirm: {
                  error: true,
                  hpT: "password do not match",
                },
              });
              setIsButtonDisabled(true);
              return false;
            }
          },
        }}
        render={({ field }) => (
          <TextField
            error={errorState.confirm.error}
            helperText={errorState.confirm.hpT}
            type="password"
            {...field}
            label="Confirm password"
            id="outlined-basic"
            variant="outlined"
            className={classes.test}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isButtonDisabled}
      >
        Submit
      </Button>
    </form>
  );
};

export default FormPage;
