function Student(props){
    return(
    
        <div style={{backgroundColor:"skyblue"}}>
        <h3>Student Name :  {props.name}</h3>
        <h3> Email : {props.email}</h3>
        <h3> Moblile : {props.Mobile}</h3>
        <h3> Address : {props.other.adress} {props.other.city}</h3>
        </div>
          
    
    
       
    )
}
export default Student;