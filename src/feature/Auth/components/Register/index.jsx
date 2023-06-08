/** @format */

import React from "react";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      //auto set username = email
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar("Register successfully!!!📣 ", { variant: "success" });
    } catch (error) {
      console.log("Failed to register: ", error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
