let taskcontainer=document.getElementById("taskcontainer");
let addbutton=document.getElementById("add");
let taskinput=document.getElementById("taskiput");
let tasklist=[];
let done=[];
let todo=[];
let mode="all";// all done todo



document.getElementById("all").onclick=function(){mode="all";update();};
document.getElementById("done").onclick=function(){mode="done";update();};
document.getElementById("todo").onclick=function(){mode="todo";update();};

addbutton.onclick=function(){
    if(taskinput.value!=""){
        tasklist[tasklist.length]=new taskobject(taskinput.value);
        todo[todo.length]=tasklist[tasklist.length-1];
        taskinput.value="";
        update();
    }
}



class taskobject{

    constructor(textv){
        this.container=document.createElement("div");
        this.addcheckbox();
        this.addtext(textv);
        this.adddelete()
        this.addedit()
        this.container.classList.add("taskobject");
    }
    addcheckbox(){
        this.checkbox=document.createElement("INPUT");
        this.checkbox.setAttribute("type","checkbox");
        this.container.append(this.checkbox);

        let thisclass=this;
        this.checkbox.onclick=function(){

            if (thisclass.checkbox.checked){
                done[done.length]=thisclass;
                todo.splice(todo.indexOf(thisclass),1);
            }
            else{
                todo[todo.length]=thisclass;
                done.splice(done.indexOf(thisclass),1);
            }
            update();
        }
        
    }

    addtext(textv){
        this.textdiv=document.createElement("div");
        this.textdiv.classList.add("taskinput")
        this.textdiv.innerHTML=textv;
        this.container.append(this.textdiv);
    }
    adddelete(){
        this.delete=document.createElement("button");
        this.delete.innerHTML="delete";
        this.delete.classList.add("delete")
        this.container.append(this.delete);
        let thisclass=this;
        this.delete.onclick=function(){
            tasklist.splice(tasklist.indexOf(thisclass),1);

            if(done.indexOf(thisclass)!=-1){done.splice(done.indexOf(thisclass),1);};
            if(todo.indexOf(thisclass)!=-1){todo.splice(todo.indexOf(thisclass),1);};
            update();
        }
    }


    addedit(){
        this.edit=document.createElement("button");
        this.edit.innerHTML="edit";
        this.edit.classList.add("edit")
        this.container.append(this.edit);
        let thisclass=this;
        this.editable=false;
        this.edit.onclick=function(){
            if(this.editable){
                thisclass.textdiv.contentEditable="false";   
                this.editable=false;
                thisclass.textdiv.classList.remove("editable")
            }
            else{
                thisclass.textdiv.contentEditable="true";   
                this.editable=true;
                thisclass.textdiv.classList.add("editable")
            }
            
        }        
    }



}



function update(){
    while (taskcontainer.firstChild) {
        taskcontainer.removeChild(taskcontainer.firstChild);
    }
    if (mode=="all"){
        for (i=0;i<tasklist.length;i++){
            taskcontainer.append(tasklist[i].container);
        }
    }
    if (mode=="done"){
        for (i=0;i<done.length;i++){
            taskcontainer.append(done[i].container);
        }
    }
    if (mode=="todo"){
        for (i=0;i<todo.length;i++){
            taskcontainer.append(todo[i].container);
        }
    }
}