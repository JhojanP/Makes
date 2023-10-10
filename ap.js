class Tarea{
    constructor(id,title,subTitle,status){
        this.id=id;
        this.title=title;
        this.subTitle=subTitle;
        this.status=status;
    }
}

  

class List  { 
    constructor(){
        this.List=[];
    }

    Init(){

    }

    Add(item){
        this.List.push(Tarea);
        this.Render();
    }

    Delete(item){
        this.List.slice( )
    }

    Render(){

    } 
}