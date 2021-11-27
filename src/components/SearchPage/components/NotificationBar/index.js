import React from 'react';

import './NotificationBar.css'

function NotificationBar(props) {
    return (
        <div>
            {   
                props.isFirstSearch ?
                    <div className="warning">Please enter something to search</div>
                :
                    props.isSearching ?
                        <div className="warning-searching">Searching...</div>
                    :
                        props.listDrinks ?
                            <div className="warning-success">Number of results is <span>{props.listDrinks.length}</span></div>
                        :
                            <div className="warning-not-found">No result is found </div>
            }
        </div>
    );
}

export default NotificationBar;