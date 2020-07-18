import React, { useEffect, useState, createContext } from 'react';
import { SmiteApiConsumer } from '../App'
import { SmiteAPI } from '../api/SmiteAPI';

function ContextTestComponent() {

    const [god, setGod] = useState('')

    const prompt = (smiteApi: SmiteAPI) => {
        const requestedGod = window.prompt('Which god?') || '';
        if (requestedGod) {
             setGod(smiteApi.getGod(requestedGod));
        }

    }
    return (
        <SmiteApiConsumer>
            { context => { 
                return context && (
                <div>
                    <button onClick={() => prompt(context)}>CLICK ME</button>
                    <div>
                        {god}
                    </div>
                </div>
            )}
            }
        </SmiteApiConsumer>
    )
}

export default ContextTestComponent