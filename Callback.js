function getUserDetails(id,getSubjectDetails){
    console.log("Getting rollnumber by id",id);
    getSubjectDetails("123");

}
function getSubjectDetails(userroll,getSubjectMarks){
         console.log("Getting subjectid by rollnumber",userroll);
         getSubjectMarks("science-1");
}
function getSubjectMarks(subjectid){
 console.log("Getting subject marks by subjectid",subjectid);
}
getUserDetails("121",function(userroll){
    getSubjectDetails(userroll,function(subjectid){
        getSubjectMarks(subjectid)
    })
})
console.log("testing");