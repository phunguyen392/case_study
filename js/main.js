let student = new Student('01', "Bánh mì", '43', 'Bánh kẹo','https://upload.wikimedia.org/wikipedia/commons/0/0c/B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png' );
let student1 = new Student('02','Sting','32','Nước giải khát','https://product.hstatic.net/1000301274/product/_10101026__sting_dau_320ml_sleek_lon_db0105ad0db044bb939c7e7b8791d3e6_1024x1024.png');
let student2 = new Student('03','555','12','Thuốc lá','https://i0.wp.com/thuoclangoainhap.com/wp-content/uploads/2022/03/555-xanh-det-555-mandarin-state-express-thuoc-la-ngoai-nhap-com-00-01.jpg?fit=800%2C800&ssl=1');
let student3 = new Student('04','Kẹo mút','00','Bánh kẹo','https://baobivinam.com/image/cache/catalog/que%20keo%20mut-800x800.jpeg');

let arr =[student, student1, student2,student3 ];
let manage = new StudentManagement(arr);

function addStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let img = document.getElementById('img').value;

    let student = new Student(id,name,date,gender,img);
    manage.addStudent(student);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('id').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('img').value= '';
}

function deleteStudent(id) {
        manage.delete(id);
        manage.showList();
}

let studentId = 0;
function editStudent(id){
    let student = manage.findStudentById(id);
    document.getElementById('id').value = student.id;
    document.getElementById('fullname').value = student.fullname;
    document.getElementById('date').value = student.date;
    document.getElementById('gender').value = student.gender;
    document.getElementById('img').value = student.img;

    studentId = id;
}

function updateStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let img = document.getElementById('img').value;

    let student = manage.findStudentById(studentId);
    manage.edit(student,id,name,date,gender, img);
    manage.showList();
    clear();
}
function resetStudent() {
    document.getElementById('id').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('img').value = '';
  }

manage.showList();