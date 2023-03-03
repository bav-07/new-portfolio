const Tile = (index, handleOnClick) => {
    return (  
        <div className="tile" onClick={() => handleOnClick(index)}></div>
    );
}
 
export default Tile;