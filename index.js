

const displayTime = ()=>{
    moment.locale("id");
    $(".time").text(moment().format('LTS'));
    document.querySelector(".date").innerHTML = moment().format("LL"); //ALTERNATIF
};
const updateTime = ()=>{
    displayTime();
    setTimeout(updateTime,1000);
};

updateTime();