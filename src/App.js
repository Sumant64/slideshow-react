
import { useEffect, useState } from 'react';
import './style.css';

const arr = [
  "./image/image-1.jpg",
  "./image/image-2.jpg",
  "./image/image-3.jpg",
  "./image/image-5.jpg"
]

function App() {
  const [imageList, setImageList] = useState(arr);
  const [addClassName, setaddClassName] = useState('');
  let timer = 3000;
  let counter = 1;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      moveSlider('next')
    }, timer)
    counter++;
    
    return () => clearInterval(slideInterval)
  }, [counter])


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
    <div className="container group">
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

          <div className="nextPrevArrows absolute z-10 flex justify-between w-full top-[50%] translate-y-[-50%] p-[1rem]">
            <button onClick={() => moveSlider('prev')} className="prev w-[40px] h-[40px] rounded-full border-none font-bold transition-all duration-300 cursor-pointer hidden group-hover:block group-hover:text-slate-200"> {`<`}</button>
            <button onClick={() => moveSlider('next')} className="next w-[40px] h-[40px] rounded-full border-none font-bold transition-all duration-300 cursor-pointer hidden group-hover:block group-hover:text-slate-200"> {`>`} </button>
          </div>
        </div>
      </div>

      <div className='absolute z-30 bottom-4 right-0 left-0'>
      <div className="flex items-center justify-center gap-2 w-full">
          {
            arr.map((item, i) => (
              <div
                key={item}
                className={`
                transition-all w-2 h-2 bg-[#fff] rounded-full
                ${item === imageList[0] ? "p-1" : "bg-opacity-50"}
                `}
              ></div>
            ))
          }

      </div>
      </div>
    </div>
  );
}

export default App;
