import React from "react";
import  {useLocation} from 'react-router-dom'

function UserDashboard() {
let {state}=useLocation()
  return (
    <div>
      <div className="text-end">
      <p className="text-center text-primary display-4">Welcome,<span className="text-danger display-1">{state.username}</span></p>
      </div>
    </div>
  );
}

export default UserDashboard;