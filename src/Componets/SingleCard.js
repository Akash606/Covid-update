import React from 'react';
import "./CardStyle.css";
const SingleCard = (props) => (
    <div className="col-md-3">
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Province {props.active.province || props.active.title_np}</h3>
                <p className="card-text">{props.active.count || props.active.ans_np} </p>
            </div>
        </div>
    </div>
)
export default SingleCard;