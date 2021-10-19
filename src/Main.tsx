import { useState } from "react";
import { SayButton } from "react-say";
import "./index.css";

export const Main = () => {
  const [value, setValue] = useState("generator mowy");
  return (
    <div className="wrapper">
      <input value={value} onChange={({ target }) => setValue(target.value)} />
      <SayButton lang="pl-PL" speak={value}>
        generuj text
      </SayButton>
    </div>
  );
};
