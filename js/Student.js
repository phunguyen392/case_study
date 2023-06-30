class Student {
    constructor (id, fullname, date, gender, img) {
        this.id= id;
        this.fullname= fullname;
        this.date= date;
        this.gender= gender;
        this.img = img;
    }
    getID() {
        return this.id;
    }
    getFullname() {
        return this.fullname;
    }
    getDate() {
        return this.date;
    }
    getGender(){
        return this.gender;
    }
    
    getImg() {
        return this.img;
    }
    setID(id) {
        this.id=id;
    }
    setFullname(fullname) {
        this.fullname=fullname;
    }
    setDate(date) {
        this.date=date;
    }
    setGender(gender){
        this.gender=gender;
    }
   
    setImg(img){
        this.img=img;
    }

    edit(id, fullname, date,gender, img){
        this.id = id;
        this.fullname = fullname;
        this.date = date;
        this.gender = gender;
        this.img = img
    }
}