var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
    tabs()
    isCheck('reg')
    checkTabMenu()
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

function checkTabMenu() {
    var tabsmenu = document.querySelectorAll('#myTab');
// если таб меню на странице нет
    console.log(tabsmenu)
    if (!tabsmenu) return;

    [].forEach.call(tabsmenu, function(menu) {
        // вешаем обработчик события на каждый элемент коллекции - menu
        menu.addEventListener('click', function(e) {
            // проверяем, по какому именно элементу таб меню был сделан клик
            // если клик был сделан не по вкладке, которая формируется тэгом &lt;li&gt;,
            // то прекращаем работу функции и переходим в ожидание следующего клика
            if (e.target.tagName != 'LI') return;

            // вызываем функции переключения вкладок и блоков с контентом
            var currIndex = switchTab(menu, e.target);
            switchBlock(menu, currIndex);
        })
    });

    function switchTab(menu, tab) {
        // получаем коллекцию всех вкладок, которые входят в текущее таб меню
        var items = menu.querySelectorAll('.tab-item'),
            currIndex;

        // перебираем коллекцию вкладок
        [].forEach.call(items, function (item, index) {
            // удаляем, если встретится класс 'active', делая вкладку неактивной
            item.classList.remove('tab-list-active');
            // сравниваем текущий обрабатываемый элемент (item) с элементом,
            // на котором произошло событие (tab)
            // если они равны, то устанавливаем текущему элементу класс 'active'
            // и запоминаем index этого элемента
            if (item === tab) {
                item.classList.add('tab-list-active');
                currIndex = index;
            }
        });
        return currIndex;

    }

    function switchBlock(menu, currIndex) {
        // находим DIV, который расположен сразу после текущего таб меню
        // это DIV с классом 'container'
        var content	= menu.nextElementSibling,
            // коллекция блоков находящихся внутри полученного DIV'a
            blocks = content.querySelectorAll('.container > div');

        // перебираем коллекцию блоков с контентом и, если встречаем у них
        // атрибут 'style', удаляем его
        [].forEach.call(blocks, function(block, index) {
            block.removeAttribute('style');
            // если индекс блока совпадает с индексом активной вкладки
            // устанавливаем ему атрибут style = 'display:block;'
            if (index == currIndex) block.style.display = 'block';
        });
    }
}





function isCheck(name) {
    return document.querySelector('input[name="' + name + '"]:checked')
}
