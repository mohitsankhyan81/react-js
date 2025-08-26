import Accordian from './comp/Accordian';
import { accordationData } from './utility/content';

const App = () => {
  return (
    <div>
      <div className="accordian">
        {accordationData.map(({ title, content }, index) => (
          <Accordian key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
