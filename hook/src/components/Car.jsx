import React, { useState } from 'react';

const Car = () => {

    const [car, setCar] = useState({
        brand: '현대자동차',
        model: '소나타',
        year: 2021
    });

    const updateYear = () => {
        setCar({
            ...car, // 기존의 car 객체의 속성들을 복사하여 새로운 객체를 만듦
            year: 2022 // year 속성만 업데이트
        });
    }

    return (
        <div>               
            <h2>자동차</h2>
            <p>브랜드 : {car.brand}</p>
            <p>모델 : {car.model}</p>
            <p>연식 : {car.year}</p>
            <button onClick={updateYear}>연식변경</button>
        </div>
        )

}

export default Car