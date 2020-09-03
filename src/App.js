import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/NavComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NewslettersTable from './components/NewslettersTable';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NavComponent />
      <div className="wrapper">
        <section className="box">  
          <div className="card padding mb25 fadeInDown">
            <p>This project consists of 3 main components: NewslettersTable, NewsHandleChange, and ButtonSubscribe. As I'm not
            a React "expert", I enjoyed the challenge and opportunity to sink my teeth into another over-engineered framework. Ha! Of
            course, a straight javascript or jquery project would have been much easier and have taken only a page of code but who am
            I to back down from a duel.   
           </p>
            <p>I created a json array to hold the newsletter image, title
            and description since it is likely to come in json anyway from a database or an API. This approach made binding the checkbox to
            a given item (or row) problematic, to say the least, and took most of my time to figure out. This is why I created NewsHandleChange to
            manage state when a checkbox is checked. I had to move the subscribe button to it's own ButtonSubscribe to allow the disabled state
            to change once a checkbox is checked.</p>
            <p>I framed the form in Bootstrap 4 with a header, navbar, and footer just to give some balance and proportion to the page. 
            I threw in some fadein animation for fun. To see more vanilla js, feel free to
            <a href="http://www.adam-marsh.com/pages/sandbox/js-dom/js-playground.php" target="_blank" rel="noopener noreferrer">click here</a>,
            or <a href="http://www.adam-marsh.com/grabit/dynamicButtons/index.html" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
          </div>  
          <NewslettersTable />
        </section>
      </div>   
        <FooterComponent />
    </div>
  );
}

export default App;
