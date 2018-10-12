

let TextBox = $("#TextBox")
let addButton = $("#addButton")
let pendingTask = $("#pendingTask")
let completedTask = $("#completedTasks")
let deleteButton = document.querySelector(".deleteButton")

function completedItem(input){
  input = $(".inputText")


  if(input.is(":checked")){
    completedTask.append(input.parent())
  } else {
    pendingTask.append(input.parent())
  }
}

function removeItem(item) {
  item = $(item)
  item.parent().remove()

}

$("#addButton").click(function() {
  let taskName = TextBox.val()
  let taskDiv = `
     <div class="pendingTaskDiv">
     <input class="inputText" type="checkbox" onclick="completedItem(this)"></input>
     <label>${taskName}</label>
     <button class="deleteButton" id="delButton" onclick="removeItem(this)">Remove</button>
     </div>
  `
  pendingTask.append(taskDiv)
})
