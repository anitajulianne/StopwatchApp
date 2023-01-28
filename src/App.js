import Button from './components/Button/Button'
import Timer from './components/Timer/Timer';
import {useState, useEffect} from 'react';
import Container from './components/Container/Container'


const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); 

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
      <Container>
        <Timer time={time} />
        <Button action={() => setRunning(true)} text={"Start"} />
        <Button action={() => setRunning(false)} text={"Stop"} />
        <Button action={() => setTime(0)} text={"Reset"} />
      </Container>
  );
};

export default App;