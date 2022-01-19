//Use Project namespace if it already exists, otherwise create it.
var Project = Project || {};
Project.TeamB = Project.TeamB || {};

Project.TeamB.customer = function(firstName, middleName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.getFullName = () =>{
        return this.firstName+" "+this.middleName+" "+this.lastName;
    }
    return this;
}