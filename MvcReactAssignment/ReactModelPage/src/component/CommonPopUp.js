import React from "react";
import '../App.css';
import PropTypes from 'prop-types';

class CommonPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUpType: props.popUpType,
      popUpVisible: true,
      entityList: props.entityList,
      id: this.props.id
    };
  }

  changeEntityDetails = (e) => {
    var entityName = e.target.innerHTML
    if (this.state.popUpType === "Location") {
      this.props.changeCityName(entityName);
    }
    this.props.changeEntityFlag(false, entityName, this.state.popUpType, this.state.id);
  }

  render() {
    const entities = this.state.entityList.map(entity => {
      if (this.state.popUpVisible) {
        if (this.state.popUpType === "Version") {
          return (
            <p style={{ whiteSpace: "nowrap" }} onClick={this.changeEntityDetails} key={entity.versionId + "_" + entity.versionName}>{entity.versionName}</p>
          )
        }
        if (this.state.popUpType === "Model") {
          return (
            <p style={{ whiteSpace: "nowrap" }} onClick={this.changeEntityDetails} key={entity.modelId + "_" + entity.modelName}>{entity.modelName}</p>
          )
        }
        else {
          return (
            <p style={{ whiteSpace: "nowrap" }} onClick={this.changeEntityDetails} key={entity}>{entity}</p>
          )
        }
      }
      else {
        return (
          ''
        )
      }
    });
    return (
      <div>
        {entities}
      </div>
    );
  }
}

CommonPopUp.propTypes = {
  popUpType: PropTypes.string,
  changeEntityFlag: PropTypes.func,
  entityList: PropTypes.arrayOf(PropTypes.shape({
    CompanyId: PropTypes.number,
    CompanyName: PropTypes.string,
    ModelId: PropTypes.number,
    ModelName: PropTypes.string,
    Rating: PropTypes.number,
    VersionId: PropTypes.number,
    ImageUrl: PropTypes.string,
    VersionName: PropTypes.string,
    Price: PropTypes.number
  }) || PropTypes.arrayOf(PropTypes.shape({
    locations: PropTypes.string
  }))),
  selectedEntity: PropTypes.arrayOf(PropTypes.shape({
    CompanyId: PropTypes.number,
    CompanyName: PropTypes.string,
    ModelId: PropTypes.number,
    ModelName: PropTypes.string,
    Rating: PropTypes.number,
    VersionId: PropTypes.number,
    ImageUrl: PropTypes.string,
    VersionName: PropTypes.string,
    Price: PropTypes.number
  }) || PropTypes.arrayOf(PropTypes.shape({
    locations: PropTypes.string
  }))),
  popUpVisible: PropTypes.bool

}



export default CommonPopUp;