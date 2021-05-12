var todoApp = new function(){
    this.el = document.getElementById("tasks");
    this.tasks = [];

    this.FetchAll = function(){ // this function to display all of our todo list items
        var data = '';  // create var empty
        if(this.tasks.length > 0){
            for(i = 0; i < this.tasks.length; i++){  // to display each item
                data += "<tr>"; // open tag - add (tr tag) to data
                data += "<td>" + (i+1) + " - " + this.tasks[i] + "</td>"; // to add (td tag) contain index zero in tasks array
                data += '<td><button onclick="app.Edit('+i+')"class="btn-orange">Edit</button></td>';  // to add Edit button
                data += '<td><button onclick="app.Delete('+i+')" class="btn-red">Delete</button></td>';  // to add Delete button
                data += "</tr>";  // close tag
            }
        }
        this.count(this.tasks.length); // الترتيب الأبجدى للداتا
        return this.el.innerHTML = data; // item name
    };
    this.Add = function(){  // this function to add new elements to todo list
        el = document.getElementById("add-todo");
        var task = el.value;
        if(task){
            this.tasks.push(task.trim());
            el.value = '';
            this.FetchAll();
        }
    };
    this.Edit = function(item){  // to make update
        el = document.getElementById("edit-todo");
        el.value = this.tasks[item]
        document.getElementById("edit-box").style.display = 'block';
        self = this;
        document.getElementById("save-edit").onsubmit = function(){
            var task = el.value;
            if(task){
                self.tasks.splice(item, 1 ,task.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };
    this.Delete = function(item){
        this.tasks.splice(item,1)
        this.FetchAll();
    };
    this.count = function(data){
        var el = document.getElementById("counter");
        var name = "Tasks";
        if(data){
            if(data == 1){
                name = "Tasks";
            }
            el.innerHTML = data + ' ' + name;
        }else{
            el.innerHTML = "No " + name;
        }
    };
}
todoApp.FetchAll();

function CloseInput(){
    document.getElementById("edit-box").style.display = 'none';
}














