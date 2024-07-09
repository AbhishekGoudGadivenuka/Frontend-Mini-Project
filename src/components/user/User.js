import './User.css'
function User(props){
    return(
        <div className='col'>
            <div className='card'>
                <img className="img"src={props.data.avatar} alt=''></img>
                <div className='card-body'>
                    <h6 className='lead'>{props.data.id}</h6>
                    <h6 className='lead'>{props.data.email}</h6>
                    <h6 className='lead'><b>{props.data.first_name}</b> </h6>
                    <h6 className='lead'><b>{props.data.last_name}</b></h6>
                    <h6 className='lead'>{props.data.avatar}</h6>
                </div>
            </div>
        </div>
    )
}






export default User