import Background from './components/Background'
import {MathProvider} from '../src/components/MathContext';

function App() {
    return (
        <MathProvider>
            <div className="App">
                <Background/>
            </div>
        </MathProvider>
    );
}

export default App;