import satData from "./satData";

const Buttons = ({displaySats, filterByType, setSat}) => {
  return (
    <div>
      {displaySats.map((sat,id)=> (
        <button onClick={()=> filterByType(sat)} key={id}>
          {sat} orbit
        </button>
      ))}

  <button onClick={()=> setSat(satData)}>All Orbits</button>
      </div>
  );
}; 

export default Buttons;