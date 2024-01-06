import React, { useState } from "react";

const Memo = () => {
  const [text, setText] = useState("");
  const [skill, setSkill] = useState([]);

  function print(e) {
    e.preventDefault();
    setSkill([...skill, text]);
    setText("");
  }

  return (
    <div>
      <h1>React.memo</h1>
      <form onSubmit={print}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">Add Skill</button>
      </form>
      <ul>
        {skill.map((currentSkill) => <li>{currentSkill}</li>)}
      </ul>
    </div>
  );
}

export default Memo;
