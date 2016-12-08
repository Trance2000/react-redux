import React, {Component} from 'react';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return (
//       <Playlist
//         {...this.state.player}
//         selectedPlaylist={this.state.playlists.selected}
//         toggleOne={this.toggle}
//       />
//     );
//   }

// }

const mapStateToProps = function (state, ownProps) {
  return Object.assign({}, {
    selectedPlaylist: state.playlists.selected
     }, state.player);

};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list));
    }
  }
};

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist);

export default PlaylistContainer;


