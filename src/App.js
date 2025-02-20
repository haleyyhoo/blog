import logo from './logo.svg';
import './App.css';
import image1 from '../src/img/1.png';
import image2 from '../src/img/2.png';
import image3 from '../src/img/3.png';
import muchacho from '../src/img/muchacho.png';

function App() {
  return (
    <main>
            <div className="container">
                <header>
                    <ul className="menu">
                        <li>
                            <a href="blogs.html">Blog</a>
                        </li>
                        <li>
                            <a href="works.html">Works</a>
                        </li>
                        <li>
                            <a href="index.html" className="active">Contacts</a>
                        </li>
                    </ul>
                    <button className="burger" onclick="toggleMenu()">
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </button>
                </header>
                <div className="content">
                    <div className="content-left">
                        <h1>Hi, I am John, <br />Creative Technologist</h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. Exercitation
                            veniam consequat sunt nostrud amet.
                        </p>
                        <button>Download Resume</button>
                    </div>
                    <div className="content-right">
                        <img src={muchacho} alt="John" />
                    </div>
                </div>
            </div>
            <section className="recent">
                <div className="container">
                    <div className="recent-header">
                        <h3>Recent posts</h3>
                        <a href="#" className="all">View all</a>
                    </div>

                    <div className="recent-container">
                        <div className="recent-card-container">
                            <h3>Making a design system from scratch</h3>
                            <div className="description">
                                <p>12 Feb 2020</p>
                                <span className="line"></span>
                                <p>Design, Pattern</p>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>

                        <div className="recent-card-container">
                            <h3>Creating pixel perfect icons in Figma</h3>
                            <div className="description">
                                <p>12 Feb 2020</p>
                                <span className="line"></span>
                                <p>Figma, Icon Design</p>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="works">
                <div className="container">
                    <div className="works-header">
                        <h3>Featured works</h3>
                    </div>
                    <div className="works-card-container">
                        <img src={image1} alt="1" />
                        <div className="works-card-description">
                            <h3>Designing Dashboards</h3>
                            <div className="description">
                                <div className="date">2020</div>
                                <div className="tag">Dashboard</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div className="works-card-container">
                        <img src={image2} alt="2" />
                        <div className="works-card-description">
                            <h3>Vibrant Portraits of 2020</h3>
                            <div className="description">
                                <div className="date">2018</div>
                                <div className="tag">Illustration</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div className="works-card-container">
                        <img src={image3} alt="3" />
                        <div className="works-card-description">
                            <h3>36 Days of Malayalam type</h3>
                            <div className="description">
                                <div className="date">2018</div>
                                <div className="tag">Typography</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <div className="vk"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="ok"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="tg"></div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <p>Copyright ©2020 All rights reserved</p>
            </footer>
        </main>
  );
}

export default App;
