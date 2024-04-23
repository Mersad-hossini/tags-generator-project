let $ = document;

let ulTag = $.querySelector("ul");
let inputElem = $.querySelector("ul input");
let removeBtn = $.querySelector(".remove-button");
let tagRemain = $.querySelector(".tag-remain")

let tags = [];
let maxTags = 10;

const addTags = (event) => {

    if(event.keyCode === 13) {
        let tagTitle = event.target.value.trim()

        if(tags.length < 10 && !tags.includes(tagTitle.toLowerCase())) {
            tagTitle.split(",").forEach(tag => {
                tags.push(tag.toLowerCase())
                setDatas()
            })
        }
        event.target.value = ""
    }
}

const setDatas = () => {
    removeAllLis();
    [...tags].reverse().forEach(item => {
        ulTag.insertAdjacentHTML("afterbegin", `<li>${item}<i class='uit uit-multiply' onclick='removeTag(this, "${item}")'></i></li>`)
    })
    countTags()
}

const removeTag = (el, liName) => {
    el.parentElement.remove()
    tags = tags.filter(tag => tag !== liName)
    countTags()
}

const removeAllLis = () => {
    ulTag.querySelectorAll("li").forEach(tag => tag.remove())
} 

const countTags = () => {
    inputElem.focus()
    tagRemain.innerHTML = maxTags - tags.length
}

removeBtn.addEventListener("click", () => {
    tags = []
    removeAllLis()
    countTags() 
})

inputElem.addEventListener("keyup", addTags)