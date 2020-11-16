import React from "react";
import '../App.css';
import PropTypes from 'prop-types';

class CityVersionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupName: ['Version', 'City'],
      selectedLocation: props.selectedLocation,
      selectedVersion: props.selectedVersion,
      id: props.id
    }
  }

  OpenLocationPopUp = () => {
    this.props.changeEntityFlag(true, this.state.selectedLocation, "Location");
  }

  OpenVersionPopUp = () => {
    this.props.changeEntityFlag(true, this.state.selectedVersion, "Version");
  }



  render() {
    const { selectedLocation, changeEntityFlag, selectedVersion } = this.props;

    if (!changeEntityFlag || !selectedLocation || !selectedVersion) {
      return null;
    }


    const popups = this.state.popupName.map(popup => {
      if (popup === "Version") {
        return (
          <div style={{ display: "inline-block", margin: "0 20px" }}>

            <div className="version">{popup}</div>
            <button className="button" key={popup} onClick={this.OpenVersionPopUp} > {this.state.selectedVersion.versionName}</button>

          </div>

        )
      }
      else {
        return (

          <div style={{ display: "inline-block", margin: "0 20px" }}>

            <div className="version">{popup}</div>
            <button className="button" key={popup} onClick={this.OpenLocationPopUp} > {this.state.selectedLocation}</button>

          </div>
        )
      }


    })
    return (
      <div className="popUpContainer" test-data="popUpContainer">
        {popups}
      </div>
    );
  }

}

CityVersionBox.propTypes = {
  selectedLocation: PropTypes.string,
  changeEntityFlag: PropTypes.func,
  selectedVersion: PropTypes.shape({
    CompanyId: PropTypes.number,
    CompanyName: PropTypes.string,
    ModelId: PropTypes.number,
    ModelName: PropTypes.string,
    Rating: PropTypes.number,
    VersionId: PropTypes.number,
    ImageUrl: PropTypes.string,
    VersionName: PropTypes.string,
    Price: PropTypes.number
  })
}


export default CityVersionBox;