import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className="navContainer">
      <div className="formContainer">
        <input
          onChange={(e) => {
            props.setSearchText(e.target.value);
          }}
          className="searchInput"
          type="text"
        />
        <button onClick={() => props.searchMovie()} className="searchBtn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Nav;
// //function InputField() {
//   // State to store value from the input field
//   const [inputValue, setInputValue] = useState("");

//   // Input Field handler
//   const handleUserInput = (e) => {
//     setInputValue(e.target.value);
//   };

//   // Reset Input Field handler
//   const resetInputField = () => {
//     setInputValue("");
//   };

//   return (
//     <div>
//       {/* Input Field */}
//       <input type="text" value={inputValue} onChange={handleUserInput} />

//       {/* Reset button */}
//       <button onClick={resetInputField}>Reset</button>
//     </div>
//   );
// }
