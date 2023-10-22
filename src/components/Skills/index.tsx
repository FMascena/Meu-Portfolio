import React from "react";

const SkillsRow = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ];

    return(
        <section id="skills">
            <h2>Habilidades</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default SkillsRow;