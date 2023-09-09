import './LeftPanel.css';

function LeftPanel({ children }) {
  return (
    <div className="left-panel">
      {children}
      {console.log(children)}
    </div>
  );
}

export default LeftPanel;