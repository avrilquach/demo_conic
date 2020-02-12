import React from 'react';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import StorageIcon from '@material-ui/icons/Storage';
const menu = [{
    menu: [{
        to: "/customer",
        icon: <SupervisedUserCircleIcon />,
        name: "Account customer"
    }],
    id: 0
},
{
    menu: [{
        to: "/pj",
        icon: <PersonIcon />,
        name: "Create Project"
    },{
        to: "/home",
        icon: <PeopleIcon />,
        name: "Create Quotation"
    }],
    id: 1
},{
    menu: [{
        to: "/aaa",
        icon: <StorageIcon />,
        name: "Account Supervior"
    },{
        to: "/aaa",
        icon: <PeopleIcon />,
        name: "Account Supervior"
    }],
    id: 2
}]

export default menu;
