export const changeEntityFlag = (flag, entity, type, id) => {
    if (type === "Version") {
        let sel_ver = {};
        for (let i = 0; i < this.state.versions.length; i++) {
            if (this.state.versions[i].versionName === entity) {
                sel_ver = this.state.versions[i];
                break;
            }
        }
        this.setState({
            ...this.state,
            selectedVersion: sel_ver,
            locationPopUpVisible: false,
            versionPopUpVisible: flag,
            id: 0
        });
    }
    else {
        this.setState({
            ...this.state,
            selectedLocation: entity,
            locationPopUpVisible: flag,
            versionPopUpVisible: false,
            id: 1
        });
    }
}