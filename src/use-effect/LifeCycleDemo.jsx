import { useEffect } from "react";
import React from "react";

const LifeCycleDemo = () => {
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log("render!");

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log("unmounting...");
  });

  return "I'm a lifecycle demo";
};

export default LifeCycleDemo;
