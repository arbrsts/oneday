import Question from './Question'

const Questionnaire = () => {
    return (
        <>
            <h1 className="text-4xl mb-2">How are you feeling right now?</h1>
            <hr />
            <div className="grid lg:grid-cols-3 gap-12 mt-6">
                <div className="flex flex-col gap-4 col-span-2">
                    <div className="grid grid-cols-3">
                        <span className="col-span-2 text-2xl font-thin">
                        Burn's Depression Index
                        </span>
                        <div className="flex gap-2 mt-auto mb-1">
                        <span className="text-center w-8">1</span>
                        <span className="text-center w-8">2</span>
                        <span className="text-center w-8">3</span>
                        <span className="text-center w-8">4</span>
                        <span className="text-center w-8">5</span>
                        </div>
                    </div>
                    <Question question='Feeling sad or down in the dumps' index={1} />
                    <Question question='Feeling unhappy or blue' index={2} />
                    <Question question='Feeling unhappy or blue' index={3} />
                    <Question question='Feeling unhappy or blue' index={4} />
                    <Question question='Feeling unhappy or blue' index={5} />
                </div>

                <div className="text-content text-xl leading-7 font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo
                </div>
            </div>
        </>
    )
}

export default Questionnaire;