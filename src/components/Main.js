import React, {Component} from 'react';
import '../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/media-query.css';
import Header from './header.js'
import Slider from './slider.js';
import BeerSlider from 'beerslider';
import Slick from 'react-slick';

class Main extends Component {
    state = {
        sliderCount: 26,
        pageTitle: 'מקרים מועדפים',
        limitedSlidercount: undefined,
        slidesToShow: undefined,
        fuckUps: {
            singles: {
                front: [15, 16, 17, 18, 19],
                diag: [25],
                side: [20, 21, 22, 24],
            }, 
            doubles: {
                frontNside: [],
                frontNdiag: [],
                sideNdiag: [14, 26],
            },
        },
        badPictures: [10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], 
        currentSliderContainer: '',
        currentSlider: '', 
        path: window.location.href.split('?')[1],
        kinds: {
            face: {
                sculpture: [5, 12, 13, 14],
                wrinkles: [9, 10],
                smilewrinkles: [4, 6, 7],
                eyesockets: [3, 4, 6, 7, 11, 15],
                nosesculpture: [14, 20, 21, 22, 23, 24],
                lipthickening: [5, 8, 13, 16, 17, 18, 19],
                cheeks: [3, 4, 6, 7, 13],
                chinandjaw: [],
                eyebrows: [],
                men: [],
            },
            skin: {
                facialrejuvination: [3, 7, 10, 12],
                sundamages: [],
                pigmentation: [],
                acnescars: [],
            },
            body: {
                hairloss: [],
                legveinremoval: [],
                palmbackrejuvination: [],
                doublechinremoval: [],
                cleavagerejuvination: [],
                prp: [],
                excesssweat: [],
            }
        },
        errorMessage: undefined,
        mobile: false,
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
        console.log(event.target);
        document.querySelectorAll('.big-button').forEach(button => {
            button.classList.remove('big-button');
        })
        document.querySelectorAll(`.${event.target.classList[0]}`).forEach(button => {
            button.classList.add('big-button')
            console.log(button);
        })
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
        const slickDotClick = () => {
            document.querySelectorAll('.slick-dots li button')[pickerIndex].click();
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
        if (this.state.path) {
            if (this.state.slidesToShow === this.state.limitedSlidercount) {
                return;
            } else {
                slickDotClick();
            }
        } else {
            slickDotClick();
        }
    }
    previousSlider = () => {
        let currentSliderContainer = this.state.currentSliderContainer;
        let sliderIndex = '';
        document.querySelectorAll('.slider-container').forEach((slider, index) => {
            if (slider === currentSliderContainer) {
                sliderIndex = index;
            }
            if (sliderIndex <= 0) {
                if (this.state.limitedSlidercount) {
                    sliderIndex = this.state.limitedSlidercount;
                } else {
                    sliderIndex = this.state.sliderCount;
                }
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
        const slickDotClick = () => {
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
        if (this.state.path) {
            if (this.state.slidesToShow === this.state.limitedSlidercount) {
                return;
            } else {
                slickDotClick();    
            }
        } else {
            slickDotClick();    
        }
    }
    nextSlider = () => {
        let currentSliderContainer = this.state.currentSliderContainer;
        let sliderIndex = '';
        document.querySelectorAll('.slider-container').forEach((slider, index) => {
            if (slider === currentSliderContainer) {
                sliderIndex = index + 1;
            }
            if (this.state.limitedSlidercount) {
                if (sliderIndex >= this.state.limitedSlidercount) {
                    sliderIndex = 0;
                }
            } else {
                if (sliderIndex >= this.state.sliderCount) {
                    sliderIndex = 0;
                }
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
        const slickDotClick = () => {
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
        if (this.state.path) {
            if (this.state.slidesToShow === this.state.limitedSlidercount) {
                return;
            } else {
                slickDotClick();
            }
        } else {
            slickDotClick();
        }
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
        if (this.state.path) {
            console.log(this.state.path);
            const path = this.state.path.split('-');
            if (!this.state.kinds[path[0]][path[1]] || this.state.kinds[path[0]][path[1]].length === 0) {
                console.log(this.state.kinds[path[0]][path[1]])
                this.setState({errorMessage: true})
                return
            }
            const limitedSlidercount = this.state.kinds[path[0]][path[1]].length;
            if (limitedSlidercount > 5) {
                this.setState({
                    limitedSlidercount,
                    slidesToShow: 5,
                })
            } else {
                this.setState({
                    limitedSlidercount,
                    slidesToShow: limitedSlidercount,
                })
            }
            let pageTitle = '';
            switch (this.state.path) {
                case 'face-sculpture':
                    pageTitle = 'פיסול פנים';
                    break;
                case 'face-wrinkles':
                    pageTitle = 'קמטים וקמטוטים';
                    break;
                case 'face-smilewrinkles':
                    pageTitle = 'קמטי חיוך';
                    break;
                case 'face-eyesockets':
                    pageTitle = 'שקעי עיניים';
                    break;
                case 'face-nosesculpture':
                    pageTitle = 'פיסול אף ללא ניתוח';
                    break;
                case 'face-lipthickening':
                    pageTitle = 'עיבוי שפתיים';
                    break;
                case 'face-cheeks':
                    pageTitle = 'עיצוב לחיים';
                    break;
                case 'face-chinandjaw':
                    pageTitle = 'עיצוב סנטר וקו לסת';
                    break;
                case 'face-eyebrows':
                    pageTitle = 'גבות';
                    break;
                case 'face-men':
                    pageTitle = 'טיפול אסטתיקה לגבר';
                    break;
                case 'skin-facialrejuvination':
                    pageTitle = 'הצערת עור הפנים';
                    break;
                case 'skin-sundamages':
                    pageTitle = 'טיפול בנזקי שמש';
                    break;
                case 'skin-pigmentation':
                    pageTitle = 'מלזמה';
                    break;
                case 'skin-acnescars':
                    pageTitle = 'צלקות אקנה';
                    break;

                case 'body-hairloss':
                    pageTitle = 'נשירת שיער ראש';
                    break;
                case 'body-legveinremoval':
                    pageTitle = 'העלמת ורידים ברגליים';
                    break;
                case 'body-palmbackrejuvination':
                    pageTitle = 'הצערת גף כף היד';
                    break;
                case 'body-doublechinremoval':
                    pageTitle = 'העלמת סנטר כפול';
                    break;
                case 'body-cleavagerejuvination':
                    pageTitle = 'הצערת מחשוף בית החזה';
                    break;
                case 'body-prp':
                    pageTitle = 'טיפול בבעיות אורטפדיות ע״י PRP';
                    break;
                case 'body-excesssweat':
                    pageTitle = 'טיפול בהזעת יתר';
                    break;
            }
            this.setState({pageTitle})
        }
        if (window.innerWidth <= 900) {
            this.setState({mobile: true})
        }
    }
    render() {
        let sliders = [];
        let sliderPickers = [];
        let shouldntContinue = false; 
        let n = 0;

        let path = '';
        if (this.state.path) {
            path = this.state.path.split('-');
        }
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
            shouldntContinue = true;
            if (this.state.path) {
                if (this.state.kinds[path[0]][path[1]]) {
                    this.state.kinds[path[0]][path[1]].forEach(item => {
                        if (item === i + 1) {shouldntContinue = false}
                    })
                }
            } else {
                shouldntContinue = false;
            }
            if (shouldntContinue) {continue}
            n++;
            sliders[n] = (
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
                if (item === i + 1) {
                    badPicture = true;
                }
            })
            sliderPickers[n] = (
                <div className='slider-picker-button-container'>
                    <button 
                        className={n === 1 ? `b1 big-button slider-picker-button ${badPicture ? 'bad-picture' : null}` : `b${n} slider-picker-button ${badPicture ? 'bad-picture' : null}`}
                        style={{backgroundImage: `url('styles/images/thumbnails/case${i + 1}.jpg')`}}
                        onClick={(event) => this.changeSliderContainer(event)}
                    >
                    </button>
                </div>
            )
        }
        return(
            <div>
            {this.state.errorMessage ? <div>
                <Header />
                <h1 className='error-message'>אין תוכן</h1>
                </div> : <div>      
                <Header />
                    <div className='container'>
                        <h1 className='page-title'>{this.state.pageTitle}</h1>
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
                        className='slider-picker'
                        infinite={true}
                        dots={true}
                        slidesToShow={this.state.path ? this.state.slidesToShow : this.state.mobile ? 3 : 5}
                        centerMode={true}
                        arrows={false}
                    >
                        {sliderPickers}
                    </Slick>
                </div>
            }
            </div>
        )
    }
}

export default Main;
