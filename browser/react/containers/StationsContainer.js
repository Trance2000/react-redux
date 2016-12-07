import {connect} from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function (songsArray) {
  const newObj = {};

  songsArray.forEach((song) => {
    if (newObj[song.genre]) {
      newObj[song.genre].push(song);
    } else {
      newObj[song.genre] = [song];
    }
  });
  return newObj;
};


const mapStateToProps = function(state) {

  return {
    stations: convertSongsToStations(state.songs)
  };
};

const mapDispatchToProps = function(dispatch) {
  return {};
};

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
