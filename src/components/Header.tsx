import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="flex flex-col sm:flex-row justify-items-start sm:items-center mb-6">
                <div>
                    <p className="text-4xl font-londrina">Jason Schramm</p>
                    <p className="text-lg font-poppins font-semibold">Web Developer</p>
                </div>
            </div>
            <div className="js-btn-row flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 sm:flex-nowrap sm:space-x-4 mb-9">
                <a href="./assets/JasonSchramm_Resume.pdf" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-3 px-6" target="_blank">
                    <span className="flex-grow text-center self-center">Resume</span>
                </a>
                <a href="https://www.linkedin.com/in/j-schramm/" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-3 px-6" target="_blank">
                    <span className="flex-grow text-center self-center">LinkedIn</span>
                </a>
                <a href="https://github.com/jruns" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-3 px-6" target="_blank">
                    <span className="flex-grow text-center self-center">GitHub</span>
                </a>
                <a href="mailto:jason.schramm@gmail.com" className="flex flex-1 bg-buttons text-white font-poppins font-semibold tracking-wider rounded-full ring-4 ring-blue-100 py-3 px-6" target="_blank">
                    <span className="flex-grow text-center self-center">Email Jason</span>
                </a>
            </div>
        </header>
    )
}
export default Header;