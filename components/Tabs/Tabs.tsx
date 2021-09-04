import { useState } from "react";


function Tabs({ children }: any): JSX.Element {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <div>
      <div>
        {
          children.map((item, index) => <span onClick={() => setActivePanel(index)}>{ item.props.label }</span>)
        }
      </div>
      <div>
        { children[activePanel].props.children }
      </div>
    </div>
  );
}

export default Tabs;
