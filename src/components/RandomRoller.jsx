import { useState } from "react";

function RandomRoller(props) {
  const { message, handleValue } = props;
  const [data, setData] = useState({
    item: message || "Click to Pick",
    interval: null,
  });
  const pickItem = () => {
    const { list = [] } = props;

    let startTime;

    let fps = props.fps;
    let now;
    let then = Date.now();
    let interval = 1000 / fps;
    let delta;
    let selectedValue = undefined

    const spin = (timestamp, duration) => {
      timestamp = timestamp || new Date().getTime();

      let runTime = timestamp - startTime;
      let progress = runTime / duration;

      progress = Math.min(progress, 1);

      
      now = Date.now();
      delta = now - then;
      
      if (delta > interval) {
        then = now - (delta % interval);
        selectedValue = list[Math.floor(Math.random() * list.length)]
        
        setData({ item: selectedValue });
      } 
      // check if run time is met
      if (runTime < duration) {
        requestAnimationFrame((timestamp) => {
          spin(timestamp, duration);
        });
      } else {
        handleValue(selectedValue)
      }

      
    };

    requestAnimationFrame((timestamp) => {
      startTime = timestamp || new Date().getTime();
      spin(startTime, props.duration);
    });
  };
  
  return <div onClick={pickItem}>{data.item}</div>
}

export default RandomRoller;
