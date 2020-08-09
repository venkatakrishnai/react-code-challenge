import React, { forwardRef, useState, useEffect } from "react";
import classNames from "classnames";
import { textInputProps } from "./util";
import Label from "../Label/Index";

const Index = forwardRef(
  (
    {
      labelText,
      id,
      placeholder,
      type,
      onChange,
      onClick,
      onBlur,
      name,
      value,
      ...other
    },
    ref
  ) => {
    const textInputClasses = "";
    const sharedTextInputProps = {
      id,
      value,
      name,
      onChange: evt => {
        if (onChange) {
          onChange(evt.target.value);
        }
      },
      placeholder,
      type,
      ref,
      className:
        "form-control rounded d-block w-100 border border-light1 bg-white",
      ...other
    };

    const label = labelText ? <Label text={labelText} /> : null;

    const input = <input {...sharedTextInputProps} style={{ height: "8vh" }} />;

    return (
      <>
        {label}
        <div className="relative rounded mt-1 w-100">{input}</div>
      </>
    );
  }
);

Index.defaultProps = {
  disabled: false,
  type: "text",
  onChange: () => {},
  onClick: () => {},
  value: ""
};

export default Index;
