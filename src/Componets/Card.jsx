import React, { useState, useEffect } from 'react';
import Axios from '../request/axios';
import SingleCard from './SingleCard';

const Card = (props) => {
    const [movies, setMovies] = useState(['']);

    useEffect(() => {
        const fetchData = async () => {
            if (props.fetchUrl) {
                const res = await Axios.get(props.fetchUrl);
                setMovies(res.data.province.active);

                return res;
            } else if (props.active) {
                const res = await Axios.get(props.active);
                setMovies(res.data.province.cases);
                return res;

            }
        }
        fetchData();
    }, [props.fetchUrl]);

    return (
        <div className="row">

            {movies.map((movie) => <SingleCard Key={movie.count} active={movie} />)}

        </div>

    )


}
export default Card;