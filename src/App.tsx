import React from 'react';
import './App.css';

function App() {


    type studentType = {
        name: string,
        id: number,
        laptop?: boolean,
        lastName: string
    }

    const student1:studentType = {
        name: "hallo",
        id: 2,
        lastName:"currywurst",
    };

    const student2:studentType = {
        name: "hallo",
        id: 2,
        laptop:true,
        lastName:"currywurst"
    };

    console.log(student1.name);

    function printNames(name1: string, name2: string): string {
        return "hallo" + name1 + "und" + name2;
    }

    const arrayNumbers: number[] = [1, 2, 3, 3, 5, 1, 2, 3, 4, 5]

    const foundNumber = arrayNumbers.find((currentNumber: number) => {
        return currentNumber === 5;
    })

    // console.log(foundNumber);
    //
    //
    // console.log(printNames("Christian", "Christian"));


    return (
        <div className="App">
            <header className="App-header">
            </header>
        </div>
    );
}

export default App;
