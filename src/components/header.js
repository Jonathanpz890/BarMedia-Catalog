import React from 'react'

const header = () => {
    return(
        <header>
            <a href='/' className='logo'>
                <img alt='' src='styles/images/logo.png'></img>
            </a>
            <div className="nav-links">
            <div className="face dropdown">
                <button> פנים</button>
                <div className="dropdown-content dropdown-animation">
                    <a href='/'>פיסול פנים</a>
                    <a href='/'>קמטים וקמטוטים</a>
                    <a href='/'>שקעי עיניים</a>
                    <a href='/'>פיסול אף ללא ניתוח</a>
                    <a href='/'>עיבוי שפתיים</a>
                    <a href='/'>עיצוב לחיים</a>
                    <a href='/'>עיצוב סנטר וקו לסת</a>
                    <a href='/'>הרמת גבות</a>
                    <a href='/'>טיפול אסטתיקה לגבר</a>
                </div>
            </div>
            <div className="skin dropdown">
                <button> עור</button>
                <div className="dropdown-content">
                    <a href='/'>הצערת עור הפנים</a>
                    <a href='/'>טיפול בנזקי שמש</a>
                    <a href='/'>מלזמה</a>
                    <a href='/'>צלקות אקנה</a>
                </div>
            </div>
            <div className="body dropdown">
                <button> גוף</button>
                <div className="dropdown-content">
                    <a href='/'>נשירת שיער ראש</a>
                    <a href='/'>העלמת ורידים ברגליים</a>
                    <a href='/'>הצערת גב כף היד</a>
                    <a href='/'>העלמת סנטר כפול</a>
                    <a href='/'>הצערת מחשוף בית החזה</a>
                    <a href='/'>טיפול בבעיות אורתופדיות ע״י PRP</a>
                    <a href='/'>טיפול בהזעת יתר</a>
                </div>
            </div>
            
        </div>
        </header>
    )
}

export default header;