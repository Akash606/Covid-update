import React from 'react';

export default class Message extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Covid-19 Updates</h1>
                <p className="lead">#Stay Home Stay Safe</p>
                <hr className="my-2" />
                <p className="lead">
                    <a className="text-center text-style-none" href="https://www.facebook.com/akash.sah.2017/" role="button">Developed By Akash</a>
                </p>
            </div>
        )
    }
}