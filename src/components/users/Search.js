import React, {useState, useContext} from 'react'
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        } 
    }
    
    const onChange = (e) => setText(e.target.value);
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <h2>
                        <i class="fas fa-search"></i> Search github user
                    </h2>
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
                    />
                    <input 
                        type="submit" 
                        value="Search" 
                        // className="all-center-search" />
                        className="btn btn-light btn-block" />
                </form>
                {githubContext.users.length > 0 && (
                    <button 
                        className="btn btn-dark btn-block" 
                        // className="all-center-clear"
                        onClick={ githubContext.clearUsers}
                    >
                        Clear
                    </button>
                )}
            </div>
        )
};

export default Search;
