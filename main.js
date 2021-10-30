
// let Students=new Object();
// Students.name='jane';
// Students.age=30;
// Students.phone={"home":5555564444,"work":123456789};
// Students.marks=[40,63,50,78];
// console.log("Students",Students);

// var arry = Students.marks;

// function getAvg(array) {
//     var total = 0;
//     var count = 0;

//     array.forEach(function(item) {
//         total += item;
//         count++;
//     });

//     return total / count;
  
// }

// console.log("The marks average is :" + getAvg(arry));

// var phone1 = Students.phone;
// let myPhone = JSON.stringify(phone1);
// function getPhones(phone1) {
//       return phone1
// }
// console.log('Jane´s phone number is : '+getPhones(myPhone));

class Students{

        constructor(){
            this.name;
            this.age;
            this.phone;
            this.marks;
        }
        

    getAvg() {
        var total = 0;
        var count = 0;

        this.marks.forEach(function(item) {
            total += item;
            count++;
        });
        let sum = total / count
        
    console.log("The marks average is :" + sum);
    }
     
    setInfo(name,age,phone,marks){
        this.name=name;
        this.age=age;
                    if(marks.length){
                    for(let i in marks){
                        if(marks[i]<0||marks[i]>100){
                            alert('Invalid Mark')
                            this.marks='';
                            break;
                        }else{
                            this.marks=marks;
                        }
                        
                    }
                    }
                    
                    if(!phone.home||!phone.work){
                        alert('please Enter the Phone Number')
                        
                    }else{
                      this.phone=phone;  
                    }
                   
                    
                    
                
    }




    getPhones() {
    console.log('Jane´s phone number is : '+'home :'+this.phone.home+' , '+'work :'+this.phone.work); 
    }

}


let student = new Students();
student.setInfo('Jane',30,{"home":5555564444,"mobile":123456789},[40,63,50,78]);
console.log(student);
student.getAvg();
student.getPhones();
