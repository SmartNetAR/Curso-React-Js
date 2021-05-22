import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    // setEmail(event.target.value);
    const name = event.target.name;

    setUserData({
        ...userData,
        [name]: event.target.value
    });

  };

  return (
    <>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control-plaintext"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <button type="button"
            onClick={() => console.log(userData)}>Ver Estado</button>
      </div>
    </>
  );
};

export default Form;
