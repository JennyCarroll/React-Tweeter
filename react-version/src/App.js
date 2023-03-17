import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import TweetList from "./components/TweetList";
import TweetForm from "./components/TweetForm";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Profile></Profile>
      <main className="container">
        <TweetList></TweetList>
        <TweetForm></TweetForm>
      </main>
    </div>
  );
}

export default App;
