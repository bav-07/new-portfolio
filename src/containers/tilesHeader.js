import anime from 'animejs/lib/anime.es.js';

const TilesHeader = () => {
    
    let columns = Math.floor(document.body.clientWidth / 50);
    let rows = Math.floor(document.body.clientHeight / 50);

    const handleOnClick = index => {
  
        anime({
            targets: ".tile",
            opacity: [{value: 0.5, duration: 500},
            {value: 0.9, duration: 500}],
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            })
        })
    }

    return ( 
        <>
        </>
    );
}
 
export default TilesHeader;