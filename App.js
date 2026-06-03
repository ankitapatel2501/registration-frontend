import Registration from "./Registration";
import "./Registration.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Online Exam System</h1>

        <nav>
          <a href="/">Home</a>
          <a href="/">Registration</a>
          <a href="/">Login</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      <Registration />

      <footer className="footer">
        <p>© 2026 Online Exam System. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;