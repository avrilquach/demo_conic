import React from 'react';
import MaterialTable from "material-table";
export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'ID', field: 'id' },
            { title: 'Request Id', field: 'requestid' },
            { title: 'Request Name', field: 'requestname' },
            { title: 'Customer', field: 'customer' },
            { title: 'Create Date', field: 'create' },
            { title: 'Finish Date', field: 'finish' },
        ],
        data: [
            { id: '1', requestid: '42071', requestname: 'Item A',customer :'Nguyen Van A',create:'1-Jan-2020',finish:'1-Jan-2020'},
            { id: '2', requestid: '42071', requestname: 'Item A',customer :'Nguyen Van A',create:'1-Jan-2020',finish:'1-Jan-2020'},
            { id: '3', requestid: '42071', requestname: 'Item A',customer :'Nguyen Van A',create:'1-Jan-2020',finish:'1-Jan-2020'},
            { id: '4', requestid: '42071', requestname: 'Item A',customer :'Nguyen Van A',create:'1-Jan-2020',finish:'1-Jan-2020'},
            { id: '5', requestid: '42071', requestname: 'Item A',customer :'Nguyen Van A',create:'1-Jan-2020',finish:'1-Jan-2020'},
        ],
    });

    return (
        <MaterialTable
            title=""
            columns={state.columns}
            data={state.data}
            options={{actionsColumnIndex: -1}}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}