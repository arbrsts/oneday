'use client'

import Question from './Question';
import { questions, questionsAtATime } from '@/data/questions';
import { useState, useEffect, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export type UpdateScoresType = (index: number, score: number) => void;

const fade = {
    enter: 'opacity-0',
    enterActive: 'transition-opacity opacity-1 ease-in duration-400',
    exit: 'opacity-1',
    exitActive: 'transition-opacity opacity-0 ease-out duration-400',
}

const Questionnaire = () => {

    const [count, setCount] = useState<number>(0); // Keeps track of the current set of questions being displayed (sets of 5)
    const [scores, setScores] = useState<number[]>([0,0,0,0,0]); // Keeps track of the answers to the current questions being displayed
    const [total, setTotal] = useState<number>(0); // Keeps track of the total score from questions answered
    const [show, setShow] = useState<boolean>(false); // Indicates whether the questionnaire has been completed

    const totalRef = useRef(null); // For transition element - avoids defaulting to ReactDOM.findNode
    const questionnaireRef = useRef(null);
    const questionRef = useRef(null);

    const increment = () => {
        const subTotal = scores.reduce((acc, current) => acc + current, 0);

        setTotal(total + subTotal);
        setScores([0,0,0,0,0]);

        if (count < 4) {
            setCount(count + 1);
        } else {
            setShow(true);
        }
    };

    const updateScores:  UpdateScoresType = (index, score) => {
        const updatedScores = [...scores];
        updatedScores[index] = score;
        setScores(updatedScores);
    }

    useEffect(() => {
        if (scores.every((val) => val > 0)) {
            increment();
        }
    },[scores])

    return (
        <>
            <h1 className="text-4xl mb-2">How are you feeling right now?</h1>
            <hr />
            <div className="grid lg:grid-cols-3 gap-12 mt-6">
                <SwitchTransition mode='out-in'>
                    {show ? 
                    <CSSTransition key='result' nodeRef={totalRef} classNames={fade} timeout={400}>
                        <div ref={totalRef} className="flex items-center justify-center col-span-2">
                            <h1>Your Burn's depression index score is: {total}</h1>
                        </div>
                    </CSSTransition> :
                    <CSSTransition key='questionnaire' nodeRef={questionnaireRef} classNames={fade} timeout={400}>
                        <div ref={questionnaireRef} className="flex flex-col gap-4 col-span-2">
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
                            <SwitchTransition mode='out-in'>
                                <CSSTransition key={count} nodeRef={questionRef} classNames={fade} timeout={400}>
                                    <div ref={questionRef} className='flex flex-col gap-4'>
                                        {questions
                                            .slice(count*questionsAtATime, count*questionsAtATime+questionsAtATime)
                                            .map((q, i) => (
                                                <Question question={q} index={i} set={count} update={updateScores} key={q}/>
                                            ))}
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                        </div>
                    </CSSTransition>
                    }
                </SwitchTransition>

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