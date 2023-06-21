const Question = (props: { question: string; index: number; update: (index: number, score: number) => void; }) => {
    const { question, index, update } = props;

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        update(index,parseInt(value));
    }

    return (
        <div className="grid grid-cols-3 gap-2">
            <span className="font-thin col-span-2 text-xl text-content">
            {`${index+1}. ${question}`}
            </span>
            <div className="flex gap-2">
                <input
                    type="radio"
                    name={question}
                    value={1}
                    onChange={handleRadioChange}
                    className="rounded-full border w-8 h-8"
                ></input>
                <input
                    type="radio"
                    name={question}
                    value={2}
                    onChange={handleRadioChange}
                    className="rounded-full border w-8 h-8"
                ></input>
                <input
                    type="radio"
                    name={question}
                    value={3}
                    onChange={handleRadioChange}
                    className="rounded-full border w-8 h-8"
                ></input>
                <input
                    type="radio"
                    name={question}
                    value={4}
                    onChange={handleRadioChange}
                    className="rounded-full border w-8 h-8"
                ></input>
                <input
                    type="radio"
                    name={question}
                    value={5}
                    onChange={handleRadioChange}
                    className="rounded-full border w-8 h-8"
                ></input>
            </div>
        </div>
    )
}

export default Question;