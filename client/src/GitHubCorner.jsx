/*
GitHub Corners by Tim Holman (https://github.com/tholman/github-corners)
MIT License
Source: https://github.com/tholman/github-corners 
*/

import './GitHubCorner.css';
import GitHubLockupDark from './assets/GitHub_Lockup_Dark.png'

export default function GitHubCorner() {
    return <a href="https://github.com/addictedtolearning/revolting" className="github-corner" aria-label="View source on GitHub">
        <img src={GitHubLockupDark} alt="GitHub" height={30} className="github-corner-img" />
    </a>
}