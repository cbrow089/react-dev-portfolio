import React from 'react';
import Layout from './Layout';

const Portfolio = () => {
  return (
    <Layout>
        <section>
        <h2>My Project Portfolio</h2>
        <div class = "grid-container">
            <div class = "card-container">
            <h4>Meal Helper</h4> 
                <div id = "card1"> </div>
                <a class = "a-override"href="https://cbrow089.github.io/meal-helper/" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
                <a class = "a-override" href="https://github.com/cbrow089/meal-helper" target="_blank" rel="noopener noreferrer">
                    View Code
                </a>
            </div>
            
            <div class = "card-container">
                <h4>Weather Checker</h4>
                <div id = "card2"></div>
                <a class = "a-override" href="https://weather-checker-yshw.onrender.com/" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
                <a class = "a-override" href="https://github.com/cbrow089/weather-checker" target="_blank" rel="noopener noreferrer">
                    View Code
                </a>
            </div>
            
            <div class = "card-container">
                <h4>README Fabricator</h4>
                <div id = "card3"></div>
                <a class = "a-override" href="https://github.com/cbrow089/README-Fabricator" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
                <a class = "a-override" href="https://github.com/cbrow089/README-Fabricator" target="_blank" rel="noopener noreferrer">
                    View Code
                </a>
            </div>
            
            <div class = "card-container">
                <h4>Employee Navigator</h4>
                <div id = "card4"></div>
                <a class = "a-override" href="https://github.com/cbrow089/employee-navigator" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
                <a class = "a-override" href="https://github.com/cbrow089/employee-navigator" target="_blank" rel="noopener noreferrer">
                    View Code
                </a>
            </div>

            <div class = "card-containter">
                <h4>VEHICLE CREATOR</h4>
                <div id = "card5">
                    <a>Image by macrovector on Freepik</a>
                </div>
                <a class = "a-override" href="https://github.com/cbrow089/vehicle-creator" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
                <a class = "a-override" href="https://github.com/cbrow089/vehicle-creator" target="_blank" rel="noopener noreferrer">
                    View Code
                </a>
            </div>
            
            <div class = "card-container">
                <h4>Prework Study Guide</h4>
                <div id = "card6"></div>
                <a class = "a-override" href="https://github.com/cbrow089/prework-study-guide" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
                <a class = "a-override" href="https://github.com/cbrow089/prework-study-guide" target="_blank" rel="noopener noreferrer">
                    View Code
                </a>
            </div>
        </div>
        </section>
    </Layout>
  );
};

export default Portfolio;