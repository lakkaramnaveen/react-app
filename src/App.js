import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React
import Axios from "axios"; // Import Axios for making HTTP requests
import Cards from "./Cards"; // Import the Cards component

function App() {
  const [data, setData] = useState([]); // State to hold the data fetched from the API

  useEffect(() => {
    // useEffect hook to fetch data on component mount
    Axios.get("http://localhost:8000") // Make a GET request to the specified URL
      .then((res) => setData(res.data)); // Set the fetched data to state
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      {data.map((value) => (
        // Map through the data array and render a Cards component for each item
        <Cards
          key={value.id} // Unique key for each item in the list
          name={value.name} // Pass name as a prop to the Cards component
          age={value.age} // Pass age as a prop to the Cards component
          city={value.city} // Pass city as a prop to the Cards component
          country={value.country} // Pass country as a prop to the Cards component
        />
      ))}
    </div>
  );
}

export default App; // Export the App component as the default export
