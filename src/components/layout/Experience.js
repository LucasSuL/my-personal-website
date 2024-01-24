import React from "react"
import Data from "../../data.json"
import ExperienceCard from "../elements/ExperienceCard"
import "../../styles/timeline.css"
import useScrollAppearEffect from '../../assets/js/useScrollAppearEffect';


export default function Experience() {
    const appearStyleTitle = useScrollAppearEffect({ id: 'experience', name: 'text-header' });
    const appearStyleExpHeader = useScrollAppearEffect({ id: 'experience', name: 'tm-header' });
    const appearStyleExpBox = useScrollAppearEffect({ id: 'experience', name: 'tm-container' });

    const experienceCard = Data.experience.map((value, index) => {
        return (
            <ExperienceCard
                key={index}
                {...value}
            />
        )
    })

    return (
        <section class="container pt-4" id="experience" style={{ maxWidth: "1200px" }}>
            <div className="container " >
                <h2 class="text-header" style={appearStyleTitle}>Experience</h2>
                <div class="tm-main">
                    <div className="tm-header mb-2" style = {appearStyleExpHeader}>
                        <span className="text-light p-2 px-3 rounded" style={{ backgroundColor: "#333" }}>
                            {new Date().getFullYear()}
                        </span>
                    </div>
                    <div class="container tm-container " style={appearStyleExpBox}>
                        {experienceCard}
                    </div>
                </div>
            </div>
        </section>
    );
}