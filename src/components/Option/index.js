import React, { Component } from "react";
import { ConfigContext } from "../../context/ConfigContext"; 
import './index.css';

class OptionsSelector extends Component {
  static contextType = ConfigContext; 
  constructor(props) {
    super(props);
    this.state = {
      appleWatchCollection: [],
    };
  }

 
  async componentDidMount() {
    try {
      const response = await fetch('https://shopinbackend.onrender.com/products');
      const data = await response.json();
      this.setState({ appleWatchCollection: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { caseOption, setCaseOption, sizeOption, setSizeOption, bandOption, setBandOption } = this.context;
    const { appleWatchCollection } = this.state;

    
    const caseOptions = Array.from(new Set(appleWatchCollection.flatMap(watch => watch.colors)));
    const sizeOptions = Array.from(new Set(appleWatchCollection.flatMap(watch => watch.caseSizes)));
    const bandOptions = Array.from(new Set(appleWatchCollection.flatMap(watch => watch.availableBands)));

    return (
      <div className="options-container">
        <h2>Select Your Options</h2>

        <div>
          <label htmlFor="case">Case Color: </label>
          <select
            id="case"
            value={caseOption}
            onChange={(e) => setCaseOption(e.target.value)}
            className="select-option"
          >
            <option value="">Select Case Color</option> 
            {caseOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        
        <div>
          <label htmlFor="size">Size: </label>
          <select
            id="size"
            value={sizeOption}
            onChange={(e) => setSizeOption(e.target.value)}
            className="select-option"
          >
            <option value="">Select Size</option>
            {sizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        
        <div>
          <label htmlFor="band">Band: </label>
          <select
            id="band"
            value={bandOption}
            onChange={(e) => setBandOption(e.target.value)}
            className="select-option"
          >
            <option value="">Select Band</option> 
            {bandOptions.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default OptionsSelector;
