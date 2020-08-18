import React, { useState, useEffect } from 'react';
import Axios from '../request/axios';
const Ui_FQA = (props) => (
    <div className="col-md-3">
        <div className="card">
            <div className="card-body">
                <h3 className="card-title"> {props.active.title}</h3>
                <p className="card-text">Ward: {props.active.ward} </p>
            </div>
        </div>
    </div>
)
const FQA = (props) => {
    const [movies, setMovies] = useState(['']);

    useEffect(() => {
        const fetchData = async () => {
            const res = await Axios.get(props.hospital);
            setMovies(res.data);
            console.log(res.data);
            return res;
        }
        fetchData();
    }, [props.hospital]);

    return (
        <div className="row">

            {movies.map((movie) => <Ui_FQA active={movie} />)}

        </div>

    )


}
export default FQA;