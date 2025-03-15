import React from 'react'
import Datatable from '../../common/DataTable'
import { projectlistdetails } from '../../data/projectlist'
const Project = () => {
    const columns = [
        {
            title: 'Project Name',
            dataIndex: 'projectname',
            key: 'projectname',
        },
        {
            title: 'Project Description',
            dataIndex: 'projectdescription',
            key: 'projectdescription',
        },
        {
            title: 'Start Date',
            dataIndex: 'startdate',
            key: 'startdate',
        },
        {
            title: 'End Date',
            dataIndex: 'enddate',
            key: 'enddate',
        },

    ];
  return (
    <div>
        <p>
            Project
        </p>
        <Datatable  columns={columns} dataSource={projectlistdetails}/>

    </div>
  )
}

export default Project