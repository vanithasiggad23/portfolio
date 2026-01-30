function Loadproject(){
    const handlechange = () =>{
        console.log('projects loaded');
    }
    return(
        <button onClick={handlechange}>loadproject</button>
    );
}
export default Loadproject;