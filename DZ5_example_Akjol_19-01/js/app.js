const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active")
    tabContent[i].classList.add('show', 'fade')
};

// 1
let s = 0;

function SliderAuto() {
    const slider = setInterval((i) => {
        s++;
        if (s > 3) {
            s = 0;
        }
        hideTabContent();
        showTabContent(s);
    }, 2000)
}

hideTabContent();
showTabContent();
SliderAuto();

tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
                s = i;
            }
        } );
    }
});


const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
};


const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// 2
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
        console.log(event.target)
    }
});

closeModalBtn.addEventListener("click", closeModal);

const openScrollModal = () => {
    const down = document.documentElement;

    if (down.scrollTop + down.clientHeight >= down.scrollHeight) {
        openModal();
        document.body.style.overflow = "hidden";
    }
}
window.addEventListener("scroll", openScrollModal)

// dz5
const forms = document.querySelectorAll("form");

const  postData =(form)=>{
    form.addEventListener('submit',(event) => {
        event.preventDefault()
        const req = new XMLHttpRequest();
        req.open("POST", "server.php");
        req.setRequestHeader("Content-type", "application/json");

        const formData = new FormData(form);
        const obj = {}

        formData.forEach((item, name) => {
            obj[name] = item
        });
        console.log(obj)
        const json = JSON.stringify(obj)
        req.send(json)
    })}

forms.forEach((form)  => {
    postData(form)
})