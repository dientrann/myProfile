
export default function Experience() {

    return (
        <div className="experience">
            <div className="title">
                <h2>Experience</h2>
            </div>
            <div className="item">
                <h3>NCCPlus VietNam Join Stock Company - 2023</h3>
                <ul>
                    <li>
                        <h3>Job Position</h3>
                        <p>Intern</p>
                    </li>
                    <li>
                        <h3>Project</h3>
                        <div className="itemProject">
                            <h4>Product</h4>
                            <p>CRUD Product, Authentication Using NodeJs TypeScript, MongoDB.</p>
                        </div>
                        <div className="itemProject">
                            <h4>TimeSheet</h4>
                            <p>Manage Users, Client, Tasks, Projects, Timesheets, Authentication,
                                Authorization Using Nest.js, TypeScript, MongoDB and JWT.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="item">
                <h3>Hoang Vi Technology Corporation - 2022</h3>
                <ul>
                    <li>
                        <h3>Job Position</h3>
                        <p>Intern</p>
                    </li>
                    <li>
                        <h3>Job Description</h3>
                        <ol>
                            <li>Support monthly maintenance for partner companies.</li>
                            <li>Support to fix computer errors and install software for users.</li>
                            <li>Use remote control applications to support remote users.</li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
    )
}