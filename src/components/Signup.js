import React, { useState } from "react";
// import { useHistory } from "react-router-dom";



async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Signup = () => {
    // const history = useHistory();

   const [token , setToken] = useState();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();

    const token = await loginUser(data);
    setToken(token);


    console.log(token , 'this is token');
    localStorage.setItem('login-token' , JSON.stringify(token));

    // history.push('/dashboard');
    
  };


  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signup;


