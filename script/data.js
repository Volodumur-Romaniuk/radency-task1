var arrNotes = [
    {
        id:1,
        name:"New Feature",
        dateCreate:"April 27,2021",
        category:"Idea",
        content:"Lorem ipsum dolor, 22/12/20 22/12/20",
        archieved:false
        
    },
    {
        id:2,
        name:"New Feature",
        dateCreate:"April 27,2021",
        category:"Random-Thought",
        content:"Lorem ipsum dolor, 22/10/20 22/12/20 ",
        archieved:false
       
    },
    {
        id:3,
        name:"New Feature",
        dateCreate:"April 27,2021",
        category:"Task",
        content:"Lorem ipsum dolor,",
        archieved:true
        
    },
    {
        id:4,
        name:"New Feature",
        dateCreate:"April 27,2021",
        category:"Idea",
        content:"Lorem ipsum dolor,",
        archieved:false
       
    },
    {
        id:5,
        name:"New Feature",
        dateCreate:"April 27,2021",
        category:"Idea",
        content:"Lorem ipsum dolor, 22/10/20 ",
        archieved:false
       
    }
]
//export {arrNotes};

/*var obj = {};

const removeNotes = (e) => {
   
    let buttondel = document.getElementById(e);
    let idNote = buttondel.parentElement.parentElement.id;
    buttondel.parentElement.parentElement.remove();
    arrNotes = arrNotes.filter(elem => elem.id != idNote )
    call();
}


const removeAllNotes = () => {
    
    arrNotes = [];
   call();
}

const findDate = (str) => {
    const check = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;
    var res_str = ""
    str?.match(check)?.forEach((element) => {
        res_str += "'" + element + "'" + ',  ';
    });
    return str?.match(check) === null ? " " : res_str
}
const renderIcon = (category) => {
    switch (category) {
        case "Idea":
            return "far fa-lightbulb";
        case "Task":
            return "fas fa-tasks";
        case "Random-Thought":
            return "fas fa-random";
    }

}
const renderNotes = () => {

    let notes = document.getElementsByClassName("notes")[0];
        console.log(arrNotes)
        arrNotes.filter(elem => !elem.archieved)?.forEach(element => {
            notes.innerHTML += `
            <div class="note" id="${element.id}"  >
                <div class="name-block">
                    <div class="img">
                        <i class="${renderIcon(element.category)}"></i>
                    </div>
                    <div class="text">
                        <p> ${subStr(element.name)}</p>
                    </div>
                </div> 
                <div class="created-block">
                    <div class="text">
                        <p>${element.dateCreate}</p>
                    </div>
                </div>
                <div class="category-block">
                    <div class="text">
                        <p>${subStr(element.category)}</p>
                    </div>
                </div>
                <div class="content-block">
                    <div class="text">
                        <p>${subStr(element.content)}</p>
                    </div>
                </div>
                <div class="dates-block">
                    <div class="text">
                        <p>${subStr(findDate(element.content))}</p>
                    </div>
                </div>
                <div class="buttons-block">
                    <button class ="update" id = "button-update${element.id}" onclick="updatePopup(this.id)" > <i class="fas fa-pencil-alt"></i></button>
                    <button class = "archived" id = "button-arch${element.id}" onclick="archievedNote(this.id)" > <i class="fas fa-arrow-alt-circle-down"></i></button>
                    <button class = "delete" id ="button-del${element.id}" onclick="removeNotes(this.id)" > <i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            `
        });

   
}

const subStr = (str) => {

    return str?.length > 18 ? str.slice(0, 18) + '...' : str
}

const sortedByCategories = ()=> {
    
    const caterories = arrNotes.reduce((prev, current) => {
        !prev.includes(current.category) && prev.push(current.category);
        return prev;
    }, [])

    const final = caterories.reduce((prev, current) => {
        let active = 0;
        let archieved = 0;

        arrNotes.map(elem => {
            if (current == elem.category) {
                elem.archieved ? ++archieved : ++active
            }
        })
        prev[current] = {
            active,
            archieved
        }
        return prev
    }, {})

   call()
    let notesSorted = document.getElementsByClassName("notes-sorted")[0];
    caterories.map(elem => {
        notesSorted.innerHTML += `
            <div class="note" >
                <div class="name-block">
                    <div class="img">
                        <i class="${renderIcon(elem)}"></i>
                    </div>
                    <div class="text">
                        <p> ${subStr(elem)}</p>
                    </div>
                </div> 
                <div class="text"><p>${final[elem].active}</p>
                </div>
                <div class="text">
                    <p>${final[elem].archieved}</p>
                </div>
            </div>`})

    
}

const updatePopup = (el) => {

    let buttonUpdate = document.getElementById(el);
    let idUp = buttonUpdate.parentElement.parentElement.id;
    let popupUpdate = document.getElementsByClassName("update-popup")[0];
    document.getElementsByClassName('update-popup')[0].style.display = 'flex';
    let updateEl = arrNotes.find(element => element.id == idUp);

    let sortCategories = sortedCategories(updateEl.category);

    popupUpdate.innerHTML = `
        <div class="note" id="${updateEl.id}"  >
            <p>Update your note</p>
            <button id="close-update">Close</button>
            <div class="name-block-update">
                <textarea id="name-update-textarea" >${updateEl.name}</textarea>
           </div> 
            <div class="created-block-update">
                <textarea  >${updateEl.dateCreate}</textarea>
            </div>
            <div class="category-block-update">
                
                    <select id="category-update-textarea" name="category" >
                        <option selected value=${sortCategories[0]} >${sortCategories[0]}</option>
                        <option  value=${sortCategories[1]} >${sortCategories[1]}</option>
                        <option  value=${sortCategories[2]} >${sortCategories[2]}</option>
                    </select>
                
                
            </div>
            <div class="content-block-update">
                <textarea id="content-update-textarea" >${updateEl.content}</textarea>
            </div>
            <button onclick="updateData(${idUp})">Update</button>
        </div>`
    document.getElementById('close-update').onclick = () => {
        document.getElementsByClassName("update-popup")[0].style.display = 'none'
    }
}
const sortedCategories = (categories) => {
    let arrCategories = ["Random-Thought", "Task", "Idea"];
    let indexCategories = arrCategories.indexOf(categories);
    let res = [];
    arrCategories.splice(indexCategories, 1);
    res.push(categories);
    arrCategories.forEach(element => {
        res.push(element)
        console.log(element)
    })

    return res
}
const updateData = (elId) => {
    obj = {}
   
    let getName = document.getElementById('name-update-textarea').value;
    let getCategory = document.getElementById('category-update-textarea').value
    let getContent = document.getElementById('content-update-textarea').value
    document.getElementsByClassName("update-popup")[0].style.display = 'none'

    console.log(getName);
    console.log(getCategory);
    console.log(getContent);
    let updateEl = arrNotes.find(element => element.id == elId);
    let indexEl = arrNotes.indexOf(arrNotes.find(element => element.id == elId));

    obj = {
        id: updateEl.id,
        name: getName,
        dateCreate: updateEl.dateCreate,
        category: getCategory,
        content: getContent,
        archieved:updateEl.archieved
    }
    arrNotes[indexEl] = obj;

    call()

}

const archievedNote = (elId) => {
    obj = {}
    console.log("work")
    let buttondel = document.getElementById(elId);
    let idNote = buttondel.parentElement.parentElement.id;
    let updateEl = arrNotes.find(element => element.id == idNote);
    let indexEl = arrNotes.indexOf(arrNotes.find(element => element.id == elId));
    obj = {
        id: updateEl.id,
        name: updateEl.name,
        dateCreate: updateEl.dateCreate,
        category: updateEl.category,
        content: updateEl.content,
        archieved:true
    }
    console.log(obj)
    arrNotes[indexEl] = obj;
    console.log(arrNotes[indexEl]);
  
   call();

}


document.getElementById('close').onclick = () => {
    document.getElementsByClassName('create-note-popup')[0].style.display = 'none';
}

document.getElementById('create-note').onclick = () => {
    document.getElementsByClassName('create-note-popup')[0].style.display = 'flex';
    console.log("wor")

}

const notesDel = () => {
    let notes = document.getElementById('notes');
    
    while (notes.firstChild) {
        notes.removeChild(notes.lastChild)
    }
  
}

const notesSortDel = () => {
    let notes = document.getElementsByClassName('notes-sorted')[0];
    while (notes.firstChild) {
        notes.removeChild(notes.lastChild)
    }
}

const addNotes = (event) => {

    event.preventDefault();
    
    obj = {}
    let getName = document.getElementById('name-input').value;
    let getCategory = document.getElementById('select-category').value
    let getContent = document.getElementById('content-textarea').value

    let today = new Date()

    convertTodayDate = moment(today).format('MMMM DD YYYY')
    getLastId = arrNotes.length === 0 ? arrNotes[arrNotes.length - 1] : 0;

    obj = {
        id: getLastId?.id + 1,
        name: getName,
        dateCreate: convertTodayDate,
        category: getCategory,
        content: getContent.value,
        archieved:false,
    }
    arrNotes.push(obj)
    call();
    document.getElementsByClassName('create-note-popup')[0].style.display = 'none';

}

const call = () =>{
    console.log("work")
    notesDel();
    notesSortDel();
    renderNotes();
    sortedByCategories();
}
//call();
renderNotes();
sortedByCategories(); */