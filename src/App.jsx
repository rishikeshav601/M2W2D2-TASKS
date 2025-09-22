import React, { useState } from "react";

// 1. Simple counter
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

// 2. Toggle text
function ToggleText() {
  const [isOn, setIsOn] = useState(false);
  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
}

// 3. Change background color
function BgColorChanger() {
  const colors = ["red", "green", "blue", "orange", "purple"];
  const [color, setColor] = useState("white");

  const changeColor = () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setColor(random);
  };

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <button onClick={changeColor}>Change Background</button>
    </div>
  );
}

// 4. Controlled input field
function ControlledInput() {
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
    </div>
  );
}

// 5. Password toggle
function PasswordToggle() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <input type={show ? "text" : "password"} placeholder="Password" />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

// 6. Update multiple states
function MultiForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>
        {name} - {email}
      </p>
    </div>
  );
}

// 7. Array state update
function TodoList() {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState("");

  const addItem = () => {
    if (task.trim()) {
      setItems([...items, task]);
      setTask("");
    }
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

// 8. Remove item from state
function RemovableList() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          {item} <button onClick={() => removeItem(idx)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

// 9. Update object state
function UserProfile() {
  const [user, setUser] = useState({ name: "Keshav", age: 25 });

  return (
    <div>
      <p>
        {user.name} - {user.age}
      </p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

// 10. Character counter
function CharCounter() {
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Character count: {text.length}</p>
    </div>
  );
}

// 11. Dynamic styling
function DynamicStyling() {
  const [color, setColor] = useState("black");
  return (
    <div>
      <p style={{ color }}>This is dynamic text</p>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

// 12. Like button
function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}

// 13. Random number generator
function RandomNumber() {
  const [num, setNum] = useState(null);
  return (
    <div>
      <button onClick={() => setNum(Math.floor(Math.random() * 100))}>
        Generate
      </button>
      {num !== null && <p>Random: {num}</p>}
    </div>
  );
}

// 14. Show/hide element
function ShowHideImage() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Image
      </button>
      {show && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s"/>}
    </div>
  );
}

// 15. Multiple counters
function CounterBox() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ margin: "10px" }}>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
function MultiCounters() {
  return (
    <div>
      <CounterBox />
      <CounterBox />
      <CounterBox />
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Beginner Tasks (State Practice)</h1>

      <h2>1. Simple counter</h2>
      <Counter />

      <h2>2. Toggle text</h2>
      <ToggleText />

      <h2>3. Change background color</h2>
      <BgColorChanger />

      <h2>4. Controlled input field</h2>
      <ControlledInput />

      <h2>5. Password toggle</h2>
      <PasswordToggle />

      <h2>6. Update multiple states</h2>
      <MultiForm />

      <h2>7. Array state update</h2>
      <TodoList />

      <h2>8. Remove item from state</h2>
      <RemovableList />

      <h2>9. Update object state</h2>
      <UserProfile />

      <h2>10. Character counter</h2>
      <CharCounter />

      <h2>11. Dynamic styling</h2>
      <DynamicStyling />

      <h2>12. Like button</h2>
      <LikeButton />

      <h2>13. Random number generator</h2>
      <RandomNumber />

      <h2>14. Show/hide element</h2>
      <ShowHideImage />

      <h2>15. Multiple counters</h2>
      <MultiCounters />
    </div>
  );
}

export default App;
