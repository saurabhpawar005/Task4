import React, { useState } from 'react';



const ChartFormation = () => {

  const [box1Value, setBox1Value] = useState();
  const [box2Value, setBox2Value] = useState();

  const handleBox1Change = (e) => {
    const value = parseInt(e.target.value);
    const remainingValue = 100 - value;

    setBox1Value(value);
    setBox2Value(remainingValue);
  };

  const handleBox2Change = (e) => {
    const value = parseInt(e.target.value);
    const remainingValue = 100 - value;

    setBox2Value(value);
    setBox1Value(remainingValue);
  };

  return (
    <div>
      <label htmlFor="box1">Box 1:</label>
      <input
        type="number"
        id="box1"
        value={box1Value}
        onChange={handleBox1Change}
        max={100}
      />
      

      <label htmlFor="box2">Box 2:</label>
      <input
        type="number"
        id="box2"
        value={box2Value}
        onChange={handleBox2Change}
        max={100}
      />
      <button type="button" class="btn btn-success">Create Chart</button>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/70%25_pie_chart.svg/1024px-70%25_pie_chart.svg.png"/>
    </div>
  );
};


export default ChartFormation;
