const Home = () => {

  const handleClick = (e) => {
    console.log("yo yo yo", e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);

  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>click me again</button>
    </div>
   );
}
 
export default Home;
<div className="home"></div>