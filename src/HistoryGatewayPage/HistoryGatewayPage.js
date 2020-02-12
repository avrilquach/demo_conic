import React from 'react';
import HeaderHistoryGateway from './Components/HeaderHistoryGateway/HeaderHistoryGateway';
import LinkHistoryGateway from './Components/LinkHistoryGateway/LinkHistoryGateway';
import FiltersHistoryGateway from './Components/FiltersHistoryGateway/FiltersHistoryGateway';
import ListHistoryGateway from './Components/ListHistoryGateway/ListHistoryGateway';

class HistoryGatewayPage extends Component {
  render(){
return (
    <div className="App">
      <HeaderHistoryGateway / >
      <LinkHistoryGateway />
      <FiltersHistoryGateway />
      <ListHistoryGateway />
    </div>
  );
  }
  
}

export default HistoryGatewayPage;