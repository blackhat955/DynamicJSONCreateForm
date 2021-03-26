import React from 'react';
import Input from './inputValue';
import Button from './Button'
import Radio from './radio'
import Select from 'react-select';
import './App.css'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const value = [
  { name: "name", value: "Durgesh" },
  { name: "age", value: "34" },
  { name: "qualification", value: "B.E" },
  { name: "College Name",value:"college Name" },
  { name: "Address" ,value:"address" },
  { name: "Zip Code",value:"select-zip"},
  { name: "Payment Method",value:"payment" }
];
class App extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App">
          {value.map((val, i) => (
        <div className="input">
          <Input name={val.value} placeholder={val.name} />
        </div>
      ))}
      <div className="select">
      <Select
      style={{width:"100%"}}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      </div>
      {value.map((val, i) => (
        <div className="input">
          <Radio name={val.value} placeholder={val.name} />
        </div>
      ))}
      
      <Button/>
      </div>
    );
  }
}

export default App;