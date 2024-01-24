import React from "react"
import SkillCard from "../elements/SkillCard"
import Data from "../../data.json"
import useScrollAppearEffect from '../../assets/js/useScrollAppearEffect';


export default function Skills() {
    const appearStyleTitle = useScrollAppearEffect({ id: 'skills', name: 'text-header' });
    const appearStyleSkills = useScrollAppearEffect({ id: 'skills', name: 'style-row' });

    const skillCard = Data.skills.map((value, index) => {
        return <SkillCard
            key={index}
            {...value}
        />
    })
    return (
        <section class="container pt-4 " id="skills" style={{ maxWidth: "1200px" }}>
            <div className="container ">
                <h2 class="text-header" style={appearStyleTitle}>Skills</h2>
                <div class="row style-row" style = {appearStyleSkills}>
                    {skillCard}
                </div>
            </div>

        </section>
    );
}