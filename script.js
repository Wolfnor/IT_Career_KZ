// 1. Данные вакансий загружаются из файла data.js.
const jobs = jobData;
const pageSize = 15;
let currentPage = 1;

// Находим элемент страницы по его id.
function getElement(id) {
    return document.getElementById(id);
}

// Получаем уникальные значения для выпадающих списков.
function getUniqueValues(field) {
    const values = jobs.map(function (job) {
        return job[field];
    });

    return [...new Set(values)].sort(function (a, b) {
        return a.localeCompare(b);
    });
}

// 3. Заполняем фильтры городов, категорий и опыта.
const filterFields = ['city', 'category', 'experience'];

filterFields.forEach(function (field) {
    getUniqueValues(field).forEach(function (value) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = translateValue(field, value);
        getElement(field).append(option);
    });
});

// 4. Отбираем вакансии по поисковому запросу и фильтрам.
function getFilteredJobs() {
    const searchText = getElement('search').value.trim().toLocaleLowerCase();

    return jobs.filter(function (job) {
        const jobText = (job.title + ' ' + job.company + ' ' + translateValue('category', job.category)).toLocaleLowerCase();
        const matchesSearch = searchText === '' || jobText.includes(searchText);
        const matchesFilters = filterFields.every(function (field) {
            const selectedValue = getElement(field).value;
            return selectedValue === '' || job[field] === selectedValue;
        });

        return matchesSearch && matchesFilters;
    });
}

// Создаём ячейку таблицы. textContent выводит данные как обычный текст.
function addCell(row, text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    row.append(cell);
    return cell;
}

// Создаём одну строку с вакансией и её подробностями.
function createJobRow(job) {
    const row = document.createElement('tr');
    const firstCell = addCell(row, '');

    const title = document.createElement('span');
    title.className = 'jobtitle';
    title.textContent = job.title;

    const company = document.createElement('span');
    company.className = 'company';
    company.textContent = job.company + ' · ' + translateValue('category', job.category);
    firstCell.append(title, company);

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = translate('details');
    details.append(summary);

    const detailFields = [
        ['requirements', 'requirements'],
        ['responsibilities', 'responsibilities'],
        ['employment', 'employment']
    ];

    detailFields.forEach(function (field) {
        const paragraph = document.createElement('p');
        paragraph.textContent = translate(field[0]) + ': ' + (job[field[1]] ? translateValue(field[1], job[field[1]]) : translate('notSpecified'));
        details.append(paragraph);
    });

    firstCell.append(details);
    addCell(row, translateValue('city', job.city));
    addCell(row, translateValue('experience', job.experience));
    addCell(row, job.salary || translate('notSpecified')).className = 'salary';
    addCell(row, job.date);

    return row;
}

// 5. Показываем вакансии текущей страницы.
function renderJobs() {
    const filteredJobs = getFilteredJobs();
    const totalPages = Math.max(1, Math.ceil(filteredJobs.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);

    const tableBody = getElement('jobsBody');
    tableBody.replaceChildren();

    const startIndex = (currentPage - 1) * pageSize;
    const visibleJobs = filteredJobs.slice(startIndex, startIndex + pageSize);

    visibleJobs.forEach(function (job) {
        tableBody.append(createJobRow(job));
    });

    if (filteredJobs.length === 0) {
        const row = document.createElement('tr');
        const cell = addCell(row, translate('noResults'));
        cell.colSpan = 5;
        tableBody.append(row);
    }

    getElement('count').textContent = translate('matching', { count: filteredJobs.length.toLocaleString(currentLanguage) });
    getElement('page').textContent = translate('page', { current: currentPage, total: totalPages });
    getElement('prev').disabled = currentPage === 1;
    getElement('next').disabled = currentPage >= totalPages;
    updateAnalytics(filteredJobs);
}

// 6. При изменении фильтров возвращаемся на первую страницу.
function updateFilters() {
    currentPage = 1;
    renderJobs();
}

getElement('search').addEventListener('input', updateFilters);

filterFields.forEach(function (field) {
    getElement(field).addEventListener('change', updateFilters);
});

getElement('prev').onclick = function () {
    currentPage--;
    renderJobs();
};

getElement('next').onclick = function () {
    currentPage++;
    renderJobs();
};

getElement('reset').onclick = function () {
    getElement('search').value = '';
    filterFields.forEach(function (field) {
        getElement(field).value = '';
    });
    updateFilters();
};

// 7. Общие фильтры для таблицы и диаграмм.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const numberAnimations = new WeakMap();
const disclosure = document.querySelector('.charts-disclosure');

// Плавно меняем число; предыдущая анимация отменяется при новом выборе.
function animateNumber(element, target) {
    cancelAnimationFrame(numberAnimations.get(element));
    const start = Number(element.dataset.number || 0);
    element.dataset.target = target;
    if (reducedMotion.matches || start === target) {
        element.dataset.number = target;
        element.textContent = target.toLocaleString(currentLanguage);
        return;
    }
    const began = performance.now();
    function frame(now) {
        const progress = Math.min(1, (now - began) / 550);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(start + (target - start) * eased);
        element.dataset.number = value;
        element.textContent = value.toLocaleString(currentLanguage);
        if (progress < 1) numberAnimations.set(element, requestAnimationFrame(frame));
    }
    numberAnimations.set(element, requestAnimationFrame(frame));
}

// Используем настоящие значения датасета; переводы нужны только для подписей.
function createChart(field, containerId, data = getFilteredJobs(), replay = false) {
    const container = getElement(containerId);
    const counts = new Map();
    data.forEach(function (job) {
        counts.set(job[field], (counts.get(job[field]) || 0) + 1);
    });
    const topValues = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
    const existing = new Map([...container.querySelectorAll('.barrow')].map(row => [row.dataset.value, row]));
    container.querySelector('.chart-empty')?.remove();
    existing.forEach(function (row, value) {
        if (!topValues.some(entry => entry[0] === value)) row.remove();
    });
    if (!topValues.length) {
        const message = document.createElement('p');
        message.className = 'chart-empty';
        message.textContent = translate('noResults');
        container.append(message);
        return;
    }
    topValues.forEach(function ([name, count]) {
        let row = existing.get(name);
        const isNew = !row;
        if (!row) {
            row = document.createElement('button');
            row.type = 'button';
            row.className = 'barrow';
            row.dataset.value = name;
            const label = document.createElement('span');
            const track = document.createElement('span');
            track.className = 'track';
            const bar = document.createElement('span');
            bar.className = 'bar';
            bar.style.width = '0%';
            track.append(bar);
            const number = document.createElement('span');
            row.append(label, track, number);
            row.addEventListener('click', function () {
                getElement(field).value = getElement(field).value === name ? '' : name;
                updateFilters();
            });
        }
        row.children[0].textContent = translateValue(field, name);
        const text = translate('chartValue', {name: translateValue(field, name), count: count.toLocaleString(currentLanguage)});
        row.title = text;
        row.setAttribute('aria-label', text);
        row.setAttribute('aria-pressed', String(getElement(field).value === name));
        animateNumber(row.children[2], count);
        container.append(row);
        const bar = row.querySelector('.bar');
        if (replay || isNew) {
            bar.style.transition = 'none';
            bar.style.width = '0%';
            void bar.offsetWidth;
            bar.style.transition = '';
        }
        bar.style.width = (count / topValues[0][1] * 100) + '%';
    });
}

function updateAnalytics(data) {
    animateNumber(getElement('total'), data.length);
    animateNumber(getElement('cities'), new Set(data.map(job => job.city)).size);
    animateNumber(getElement('categories'), new Set(data.map(job => job.category)).size);
    animateNumber(getElement('salaryCount'), data.filter(job => job.salary.trim() !== '').length);
    getElement('chartCount').textContent = translate('matching', {count: data.length.toLocaleString(currentLanguage)});
    ['search', ...filterFields].forEach(function (field) {
        const original = getElement(field);
        const mirror = getElement('chart-' + field);
        mirror.value = original.value;
        if (field !== 'search') {
            [...mirror.options].forEach(function (option) {
                if (option.value) option.textContent = translateValue(field, option.value);
            });
        }
    });
    if (disclosure.open) {
        createChart('city', 'cityChart', data);
        createChart('category', 'categoryChart', data);
    }
}

// В разделе диаграмм повторяем те же элементы управления.
['search', ...filterFields].forEach(function (field) {
    const original = getElement(field);
    const label = original.closest('label').cloneNode(true);
    label.htmlFor = 'chart-' + field;
    const mirror = label.querySelector('input, select');
    mirror.id = 'chart-' + field;
    mirror.addEventListener(field === 'search' ? 'input' : 'change', function () {
        original.value = mirror.value;
        updateFilters();
    });
    getElement('chartFilters').append(label);
});
getElement('chartReset').addEventListener('click', function () { getElement('reset').click(); });
disclosure.addEventListener('toggle', function () {
    if (disclosure.open) {
        const data = getFilteredJobs();
        createChart('city', 'cityChart', data, true);
        createChart('category', 'categoryChart', data, true);
    }
});

// 8. Первое отображение страницы.
renderJobs();
