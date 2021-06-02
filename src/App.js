import React, { useState, useEffect } from "react";
import Inputs from "./inputs";
import Error from "./error";

export const InputContext = React.createContext(null);

// saves added user
function save() {
  const list = localStorage.getItem("item");
  if (list) {
    return JSON.parse(localStorage.getItem("item"));
  } else {
    return [];
  }
}

function App() {
  // whole initial data
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    hasError: false,
    isForm: true,
  });
  // modal variable
  const [error, setError] = useState("");
  // users array
  const [list, setList] = useState(save());

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(list));
  }, [list]);

  // live input value change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // to close the error
  const closeError = () => {
    setUser({ ...user, hasError: false });
  };

  // if false, welcome message will be shown
  const added = user.isForm;

  const handleSubmit = (e) => {
    const { email, password, userName } = user;
    e.preventDefault();
    if ((email, password, userName)) {
      // short pass error
      if (password.length < 8) {
        setUser({ ...user, hasError: true });
        setError("Your password must have at least 8 characters");
      } else if (
        // used username error
        list.find((person) => {
          return person.userName.toLowerCase() == user.userName.toLowerCase();
        })
      ) {
        setUser({ ...user, userName: "", hasError: true });
        setError("This username is taken");
      } else if (
        // used email error
        list.find((person) => {
          return person.email.toLowerCase() == user.email.toLowerCase();
        })
      ) {
        setUser({ ...user, email: "", hasError: true });
        setError("This email is used");
      } else {
        // true condition
        setList([...list, user]);
        setUser({
          ...user,
          hasError: false,
          isForm: false,
        });
      }
    } else if (email == "" || password == "" || userName == "") {
      // empty fields error
      setUser({ ...user, hasError: true });
      setError("Starred fields shouldn`t be empty!");
    }
  };

  return (
    <InputContext.Provider value={{ handleChange, handleSubmit, user, added }}>
      {/* error caller */}
      {user.hasError && <Error content={error} close={closeError} />}
      {/* inputs caller */}
      <Inputs />
    </InputContext.Provider>
  );
}

export default App;
