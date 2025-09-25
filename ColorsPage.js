import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const colorsData = [
  {
    name: "Red",
    hex: "#FF0000",
    objects: [
      { word: "Apple", image: "https://media.istockphoto.com/id/834816218/photo/red-apple-fruit-with-half-and-green-leaf-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=7MkXaN_Ulsf8IAG2hD6YnIxxGyLwcA00Cq0QMEZKjow=" },
      { word: "Tomato", image: "https://images.unsplash.com/photo-1640958904911-65668b264e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwdG9tYXRvfGVufDB8fDB8fHww" },
      { word: "Rose", image: "https://images.unsplash.com/photo-1660809412526-e012e51e2c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlZCUyMHJvc2V8ZW58MHx8MHx8fDA%3D" },
      { word: "Balloon", image: "https://media.istockphoto.com/id/171152221/photo/floating-shiny-red-balloons-with-red-string.webp?a=1&b=1&s=612x612&w=0&k=20&c=tbOE47dRRFEnrWWhKKVHztrVLUzFPVqEQq7f-CfAD8o=" },
    ],
  },
  {
    name: "Blue",
    hex: "#0000FF",
    objects: [
      { word: "Sky", image: "https://media.istockphoto.com/id/1325299873/photo/blue-sky-over-the-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=x-lp1qrccn5p-VWNSVVlc2ahi5v2frsYsyqxgLOWwTc=" },
      { word: "Butterfly", image: "https://media.istockphoto.com/id/1130502890/photo/tropical-blue-butterfly-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=hS3N5ezThU7R0wqn7qqYx1ziXVz9Tr5lAO-NXrjRZu8=" },
      { word: "Whale", image: "https://images.unsplash.com/photo-1698472505070-6d3b90afb530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hhbGV8ZW58MHx8MHx8fDA%3D" },
      { word: "Ball", image: "https://media.istockphoto.com/id/2227502276/photo/abstract-colorful-blue-balls-chaotic-scatter-spheres-festive-party-wallpaper-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=o_n61onkSSz_jlf_9bk7EeyBeKhlt4Grglo5tiR4sO0=" },
    ],
  },
  {
    name: "Green",
    hex: "#008000",
    objects: [
      { word: "Leaf", image: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVhZnxlbnwwfHwwfHx8MA%3D%3D" },
      { word: "Frog", image: "https://images.unsplash.com/photo-1515136462666-954e72276c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyb2d8ZW58MHx8MHx8fDA%3D" },
      { word: "Parrot", image: "https://plus.unsplash.com/premium_photo-1673454201378-3867e051dca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFycm90fGVufDB8fDB8fHww" },
      { word: "Grass", image: "https://images.unsplash.com/photo-1533460004989-cef01064af7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jhc3N8ZW58MHx8MHx8fDA%3D" },
    ],
  },
  {
    name: "Yellow",
    hex: "#FFFF00",
    objects: [
      { word: "Banana", image: "https://media.istockphoto.com/id/1291262112/photo/banana.webp?a=1&b=1&s=612x612&w=0&k=20&c=KSmjx5R8Qk4mzzGw8tAP3CAPoSH_zdXD7sZYd1lBuD4=" },
      { word: "Scissors", image: "https://media.istockphoto.com/id/1198483230/photo/scissor-barber-hair-3d-illustration-on-yellow-background-minimal-idea-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=R0AbBOTn21jJhn46MXNWkugNTMaHQbi65UQruvnndWc=" },
      { word: "Duck", image: "https://media.istockphoto.com/id/545255438/photo/smiling-rubber-duck.webp?a=1&b=1&s=612x612&w=0&k=20&c=30eVO-28j7M_xGgJx3AlA9WfsRcq2uraITHm_XXd4ms=" },
      { word: "Corn", image: "https://images.unsplash.com/photo-1578652903016-b78571b87410?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvcm58ZW58MHx8MHx8fDA%3D" },
    ],
  },
  {
    name: "Orange",
    hex: "#FFA500",
    objects: [
      { word: "Orange", image: "https://plus.unsplash.com/premium_photo-1670512181061-e24282f7ee78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlfGVufDB8fDB8fHww" },
      { word: "Carrot", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww" },
      { word: "Pumpkin", image: "https://images.unsplash.com/photo-1692680919402-95fc56f99225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVtcGtpbnxlbnwwfHwwfHx8MA%3D%3D" },
      { word: "Car", image: "https://media.istockphoto.com/id/483119307/photo/3d-orange-sedan-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=V02cjMA6prpIszMHspC9zk2RqaivMBRcIVyyydPOMiQ=" },
    ],
  },
  {
    name: "Pink",
    hex: "#FFC0CB",
    objects: [
      { word: "Flower", image: "https://images.unsplash.com/photo-1501686962565-1350ab98237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluayUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D" },
      { word: "Candy", image: "https://images.unsplash.com/photo-1523992038393-d5ab874a077e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluayUyMGNhbmR5fGVufDB8fDB8fHww" },
      { word: "Doll", image: "https://images.unsplash.com/photo-1730373217385-54b68f7d817a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGluayUyMGRvbGx8ZW58MHx8MHx8fDA%3D" },
      { word: "Ice Cream", image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluayUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww" },
    ],
  },
  {
    name: "Purple",
    hex: "#800080",
    objects: [
      { word: "Brinjal", image: "https://plus.unsplash.com/premium_photo-1661293854150-34b1a39aa46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVycGxlJTIwYnJpbmphbHxlbnwwfHwwfHx8MA%3D%3D" },
      { word: "Grapes", image: "https://images.unsplash.com/photo-1631299106224-aae61c217164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVycGxlJTIwZ3JhcGVzfGVufDB8fDB8fHww " },
      { word: "Candle", image: "https://media.istockphoto.com/id/1844455523/photo/purple-candles-with-background-bokeh.webp?a=1&b=1&s=612x612&w=0&k=20&c=CXYj9i-SXieMVAC_mM7UfAcLrZxcY12KB9-Qh-uoSR0=" },
      { word: "Toy", image: "https://plus.unsplash.com/premium_photo-1720525676483-eef667c388d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHB1cnBsZSUyMHRveXxlbnwwfHwwfHx8MA%3D%3D" },
    ],
  },
  {
    name: "Brown",
    hex: "#A52A2A",
    objects: [
      { word: "Bear", image: "https://plus.unsplash.com/premium_photo-1661849977833-c18cd1c7e295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { word: "Chocolate", image: "https://images.unsplash.com/photo-1623660053975-cf75a8be0908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY29sYXRlfGVufDB8fDB8fHww" },
      { word: "Coconut", image: "https://plus.unsplash.com/premium_photo-1675040830227-9f18e88fd1f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D" },
      { word: "Pot", image: "data:image/jpeg;base64,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" },
    ],
  },
  {
    name: "Black",
    hex: "#000000",
    objects: [
      { word: "Crow", image: "https://media.istockphoto.com/id/1068517448/photo/american-black-crow.webp?a=1&b=1&s=612x612&w=0&k=20&c=YzomHUHMOhBLya0odYmtM4YKOGJhFSRXdnO_YqLqMqg=" },
      { word: "Hat", image: "https://media.istockphoto.com/id/184967432/photo/black-fedora-hat-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=weQhjrXc843FXqOPqfVUh3Q4VtoE_YJ2eYCGLOwFnRA=" },
      { word: "Bag", image: "https://images.unsplash.com/photo-1622560481979-f5b0174242a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBiYWd8ZW58MHx8MHx8fDA%3D" },
      { word: "Umbrella", image: "https://media.istockphoto.com/id/1429028833/photo/black-umbrella-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=XP9aOV3ScNwaZif9w_EPMwP2Qrt_bHiBrvhDiAcPyEA=" },
    ],
  },
  {
    name: "White",
    hex: "#FFFFFF",
    objects: [
      { word: "Milk", image: "https://plus.unsplash.com/premium_photo-1694481100261-ab16523c4093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
      { word: "Egg", image: "https://images.unsplash.com/photo-1607690424560-35d967d6ad7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnfGVufDB8fDB8fHww" },
      { word: "Snow", image: "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D" },
      { word: "Cotton", image: "https://images.unsplash.com/photo-1616431101491-554c0932ea40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dG9ufGVufDB8fDB8fHww" },
    ],
  },
];

function ColorsPage() {
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  //const navigate = useNavigate();

  const selectedColor = selectedColorIndex !== null ? colorsData[selectedColorIndex] : null;

  const handlePrev = () => {
    if (selectedColorIndex > 0) setSelectedColorIndex(selectedColorIndex - 1);
  };

  const handleNext = () => {
    if (selectedColorIndex < colorsData.length - 1) setSelectedColorIndex(selectedColorIndex + 1);
  };

  const handleBack = () => {
    setSelectedColorIndex(null);
  };

  return (
    <div className="colors-container">
      {!selectedColor ? (
        <>
          <h1 className="page-title">Colors</h1>
          <div className="colors-grid">
            {colorsData.map((color, index) => (
              <div
                key={index}
                className="color-box"
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColorIndex(index)}
              >
                {color.name}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="color-detail">
          <h2>{selectedColor.name}</h2>
          <div className="color-objects">
            {selectedColor.objects.map((obj, index) => (
              <div className="color-item" key={index}>
                <img src={obj.image} alt={obj.word} />
                <p>{obj.word}</p> {/* Displaying the object name */}
              </div>
            ))}
          </div>
          <div className="nav-buttons">
            <button className="prev-btn" onClick={handlePrev} disabled={selectedColorIndex === 0}>
              Prev
            </button>
            <button
              className="next-btn"
              onClick={handleNext}
              disabled={selectedColorIndex === colorsData.length - 1}
            >
              Next
            </button>
          </div>
          <div className="back-to-topics-container">
            <button className="back-btn" onClick={handleBack}>
              Back to Colors
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorsPage;
