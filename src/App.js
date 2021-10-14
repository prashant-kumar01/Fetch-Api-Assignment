import React from "react";
import './App.css';
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      };
    }
  
    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isLoaded: true
                });
            })
    }
    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) return <div>
            <h1>Loading please wait.. </h1></div> ;
   
        return (
        <div className = "App">
            <h1>Api Fetch</h1>  
            {
                items.map((item) => ( 
                <div key = { item.id } className="box">
                   <img src={ item.url } alt="image" id="image"></img>
                   <h3>{ item.title }</h3>
                </div>
                ))
            }
        </div>
    );
}
}
   
export default App;