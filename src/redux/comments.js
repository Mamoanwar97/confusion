import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        console.log('Current State is: ' + JSON.stringify(comment));
        alert('Current State is: ' + JSON.stringify(comment));
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};
