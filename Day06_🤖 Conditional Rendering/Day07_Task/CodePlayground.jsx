import React, { useState } from "react";

const ideas = [
  {
    title: "Shayari",
    code: `lines.map(line => "🎤 " + line)`,
    output: [
      "🎤 Code likhta hoon",
      "🎤 map() se pyaar karta hoon",
      "🎤 Bugs ka ilaj sirf map()"
    ]
  },
  {
    title: "Poop Scale",
    code: `[1,2,3].map(lvl => "💩".repeat(lvl))`,
    output: ["💩", "💩💩", "💩💩💩"]
  },
  {
    title: "Monkey Typing",
    code: `"React".split("").map(l => "🙈 " + l)`,
    output: ["🙈 R", "🙈 e", "🙈 a", "🙈 c", "🙈 t"]
  }
];

export default function CodePlayground() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="playground">
      <h2>{ideas[selected].title}</h2>
      <pre>{ideas[selected].code}</pre>
      <div className="output">
        {ideas[selected].output.map((o, i) => (
          <p key={i}>{o}</p>
        ))}
      </div>
      <button onClick={() => setSelected((prev) => (prev + 1) % ideas.length)}>
        🔁 Next
      </button>
    </div>
  );
}
