import React from 'react'
import PropTypes from "prop-types";

const RepoItem = ({repo}) => {
    return (
        <div className="card">
            <h3>
                <div className="small">
                    <i class="fas fa-link">  </i> <a href={repo.html_url}>{repo.name}</a>
                </div>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem;