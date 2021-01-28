var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
    tabs()
    isCheck('reg')
    isCheck('payType')
    checkTabMenu('.fees-tab')
});


function tabs() {
    var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
    triggerTabList.forEach(function (triggerEl) {
        var tabTrigger = new bootstrap.Tab(triggerEl)
        triggerTabList[0].style.backgroundColor = '#6db744'
        triggerTabList[0].style.color = '#ffffff'

        triggerEl.addEventListener('click', function (event) {
            event.preventDefault()
            tabTrigger.show()

        })
    })

}

function checkTabMenu() {
    const form = document.forms.form1
    const btnFirstStep = document.querySelector('#firstStep')

    form.addEventListener('change', () => {
        this.btnFirstStep.disabled = this.checkValidity() ? false : true
        triggerTabList.forEach(function (triggerEl) {
            var tabTrigger = new bootstrap.Tab(triggerEl)
            btnFirstStep.addEventListener('click', () => {
                triggerEl++
            })

            })
        })

}

console.log(tabs)


function isCheck(name) {
    return document.querySelector('input[name="' + name + '"]:checked')
}
