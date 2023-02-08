import React from 'react';
import { VictoryPie } from "victory-pie";

export default function Graph(props) {

    let sample = {x: "Title", y: 1};
    const colors = ["blue", "lightblue", "darkblue", "green", "limegreen", "darkgreen", "purple"];
    const myData = [];

    props.expenses.map((expense) => {
        sample = {x: expense.text, y: expense.value};
        myData.push(sample);

        if(props.skipID.includes(expense.id)){
            myData.pop();
        }

        return(myData);
    });

    // ! Math is not adding up on graph, disproportionate
    return(
        <div className="graph-container app">
            <VictoryPie data={myData} colorScale={colors} radius={125}/>
        </div>);
}
