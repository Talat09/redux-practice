//defining constants state
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
//state
const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  users: [{ name: "Talat Mahmud" }],
};

//Action---> object-->type,payload
//INCREMENT COUNTER
//function er vitore likha mane hocche action creator
const IncrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

//DECREMENT COUNTER
const DecrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};
const AddUserAction = () => {
  return {
    type: ADD_USER,
    payload: { name: "Dihan" },
  };
};

//step
//1.state
//2.dispatch action
//3. reducer -->based on action type
//4.update
