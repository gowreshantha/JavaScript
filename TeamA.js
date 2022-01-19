//Use Project namespace if it already exists, otherwise create it.
var Project = Project || {};
Project.TeamA = Project.TeamA || {};

Project.TeamA.customer = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = ()=>{
        return this.firstName+" "+this.lastName;
    }
    return this;
}

