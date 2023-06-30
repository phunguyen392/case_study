let student = new Student('01', "Biển Cửa Tùng", 'KP Hòa Lý Hải', 'Thắng cảnh','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUmk3pLaSMAMzh9ZsQfV4e5qgyahNr0Y3iQ&usqp=CAU' );
let student1 = new Student('02','Địa đạo Vịnh Mốc','KP Trung Nam','Di tích lịch sử','https://truyenhinhvov.qltns.mediacdn.vn/239964650902032384/2020/12/25/dia-dao-vinh-moc-mot-the-gioi-song-duoi-long-dat1-1608865692105-1608865692341685980801.jpg');
let student2 = new Student('03','Cầu Cửa Tùng','KP An Đức II','Địa điểm du lịch','https://vnanet.vn/Data/Articles/2020/05/07/4668264/vna_potal_khu_neo_dau_tranh_tru_bao_cua_tung_quang_tri_buoc_dau_phat_huy_hieu_qua_161629792_stand.jpg');
let student3 = new Student('04','Rừng Rú Lịnh','KP An Du Đông','Khu sinh thái','https://cdnimg.vietnamplus.vn/t660/uploaded/lepz/2020_09_01/ttxvn_20200901_chat_pha_rung.jpg');

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