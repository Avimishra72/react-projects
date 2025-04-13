import React, { useContext } from "react";
import { ComponentContext, NewCOntext } from "./App";

function ComponentD() {
  const context1 = useContext(ComponentContext);
  const context2 = useContext(NewCOntext);
  return (
    // <ComponentContext.Consumer>
    //   {(parentConsumer) => (
    //     <NewCOntext.Consumer>
    //       {(value) => (
    //         <>
    //           Hi, {parentConsumer} {value}
    //         </>
    //       )}
    //     </NewCOntext.Consumer>
    //   )}
    // </ComponentContext.Consumer>
    <>
      Hi {context1} {context2}
    </>
  );
}

export default ComponentD;
