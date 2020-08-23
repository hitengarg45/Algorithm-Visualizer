import React from "react";

const NavBar = () => (
    <div className="bg-dark py-2 px-2">
        <span>
            <a className="btn-sm text-decoration-none bg-dark rounded-0 text-light" href="https://github.com/hitengarg45">
                <i className="fab text-light fa-github"></i>
                &nbsp; Repo URL
            </a>
            <a className="btn-sm text-decoration-none bg-dark rounded-0 text-light" href="https://www.linkedin.com/in/hiten-garg-4a9385169/">
                <i className="fab text-light fa-linkedin"></i>
                &nbsp; Hiten Garg
            </a>
        </span>
    </div>
);

export default NavBar;
