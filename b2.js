let arr =[1,2,3,141,23,7,5];
let index=0;
let b=0;
function remove(arr){
    let arr0=[];
    index = prompt("nhập phần tử muốn tìm = ");
    for (let i=0;i<arr.length;i++){
        if(arr[i]==index){
            b=i;
            return 1;
        }
    }
}
if(remove(arr)==1){
    document.write("chứa phần tử cần tìm "+"<br>")
    document.write(b);
}else document.write("ko chứa");