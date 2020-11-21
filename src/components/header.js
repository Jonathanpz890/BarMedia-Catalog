import React from 'react'

const header = () => {
    return(
        <header>
            <a href='/catalog' className='logo'>
                <img alt='' src='styles/images/logo.png'></img>
            </a>
            <div className="nav-links">
            <div className="face dropdown">
                <button> פנים</button>
                <div className="dropdown-content dropdown-animation">
                    <a href='?face-sculpture'>פיסול פנים</a>
                    <a href='?face-wrinkles'>קמטים וקמטוטים</a>
                    <a href='?face-smilewrinkles'>קמטי חיוך</a>
                    <a href='?face-eyesockets'>שקעי עיניים</a>
                    <a href='?face-nosesculpture'>פיסול אף ללא ניתוח</a>
                    <a href='?face-lipthickening'>עיבוי שפתיים</a>
                    <a href='?face-cheeks'>עיצוב לחיים</a>
                    <a href='?face-chinandjaw'>עיצוב סנטר וקו לסת</a>
                    <a href='?face-eyebrows'>הרמת גבות</a>
                    <a href='?face-men'>טיפול אסטתיקה לגבר</a>
                </div>
            </div>
            <div className="skin dropdown">
                <button> עור</button>
                <div className="dropdown-content">
                    <a href='?skin-facialrejuvination'>הצערת עור הפנים</a>
                    <a href='?skin-sundamages'>טיפול בנזקי שמש</a>
                    <a href='?skin-pigmentation'>מלזמה</a>
                    <a href='?skin-acnescars'>צלקות אקנה</a>
                </div>
            </div>
            <div className="body dropdown">
                <button> גוף</button>
                <div className="dropdown-content">
                    <a href='?body-hairloss'>נשירת שיער ראש</a>
                    <a href='?body-legveinremoval'>העלמת ורידים ברגליים</a>
                    <a href='?body-palmbackrejuvination'>הצערת גב כף היד</a>
                    <a href='?body-doublechinremoval'>העלמת סנטר כפול</a>
                    <a href='?body-cleavagerejuvination'>הצערת מחשוף בית החזה</a>
                    <a href='?body-prp'>טיפול בבעיות אורתופדיות ע״י PRP</a>
                    <a href='?body-excesssweat'>טיפול בהזעת יתר</a>
                </div>
            </div>
            
        </div>
        </header>
    )
}

export default header;