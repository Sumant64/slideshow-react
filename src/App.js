
import { useEffect, useState } from 'react';
import './style.css';

const arr = [
  "./image/image-1.jpg",
  "./image/image-2.jpg",
  "./image/image-3.jpg",
  "./image/image-5.jpg"
]

function App() {
  const [imageList, setImageList] = useState([]);
  const [addClassName, setaddClassName] = useState('');

  useEffect(() => {
    setImageList(arr)
  }, [])


  const moveSlider = (direction) => {
    if (direction == 'next') {
      let nextList = imageList;
      let pop = nextList.shift();
      nextList.push(pop);
      setaddClassName('next')
      setImageList([...nextList]);
    } else {
      let prevList = imageList;
      let pop = prevList.pop();
      prevList.unshift(pop);
      setaddClassName('prev')
      setImageList([...prevList]);
    }
  }

  const animationEnd = () => {
    setaddClassName('')
  }


  return (
    <div className="container">
      <div className="right">
        <div className={`slider ${addClassName}`} onAnimationEnd={() => animationEnd()}>
          <div className="list">
            {
              imageList.map((item) => {
                return (
                  <div className="item">
                    <img src={item} alt="image 1" />
                  </div>
                )
              })
            }
          </div>

          <div className="nextPrevArrows">
            <button onClick={() => moveSlider('prev')} className="prev"> {`<`}</button>
            <button onClick={() => moveSlider('next')} className="next"> {`>`} </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
