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
  Shape,
} from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [radius, setRadius] = useState(0);
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
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
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
      <Stage
        width={700}
        height={700}
        onMouseMove={handleMouseMove}
        onMouseOut={handelMouseOut}
      >
        <Layer>
          <Text text={text} x={50} y={550} fontSize={20} />
          <Circle x={100} y={50} fill={"red"} radius={radius + 20} draggable />

          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(70 + width - radius, 40 + height);
              context.lineTo(0, 40 + height);
              context.lineTo(0, 0);
              context.lineTo(90 + width, 0);
              context.lineTo(90 + width, 20 + height - radius);
              context.quadraticCurveTo(
                70 + width - radius,
                20 + height - radius,
                70 + width - radius,
                40 + height
              );
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={2}
            draggable
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
