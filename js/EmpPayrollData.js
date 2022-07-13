class EmpPayrollData {
    id;
    name;
    profilePic;
    salary;
    gender;
    startDate;
    department;
    note;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.profilePic=params[2];
        this.salary= params[3];
        this.gender=params[4];
        this.department=params[5];
        this.startDate=params[6];
        this.note=params[7];
    }


    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }

    get id() {
        return this.id;
    }
    set id(id) {
        this.id = id;
    }
            
    get profilePic() {
        return this.profilePic;
      }
    set profilePic(profilePic) {
        this.profilePic = profilePic;
    }

    get gender() {
        return this.gender;
    }
        
    set gender(gender) {
        this.gender = gender;
    }

    get department() {
        return this.department;
    }
        
    set department(department) {
        this.department = department;
    }

    get salary() {
        return this.salary;
    }
        
    set salary(salary) {
        this.salary = salary;
    }

    get startDate() {
        return this.startDate;
    }
        
    set startDate(startDate) {
        this.startDate = startDate;
    }

    get note() {
        return this.note;
    }
        
    set note(note) {
        this.note = note;
    }

    toString(){
        const options = { year: 'numeric', month:'long', day:'numeric'};
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id + ", name=" +this.name + ", gender=" + this.gender +", Profile Pic=" + this.profilePic + 
        ", Salary=" + this.salary+ ", Start Date=" + empDate+", Note=" +this.note;
    }

}
