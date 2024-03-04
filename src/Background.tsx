import backgroundImage from './assets/pictures/Background.png';

function Background() {
  return (
    <div>
      <img src={backgroundImage} className='w-screen h-screen absolute z-0' alt='background'/>
    </div>
  );
}

export default Background;