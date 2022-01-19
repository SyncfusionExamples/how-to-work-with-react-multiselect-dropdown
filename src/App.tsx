import React from 'react';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';
import './App.css';

function App() {
  const divStyle = {
    margin: 100,
    width: 300
  }
  // To bind JSON object
  // const sportsData: { [key: string]: Object }[] = [
  //   { id: 'game1', sports: 'Badminton' },
  //   { id: 'game2', sports: 'Football' },
  //   { id: 'game3', sports: 'Tennis' },
  //   { id: 'game4', sports: 'Golf' },
  //   { id: 'game5', sports: 'Hockey' },
  //   { id: 'game6', sports: 'Rugby' },
  //   { id: 'game7', sports: 'Snooker' },
  //   { id: 'game8', sports: 'Basketball' },
  // ];
  const remoteData: DataManager = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })
  const dataQuery: Query = new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount();
  return (
    <div style={divStyle}>
      <MultiSelectComponent
        placeholder="Select employees"
        dataSource={remoteData}
        query={dataQuery}
        fields={{value:"EmployeeID", text:"FirstName"}}
      ></MultiSelectComponent>
    </div>
  );
}

export default App;
