import React, {Component} from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/media-query.css';
import Header from './components/header.js'
import Slider from './components/slider.js';
import BeerSlider from 'beerslider';
import Slick from 'react-slick';

class App extends Component {
    state = {
        sliderCount: 14,
        fuckUps: {
            singles: {
                front: [],
                diag: [],
                side: [19],
            }, 
            doubles: {
                frontNside: [],
                frontNdiag: [18],
                sideNdiag: [14],
            },
        },
        badPictures: [10, 11, 13, 14, 15, 16, 17, 18, 19],
        currentSliderContainer: '',
        currentSlider: '', 
    }
    loading = () => {
        const loadingScreen = document.querySelectorAll('.loading-small');

        loadingScreen.forEach(screen => {
            const cube = screen.querySelector('.loadingCube');
            const filling = screen.querySelector('.loadingCubeFilling');
            const dots = screen.querySelector('.dots');
        
            setTimeout(() => {
                filling.classList.add('fillUp');
                setTimeout(() => {
                    cube.style.animationName = 'flip';
                    cube.style.alignItems = 'flex-start';
                    setTimeout(() => {
                        filling.classList.remove('fillUp');
                        setTimeout(() => {
                            cube.style.animationName = 'flip2';
                            cube.style.alignItems = 'flex-end';
                        }, 1000)
                    }, 1500)    
                }, 1000)
                const cubeFlip = setInterval(() => {
                    filling.classList.add('fillUp');
                    setTimeout(() => {
                        cube.style.animationName = 'flip';
                        cube.style.alignItems = 'flex-start';
                        setTimeout(() => {
                            filling.classList.remove('fillUp');
                            setTimeout(() => {
                                cube.style.animationName = 'flip2';
                                cube.style.alignItems = 'flex-end';
                            }, 1000)
                        }, 1500)    
                    }, 1000)
                    if (screen.style.display === 'none') {
                        clearInterval(cubeFlip);
                    }
                }, 5000)
                dots.innerHTML = '.';
                setTimeout(() => {
                    dots.innerHTML = '..';
                    setTimeout(() => {
                        dots.innerHTML = '...';
                        setTimeout(() => {
                            dots.innerHTML = '';
                        }, 500);
                    }, 500);
                }, 500);
                const dotRoll = setInterval(() => {
                    dots.innerHTML = '.';
                    setTimeout(() => {
                        dots.innerHTML = '..';
                        setTimeout(() => {
                            dots.innerHTML = '...';
                            setTimeout(() => {
                                dots.innerHTML = '';
                            }, 500);
                        }, 500);
                    }, 500);
                    if (screen.style.display === 'none') {
                        clearInterval(dotRoll);
                    }
                }, 2000)
            }, 500)
        })
        
    }
    loaded = (event) => {
        const loadingScreen = event.target.parentNode.parentNode.parentNode.querySelector('.loading-small')
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 300)
    }
    changeSlider = (side) => {
        if (side === 'front') {
            let currentSlider = this.state.currentSlider;
            currentSlider.style.display = "none";
            let newSlider = this.state.currentSliderContainer.querySelector('.front');
            this.setState({currentSlider: newSlider}, () => {
                currentSlider = this.state.currentSlider;
                currentSlider.style.display = 'block';
            });

        }
        if (side === 'diag') {
            let currentSlider = this.state.currentSlider;
            currentSlider.style.display = 'none';
            let newSlider = this.state.currentSliderContainer.querySelector('.diag');
            this.setState({currentSlider: newSlider}, () => {
                currentSlider = this.state.currentSlider;
                currentSlider.style.display = 'block';
            })
        }
        if (side === 'side') {
            let currentSlider = this.state.currentSlider;
            currentSlider.style.display = 'none';
            let newSlider = this.state.currentSliderContainer.querySelector('.side');
            this.setState({currentSlider: newSlider}, () => {
                currentSlider = this.state.currentSlider;
                currentSlider.style.display = 'block';
            })
        }
    }
    changeSliderContainer = (event) => {
        document.querySelector('.big-button').classList.remove('big-button');
        event.target.classList.add('big-button');
        let pickerIndex = event.target.classList[0].slice(1) - 1;
        let currentSliderContainer = this.state.currentSliderContainer;
        currentSliderContainer.style.display = 'none';
        let newSliderContainer = document.querySelectorAll('.slider-container')[pickerIndex];
        this.setState({currentSliderContainer: newSliderContainer}, () => {
            currentSliderContainer = this.state.currentSliderContainer;
            currentSliderContainer.style.display = 'flex';
            currentSliderContainer.querySelectorAll('.slider').forEach((slider) => {
                if (window.getComputedStyle(slider).display === 'block') {
                    this.setState({currentSlider: slider})
                }
            })
        })
        document.querySelectorAll('.slick-dots li button')[pickerIndex].click();
    }
    previousSlider = () => {
        let currentSliderContainer = this.state.currentSliderContainer;
        let sliderIndex = '';
        document.querySelectorAll('.slider-container').forEach((slider, index) => {
            if (slider === currentSliderContainer) {
                sliderIndex = index;
            }
            if (sliderIndex <= 0) {
                sliderIndex = this.state.sliderCount;
            }
        })
        currentSliderContainer.style.display = 'none';
        let newSliderContainer = document.querySelectorAll('.slider-container')[sliderIndex - 1];
        this.setState({currentSliderContainer: newSliderContainer}, () => {
            currentSliderContainer = this.state.currentSliderContainer;
            currentSliderContainer.style.display = 'flex';
            currentSliderContainer.querySelectorAll('.slider').forEach(slider => {
                if (window.getComputedStyle(slider).display === 'block') {
                    this.setState({currentSlider: slider})
                }
            })
        })
        document.querySelectorAll('.big-button').forEach(item => {
            item.classList.remove('big-button');
        });
        document.querySelectorAll(`.b${sliderIndex}`).forEach(item => {
            item.classList.add('big-button');
        });
        document.querySelectorAll('.slick-dots li button')[sliderIndex - 1].click();
        let clickedLi = '';
        const slickDotInterval = setInterval(() => {
            const bigButton = parseInt(document.querySelector('.big-button').classList[0].slice(1));
            let bigButtonIndex = bigButton - 1;
            document.querySelectorAll('.slick-dots li').forEach((li, index) => {
                if  (li.classList.value === 'slick-active') {
                    clickedLi = index;
                }
            })
            console.log(bigButtonIndex, clickedLi)
            if (bigButtonIndex === clickedLi) {
                clearInterval(slickDotInterval);
            } else {
                console.log(bigButton, clickedLi)
                document.querySelectorAll('.slick-dots li button')[bigButtonIndex].click();
            }
        }, 100)
    }
    nextSlider = () => {
        let currentSliderContainer = this.state.currentSliderContainer;
        let sliderIndex = '';
        document.querySelectorAll('.slider-container').forEach((slider, index) => {
            if (slider === currentSliderContainer) {
                sliderIndex = index + 1;
            }
            if (sliderIndex >= this.state.sliderCount) {
                sliderIndex = 0;
            }
        })
        currentSliderContainer.style.display = 'none';
        let newSliderContainer = document.querySelectorAll('.slider-container')[sliderIndex];
        this.setState({currentSliderContainer: newSliderContainer}, () => {
            currentSliderContainer = this.state.currentSliderContainer;
            currentSliderContainer.style.display = 'flex';
            currentSliderContainer.querySelectorAll('.slider').forEach(slider => {
                if (window.getComputedStyle(slider).display === 'block') {
                    this.setState({currentSlider: slider})
                }
            })
        })
        document.querySelectorAll('.big-button').forEach(item => {
            item.classList.remove('big-button');
        })
        document.querySelectorAll(`.b${sliderIndex + 1}`).forEach(item => {
            item.classList.add('big-button')
        })
        document.querySelectorAll('.slick-dots li button')[sliderIndex].click();
        let clickedLi = '';
        const slickDotInterval = setInterval(() => {
            const bigButton = parseInt(document.querySelector('.big-button').classList[0].slice(1))
            document.querySelectorAll('.slick-dots li').forEach((li, index) => {
                if  (li.classList.value === 'slick-active') {
                    clickedLi = index;
                }
            })
            console.log(bigButton, clickedLi)
            if (bigButton === clickedLi + 1) {
                clearInterval(slickDotInterval);
            } else {
                console.log(bigButton, clickedLi + 1)
                document.querySelectorAll('.slick-dots li button')[bigButton - 1].click();
            }
        })
    }
    componentDidMount() {
        let slider = document.querySelectorAll('#slider');
        document.querySelectorAll('#slider').forEach((slider, index) => {
            new BeerSlider(slider, {start: 25});
            // let sliderImages = slider.querySelectorAll('img');
            // imagesLoaded(slider[i], slider[i].querySelector('.loading-small').style.display = 'none');
        })
        this.setState({
            currentSliderContainer: document.querySelectorAll('.slider-container')[0],
            currentSlider: document.querySelectorAll('.slider')[0],    
        })
        this.loading();
    }
    render() {
        let sliders = [];
        let sliderPickers = [];
        for (let i = 0; i < this.state.sliderCount; i++) {
            let front = true;
            let diag = true;
            let side = true;
            let pickerImg = '';
            this.state.fuckUps.singles.front.forEach((value) => {
                if (value == i + 1) {
                    diag = false;
                    side = false;
                }
            })
            this.state.fuckUps.singles.diag.forEach((value) => {
                if (value == i + 1) {
                    front = false;
                    side = false;
                }
            })
            this.state.fuckUps.singles.side.forEach((value) => {
                if (value == i + 1) {
                    front = false;
                    diag = false;
                }
            })
            this.state.fuckUps.doubles.frontNside.forEach((value) => {
                if (value == i + 1) {
                    diag = false;
                }
            })
            this.state.fuckUps.doubles.frontNdiag.forEach((value) => {
                if (value == i + 1) {
                    side = false;
                }
            })
            this.state.fuckUps.doubles.sideNdiag.forEach((value) => {
                if (value == i + 1) {
                    front = false;
                }
            })
            sliders[i] = (
                <div className='slider-container'>
                    {front ? <Slider 
                        bigClass='slider front'
                        class='beer-slider front'
                        before={`styles/images/cases/case${i + 1}before1.jpg`}
                        after={`styles/images/cases/case${i + 1}after1.jpg`}
                        onload={(event) => this.loaded(event)}
                    /> : null}
                    {diag ? <Slider 
                        bigClass='slider diag'
                        class='beer-slider diag'
                        before={`styles/images/cases/case${i + 1}before2.jpg`}
                        after={`styles/images/cases/case${i + 1}after2.jpg`}
                        onload={(event) => this.loaded(event)}
                    /> : null}
                    {side ? <Slider 
                        bigClass='slider side'
                        class='beer-slider side'
                        before={`styles/images/cases/case${i + 1}before3.jpg`}
                        after={`styles/images/cases/case${i + 1}after3.jpg`}
                        onload={(event) => this.loaded(event)}
                    /> : null}
                    {/* <div className='loading-small'>
                        <div className='loadingCube'>
                            <div className='loadingCubeFilling'></div>
                        </div>
                        <h1><span className='dots'></span>טוען</h1>
                    </div> */}
                    <div className='slider-buttons'>
                        {front ? <button onClick={() => this.changeSlider('front')}>
                            <h3>קדימה</h3>
                        </button> : null}
                        {diag ? <button onClick={() => this.changeSlider('diag')}>אלכסון</button> : null}
                        {side ? <button onClick={() => this.changeSlider('side')}>צד</button> : null}
                    </div>
                </div>
            )
            if (front) {
                pickerImg = 1;
            } else if (diag) {
                pickerImg = 2;
            } else {
                pickerImg = 3;
            }
            let badPicture = false;
            this.state.badPictures.forEach(item => {
                if (item === i) {
                    badPicture = true;
                }
            })
            sliderPickers[i] = (
                <div className='slider-picker-button-container'>
                    <button 
                        className={i === 0 ? `b1 big-button slider-picker-button ${badPicture ? 'bad-picture' : null}` : `b${i + 1} slider-picker-button ${badPicture ? 'bad-picture' : null}`}
                        style={{backgroundImage: `url('styles/images/thumbnails/case${i + 1}.jpg')`}}
                        onClick={(event) => this.changeSliderContainer(event)}
                    >
                    </button>
                </div>
            )
        }
        return(
            <div>
                <Header />
                <div className='container'>
                   <div className='inner-container'>
                        <button onClick={this.previousSlider} className='previous-slider'>
                            <img src='styles/images/left-arrow.png'></img>
                        </button>
                        {sliders}
                        <button onClick={this.nextSlider} className='next-slider'>
                            <img src='styles/images/right-arrow.png'></img>
                        </button>
                    </div>
                </div>
                <Slick
                    infinite={true}
                    className='slider-picker'
                    dots={true}
                    slidesToShow={5}
                    centerMode={true}
                    arrows={false}
                >
                    {sliderPickers}
                </Slick>
            </div>
        )
    }
}

export default App;
