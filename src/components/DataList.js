import React, { useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import './DataList.css'

import axios from 'axios';

function DataList () {
    const [beverageList, setBeverageList] = useState([]);      

    const columns = [
        {dataField: 'id', text: 'Id' },
        {dataField: 'name', text: 'Name', filter: textFilter() },
        {dataField: 'tagline', text: 'Tagline' },
        {dataField: 'description', text: 'Description' }
    ]

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
        .then(res => {
            console.log(res)
            setBeverageList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="pageStyle">
            <div className="tableStyle">
            <BootstrapTable 
                keyField='id' 
                columns={columns} 
                data={beverageList} 
                pagination={paginationFactory()}
                striped
                hover
                filter={filterFactory()}                
            />
            </div>
        </div>  
    )
}

export default DataList;