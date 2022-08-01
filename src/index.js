import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  Stage,
  Layer,
  Text,
  Rect,
  Group,
  Circle,
  Path,
  Arc,
  Line,
} from "react-konva";

const App = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(50);
  const [radius, setRadius] = useState(30);
  const handelIncWidth = () => {
    setWidth(width + 15);
  };
  const handelDecWidth = () => {
    setWidth(width - 15);
  };
  const handelIncHeight = () => {
    setHeight(height + 15);
  };
  const handelDecHeight = () => {
    setHeight(height - 15);
  };
  const handelIncRadius = () => {
    setRadius(radius + 5);
  };
  const handelDecRadius = () => {
    setRadius(radius - 5);
  };

  return (
    <>
      <div>
        <label>width : </label>
        <button onClick={handelIncWidth}>+</button>
        <button onClick={handelDecWidth}>-</button>
      </div>
      <div>
        <label>height : </label>
        <button onClick={handelIncHeight}>+ </button>
        <button onClick={handelDecHeight}>-</button>
      </div>
      <div>
        <label>circle radius : </label>
        <button onClick={handelIncRadius}>+</button>
        <button onClick={handelDecRadius}>-</button>
      </div>
      <Stage width={700} height={700}>
        <Layer>
          <Group>
            <Rect
              x={20}
              y={100}
              width={width}
              height={height}
              fill={"#00D2FF"}
              stroke={"black"}
              strokeWidth={2}
              draggable
            />
            <Arc
              x={120}
              y={150}
              // radius={radius}
              angle={90}
              rotation={180}
              clockwise={false}
              outerRadius={0}
              innerRadius={radius}
              fill={"white"}
              stroke={"black"}
              strokeWidth={2}
            />
            <Line
              x={120}
              y={150}
              points={[120, 150, 120, 120, 90, 150]}
              stroke={"red"}
              bezier
              strokeWidth={3}
              draggable
            />
          </Group>
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
