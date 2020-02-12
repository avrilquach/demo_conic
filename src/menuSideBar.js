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
        to: "/aaa",
        icon: <PersonIcon />,
        name: "Account User"
    },{
        to: "/aaa",
        icon: <PeopleIcon />,
        name: "Account User"
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