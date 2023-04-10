import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SectionTitle = ({subtitle, title, description, textAlign, radiusRounded}) => {
    return (
        <div className={`section-title ${textAlign}`}>
            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <h2 className={`subtitle ${radiusRounded}`}><span className="theme-gradient" dangerouslySetInnerHTML={{__html: subtitle}}></span></h2>
            </ScrollAnimation>
            
            <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}>
                <p className="description b1" dangerouslySetInnerHTML={{__html: description}}></p>
            </ScrollAnimation>
        </div>
    )
}
export default SectionTitle;