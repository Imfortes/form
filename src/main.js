var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
    tabs();
    isCheck(reg)
});


function tabs() {
    var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
    let btnNext = document.querySelector('.next-step')
    triggerTabList.forEach(function (triggerEl) {
        let tabTrigger = new bootstrap.Tab(triggerEl)


        triggerEl.addEventListener('click', function (event) {
            event.preventDefault()
            triggerTabList.map((item) => {
                item.classList.remove('step-active')
                if (event.target) {
                    triggerEl.style.backgroundColor = '#6DB746'
                }
            })
            // if (event.target.classList.contains('step-active'))
            //     triggerEl.classList.remove('step')

            console.log(triggerTabList)
            tabTrigger.show()
            console.log(tabTrigger)
            console.log(event.target)


        })
    })

}


function isCheck(name) {
    return document.querySelector('input[name="' + name + '"):checked')
}
