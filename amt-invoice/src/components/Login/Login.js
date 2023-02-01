import classes from "./Login.module.css";

function Login  ({ handleSubmit, username, setUsername, password, setPassword }) {
  return (
    <div className={classes.center}>
    <h1 className={classes.h1Login}>AMT Invocing</h1>
      <form onSubmit={handleSubmit} className={classes.formLogin}>
        <div className={classes.inputContainer}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}  
            placeholder="enter a username"
            onChange={({ target }) => setUsername(target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password" >Password:</label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
            className={classes.input}
          />
        </div>
        <button type="submit" className={classes.submitButton}>Login</button>
      </form>
    </div>
  );
}

export default Login;
