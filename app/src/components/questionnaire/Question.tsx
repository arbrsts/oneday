const Question = (props: { question: string; index: number; }) => {
    const { question, index } = props;

    return (
        <div className="grid grid-cols-3 gap-2">
            <span className="font-thin col-span-2 text-xl text-content">
            {`${index}. ${question}`}
            </span>
            <div className="flex gap-2">
                <input
                    type="radio"
                    name={index.toString()}
                    className="rounded-full border w-8 h-8"
                ></input>
                <input
                    type="radio"
                    name={index.toString()}
                    className="rounded-full border w-8 h-8"
                ></input>
                <input
                    type="radio"
                    name={index.toString()}
                    className="rounded-full border w-8 h-8"
                ></input>
                <input
                    type="radio"
                    name={index.toString()}
                    className="rounded-full border w-8 h-8"
                ></input>
                <input
                    type="radio"
                    name={index.toString()}
                    className="rounded-full border w-8 h-8"
                ></input>
            </div>
        </div>
    )
}

export default Question;