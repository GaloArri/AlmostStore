const questionConteiner = document.querySelector("#accordionPanelsStayOpenExample");
let list=[];

fetch("../assets/dataFiles/faq.json")
            .then(response => response.json())
            .then(data => {
                list = data;
                console.log(list);
                pushQuestion(list);
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });

function pushQuestion(list){
    questionConteiner.innerHTML="";
    list.forEach(question=>{
        console.log(question);
        const div = document.createElement("div");
        div.innerHTML=`<div class="accordion-item w-50   mt-2 " > 
        <h2 class="accordion-header">
          <button class="accordion-button accordion-boton" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${question.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${question.id }">
            ${question.question}
          </button>
        </h2>
        <div id="panelsStayOpen-collapse${question.id}" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <strong>${question.answer}</strong>
          </div>
        </div>
      </div>`;
      questionConteiner.append(div);
    })
}