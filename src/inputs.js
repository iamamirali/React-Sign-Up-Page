import React from "react";
import { InputContext } from "./App";

const Inputs = () => {
  const { handleChange, handleSubmit, user, added } = React.useContext(
    InputContext
  );
  return (
    <>
      {added ? (
        <section className='container'>
          <form className='form' onSubmit={handleSubmit}>
            <div className='name'>
              <div>
                <label htmlFor='firstName'>FirstName</label>
                <br />
                <input
                  className='input'
                  onChange={handleChange}
                  value={user.firstName}
                  type='text'
                  name='firstName'
                  id='firstName'
                />
              </div>
              <div>
                <label htmlFor='lastName'>LastName</label>
                <br />
                <input
                  className='input'
                  onChange={handleChange}
                  value={user.lastName}
                  type='text'
                  name='lastName'
                  id='lastName'
                />
              </div>
            </div>
            <div className='emUsePass'>
              <div>
                <label htmlFor='email'>Email*</label>
                <br />
                <input
                  className='input'
                  type='email'
                  value={user.email}
                  id='email'
                  name='email'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='userName'>Username*</label>
                <br />
                <input
                  className='input'
                  type='text'
                  value={user.userName}
                  id='userName'
                  name='userName'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='password'>Password*</label>
                <br />
                <input
                  className='input'
                  value={user.password}
                  type='password'
                  id='password'
                  name='password'
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type='submit' className='btn'>
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section className='welcome'>
          <h2 className='message'>
            Dear {user.firstName}, welcome to our website!
          </h2>
        </section>
      )}
    </>
  );
};
export default Inputs;
