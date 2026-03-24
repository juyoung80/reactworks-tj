import {useState} from 'react'

const Example3 = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }


    return(
        <div>
            <h2>글자 입력</h2>

            <input 
                type="text"
                placeholder="글자 입력"
                onChange={handleInputValue}
            />
            <p>입력된 내용 : {inputValue}</p>
        </div>
    )


}

export default Example3