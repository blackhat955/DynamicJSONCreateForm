import React from "react";
import Input from "./inputValue";
import Button from "./Button";
import Radio from "./radio";
import Select from "react-select";
import "./App.css";

const value = [
    { name: "name", value: "Durgesh" },
    { name: "age", value: "34" },
    { name: "qualification", value: "B.E" },
    { name: "College Name", value: "college Name" },
    { name: "College Name", value: "college Name" },
    { name: "Address", value: "address" },
    { name: "Zip Code", value: "select-zip" },
    { name: "Payment Method", value: "payment" },
    {
        options: [
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
        ]
    }
];
class App extends React.Component {
    state = {
        selectedOption: null
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    render() {
        const { selectedOption } = this.state;

        return ( <
            div className = "App" >
            <
            div class = "inputSection" > {
                value.map((val, i) =>
                    !val.options ? ( <
                        div className = "input" >
                        <
                        Input name = { val.value }
                        placeholder = { val.name }
                        /> < /
                        div >
                    ) : ( <
                        div className = "select" >
                        <
                        Select value = { selectedOption }
                        onChange = { this.handleChange }
                        options = { val.options }
                        className = "selectbox" /
                        >
                        <
                        /div>
                    )
                )
            } <
            /div> <
            div class = "input1" > {
                value.map((val, i) => ( <
                    div className = "input11" >
                    <
                    Radio name = "radio1"
                    placeholder = { val.name }
                    value = { val.value }
                    /> < /
                    div >
                ))
            } <
            /div> <
            div class = "input1" > {
                value.map((val, i) => ( <
                    div className = "input11" >
                    <
                    Radio v = "1"
                    name = "radio1"
                    placeholder = { val.name }
                    value = { val.value }
                    /> < /
                    div >
                ))
            } <
            /div>

            <
            Button / >
            <
            /div>
        );
    }
}

export default App;