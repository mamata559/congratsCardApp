const element = (
  // Write your code here.
  <div className="bg-container">
    <h1>Congratulations</h1>
    <div className="bg-container2">
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"></img>
        <h2 className="heading">Kiran V</h2>
        <p className="">
          Vishnu Institute of Computer Education and Technology,<br></br>
          Bhimavaram
        </p>
      </div>
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"></img>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
