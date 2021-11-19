
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ArtistForm from './ArtistForm';
import QuestionForm from './QuestionForm';


function App() {
  return (
    <>
    <Header />
    <main className="App">
      <section className="intro">
        <h1>Soundtrack your day</h1>
        <p>Haven't you ever wondered what your day would be like if there was a soundtrack for everything you did.</p>
        <p>Well now you can find out!</p>
        <button>Start</button>
      </section>
      <ArtistForm />
      <QuestionForm />
    </main>
    <Footer/>
    </>
  );
}

export default App;
