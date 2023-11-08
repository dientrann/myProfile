import AboutMe from "./AboutMe";
import CareerGoals from "./CareerGoals";
import Project from "./Project";
import ExpertiseSkill from "./expertiseSkill";

export default function LeftComponent(){
    return (
        <div className="leftComponent">
            <AboutMe></AboutMe>
            <ExpertiseSkill></ExpertiseSkill>
            <Project></Project>
            <CareerGoals></CareerGoals>
        </div>
    )
}