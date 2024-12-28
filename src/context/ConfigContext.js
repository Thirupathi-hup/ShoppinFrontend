import React, { createContext, Component } from "react";

export const ConfigContext = createContext();

export class ConfigProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caseOption: "Aluminum",
      sizeOption: "40mm",
      bandOption: "Sport Band",
    };
  }

  setCaseOption = (value) => {
    this.setState({ caseOption: value });
  };

  setSizeOption = (value) => {
    this.setState({ sizeOption: value });
  };

  setBandOption = (value) => {
    this.setState({ bandOption: value });
  };

  render() {
    const { caseOption, sizeOption, bandOption } = this.state;
    return (
      <ConfigContext.Provider
        value={{
          caseOption,
          setCaseOption: this.setCaseOption,
          sizeOption,
          setSizeOption: this.setSizeOption,
          bandOption,
          setBandOption: this.setBandOption,
        }}
      >
        {this.props.children}
      </ConfigContext.Provider>
    );
  }
}
