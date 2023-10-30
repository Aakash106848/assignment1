import { Component } from 'react';
import './form1.css';
class Form extends Component {   
constructor() {
    super();
    this.state = {
        ProjectName: "",
        ManagerName: "",
        StartDate: "",
    };
    this.updatePName = this.updatePName.bind(this);
    this.updateMName = this.updateMName.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.ValidateForm = this.ValidateForm.bind(this);
    
}

 render()
 {
    return (
        <div className="form" align="center">
            <fieldset>
            <form  >
                <label>Project Name</label><input type="text" name="ProjectName" onBlur={this.ValidateForm} onChange={this.updatePName} />
                <span id="status"></span><br/>
                <label>Manager Name</label><input type="text" name="ManagerName" onChange={this.updateMName}/><br/>
                <label>Start Date</label><input type="date" name="StartDate" onChange={this.updateDate}/><br/>
                <input type="submit" value="Submit" />
            </form>
            </fieldset>
            <b>
            Project Name: {this.state.ProjectName}<br/>
            Manager Name: {this.state.ManagerName}<br/>
            Start Date: {this.state.StartDate}
            </b>
        </div>
    )
 }
 ValidateForm()
 {
        const regex = /^[a-zA-Z0-9\s]+$/;
       const inputValue = this.state.ProjectName;
       const span = document.getElementById("status");
       if(inputValue === "") {
           span.innerHTML = "";
           return;
       }
       if(!regex.test(inputValue)) {
           console.log("Special characters are not allowed.");
           span.style.color = "red";
           span.innerHTML = "Special characters are not allowed.";
           return;
       }
       else{
           span.style.color = "green";
           span.innerHTML = "Valid";
       }

 }
 updatePName(event)
{
    console.log(event.target.value)
    this.setState({
        ProjectName: event.target.value
    })
}
updateMName(event)
{
    console.log(event.target.value)
    this.setState({
        ManagerName: event.target.value
    })
}
updateDate(event)
{
    console.log(event.target.value);
    this.setState({
        StartDate: event.target.value
    });
}

 }
 export default Form