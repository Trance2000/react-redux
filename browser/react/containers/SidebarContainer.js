import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';



const mapStateToProps = function (state, ownProps) {
  return {
    playlists: state.playlists.list
  };
};


const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
