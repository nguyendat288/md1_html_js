let a =5;
let b=8;
function pt1(a,b){
    if(a==0){
        if(b!=0) {
            document.write("vô nghiệm");
        }else document.write("vô số nghiệm");
    }else document.write("x= "+(-b/a));
}
pt1(5,8);