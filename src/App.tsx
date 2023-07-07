import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Gallery from './components/Gallery';
import Card from './components/Card';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Gallery</Link>
              </li>
              <li>
                <Link to="/card">My Card</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route
              path="/card"
              element={
                <Card
                  slideContent={{
                    id: 1,
                    imgUrl: '/assets/london-cityscape.jpg',
                    imageDetails: {
                      name: 'London Cityscape ',
                      location: ' London, England ',
                      description:
                        ' Big Ben is the nickname for the Great Bell of the Great Clock of Westminster, at the north end of the Palace of Westminster in London, England, and the name is frequently extended to refer also to the clock and the clock tower. ',
                    },
                  }}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
