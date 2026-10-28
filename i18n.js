// Переводы интерфейса. Английский используется при первом открытии.
const translations = {
    "soundOff": {
        "en": "Turn click sounds off",
        "ru": "Выключить звук нажатий",
        "kk": "Басу дыбысын өшіру"
    },
    "soundOn": {
        "en": "Turn click sounds on",
        "ru": "Включить звук нажатий",
        "kk": "Басу дыбысын қосу"
    },
    "skip": {
        "en": "Go to job list",
        "ru": "Перейти к вакансиям",
        "kk": "Вакансияларға өту"
    },
    "country": {
        "en": "Kazakhstan",
        "ru": "Казахстан",
        "kk": "Қазақстан"
    },
    "topnote": {
        "en": "IT jobs · Data from 2023",
        "ru": "IT-вакансии · Данные за 2023 год",
        "kk": "IT-вакансиялар · 2023 жылғы деректер"
    },
    "navJobs": {
        "en": "Job list",
        "ru": "Вакансии",
        "kk": "Вакансиялар"
    },
    "navInsights": {
        "en": "Charts",
        "ru": "Диаграммы",
        "kk": "Диаграммалар"
    },
    "navAbout": {
        "en": "About this site",
        "ru": "О сайте",
        "kk": "Сайт туралы"
    },
    "navExplore": {
        "en": "View jobs ↗",
        "ru": "Смотреть вакансии ↗",
        "kk": "Вакансияларды көру ↗"
    },
    "heroCTA": {
        "en": "View jobs →",
        "ru": "Смотреть вакансии →",
        "kk": "Вакансияларды көру →"
    },
    "heroCharts": {
        "en": "View charts",
        "ru": "Смотреть диаграммы",
        "kk": "Диаграммаларды көру"
    },
    "heroKicker": {
        "en": "IT CAREERS IN KAZAKHSTAN",
        "ru": "IT-КАРЬЕРА В КАЗАХСТАНЕ",
        "kk": "ҚАЗАҚСТАНДАҒЫ IT-МАНСАП"
    },
    "heroTitle": {
        "en": "Explore IT jobs in Kazakhstan.",
        "ru": "Изучайте IT-вакансии Казахстана.",
        "kk": "Қазақстандағы IT-вакансияларды зерттеңіз."
    },
    "heroText": {
        "en": "Find job roles, cities and work experience requirements. Use the filters to explore the data.",
        "ru": "Узнайте, какие профессии, города и опыт указаны в вакансиях. Используйте фильтры для поиска.",
        "kk": "Вакансиялардағы мамандықтарды, қалаларды және тәжірибе талаптарын қараңыз. Іздеу үшін сүзгілерді қолданыңыз."
    },
    "heroLocation": {
        "en": "Local teams. Shared ideas. New skills.",
        "ru": "Местные команды. Общие идеи. Новые навыки.",
        "kk": "Отандық командалар. Ортақ идеялар. Жаңа дағдылар."
    },
    "overviewKicker": {
        "en": "ABOUT THE DATA",
        "ru": "О ДАННЫХ",
        "kk": "ДЕРЕКТЕР ТУРАЛЫ"
    },
    "overviewTitle": {
        "en": "The job market in numbers",
        "ru": "Рынок вакансий в цифрах",
        "kk": "Вакансиялар нарығы сандармен"
    },
    "overviewText": {
        "en": "Data from 2023. These numbers follow your search and filters.",
        "ru": "Данные за 2023 год. Показатели меняются при поиске и фильтрации.",
        "kk": "2023 жылғы деректер. Көрсеткіштер іздеу мен сүзгілерге сай өзгереді."
    },
    "listings": {
        "en": "Job listings",
        "ru": "Вакансии",
        "kk": "Вакансиялар"
    },
    "listingsSmall": {
        "en": "Listings matching your filters",
        "ru": "Записи по выбранным фильтрам",
        "kk": "Сүзгілерге сәйкес жазбалар"
    },
    "cities": {
        "en": "Cities",
        "ru": "Города",
        "kk": "Қалалар"
    },
    "citiesSmall": {
        "en": "Cities in the selected results",
        "ru": "Города в выбранных результатах",
        "kk": "Таңдалған нәтижелердегі қалалар"
    },
    "categories": {
        "en": "Job categories",
        "ru": "Категории вакансий",
        "kk": "Вакансия санаттары"
    },
    "categoriesSmall": {
        "en": "IT and related jobs",
        "ru": "IT и смежные профессии",
        "kk": "IT және сабақтас мамандықтар"
    },
    "salary": {
        "en": "With salary",
        "ru": "С зарплатой",
        "kk": "Жалақысы көрсетілген"
    },
    "salarySmall": {
        "en": "Listings that show a salary",
        "ru": "Вакансии с указанной зарплатой",
        "kk": "Жалақысы бар вакансиялар"
    },
    "jobsKicker": {
        "en": "FIND A JOB ROLE",
        "ru": "НАЙДИТЕ ПРОФЕССИЮ",
        "kk": "МАМАНДЫҚТЫ ТАБЫҢЫЗ"
    },
    "jobsTitle": {
        "en": "Job list",
        "ru": "Список вакансий",
        "kk": "Вакансиялар тізімі"
    },
    "jobsIntro": {
        "en": "Search by job title or company. Then choose a city, category or experience level.",
        "ru": "Ищите по должности или компании. Затем выберите город, категорию или опыт.",
        "kk": "Лауазым немесе компания бойынша іздеңіз. Содан кейін қаланы, санатты немесе тәжірибені таңдаңыз."
    },
    "historical": {
        "en": "Data from 2023",
        "ru": "Данные за 2023 год",
        "kk": "2023 жылғы деректер"
    },
    "searchLabel": {
        "en": "Job title or company",
        "ru": "Должность или компания",
        "kk": "Лауазым немесе компания"
    },
    "cityLabel": {
        "en": "City",
        "ru": "Город",
        "kk": "Қала"
    },
    "categoryLabel": {
        "en": "Job category",
        "ru": "Категория",
        "kk": "Вакансия санаты"
    },
    "experienceLabel": {
        "en": "Work experience",
        "ru": "Опыт работы",
        "kk": "Жұмыс тәжірибесі"
    },
    "allCities": {
        "en": "All cities",
        "ru": "Все города",
        "kk": "Барлық қала"
    },
    "allCategories": {
        "en": "All categories",
        "ru": "Все категории",
        "kk": "Барлық санат"
    },
    "allExperience": {
        "en": "Any experience",
        "ru": "Любой опыт",
        "kk": "Кез келген тәжірибе"
    },
    "reset": {
        "en": "Reset filters ↺",
        "ru": "Сбросить фильтры ↺",
        "kk": "Сүзгілерді тазарту ↺"
    },
    "jobCompany": {
        "en": "Job and company",
        "ru": "Вакансия и компания",
        "kk": "Вакансия және компания"
    },
    "salaryHeader": {
        "en": "Salary",
        "ru": "Зарплата",
        "kk": "Жалақы"
    },
    "posted": {
        "en": "Date",
        "ru": "Дата",
        "kk": "Күні"
    },
    "pageHelp": {
        "en": "15 jobs per page. Open Details to read more.",
        "ru": "15 вакансий на странице. Откройте «Подробнее», чтобы узнать больше.",
        "kk": "Әр бетте 15 вакансия бар. Қосымша ақпарат үшін «Толығырақ» тармағын ашыңыз."
    },
    "previous": {
        "en": "← Previous",
        "ru": "← Назад",
        "kk": "← Артқа"
    },
    "next": {
        "en": "Next →",
        "ru": "Далее →",
        "kk": "Алға →"
    },
    "dataNote": {
        "en": "Salaries are shown as listed. Job titles, company names and full job texts stay in the source language.",
        "ru": "Зарплаты показаны как в источнике. Названия вакансий, компаний и полные тексты сохранены на языке источника.",
        "kk": "Жалақы дереккөздегідей көрсетілген. Вакансия, компания атаулары және толық мәтіндер бастапқы тілде сақталған."
    },
    "insightsKicker": {
        "en": "LOOK AT THE NUMBERS",
        "ru": "ПОСМОТРИТЕ НА ЦИФРЫ",
        "kk": "САНДАРҒА НАЗАР АУДАРЫҢЫЗ"
    },
    "insightsTitle": {
        "en": "Job market charts",
        "ru": "Диаграммы рынка вакансий",
        "kk": "Вакансиялар нарығының диаграммалары"
    },
    "chartsHelp": {
        "en": "Charts and numbers follow your filters. Click a bar to select or clear a city or category.",
        "ru": "Диаграммы и показатели зависят от фильтров. Нажмите на столбик, чтобы выбрать или отменить город или категорию.",
        "kk": "Диаграммалар мен көрсеткіштер сүзгілерге сай өзгереді. Қаланы не санатты таңдау немесе алып тастау үшін бағанды басыңыз."
    },
    "chartValue": {
        "en": "{name}: {count} listings. Click to toggle this filter.",
        "ru": "{name}: {count} записей. Нажмите, чтобы изменить фильтр.",
        "kk": "{name}: {count} жазба. Сүзгіні өзгерту үшін басыңыз."
    },
    "unused": {
        "en": "",
        "ru": "",
        "kk": ""
    },
    "cityChart": {
        "en": "Cities with the most listings",
        "ru": "Города с наибольшим числом вакансий",
        "kk": "Вакансиясы ең көп қалалар"
    },
    "cityChartHelp": {
        "en": "Top 5 cities in your results",
        "ru": "Топ-5 городов в результатах",
        "kk": "Нәтижелердегі үздік 5 қала"
    },
    "roleChart": {
        "en": "Most common job categories",
        "ru": "Самые частые категории",
        "kk": "Ең жиі кездесетін санаттар"
    },
    "roleChartHelp": {
        "en": "Top 5 categories in your results",
        "ru": "Топ-5 категорий в результатах",
        "kk": "Нәтижелердегі үздік 5 санат"
    },
    "aboutKicker": {
        "en": "ABOUT THIS PROJECT",
        "ru": "О ПРОЕКТЕ",
        "kk": "ЖОБА ТУРАЛЫ"
    },
    "aboutTitle": {
        "en": "Simple data. Clear choices.",
        "ru": "Понятные данные. Осознанный выбор.",
        "kk": "Түсінікті деректер. Саналы таңдау."
    },
    "aboutText": {
        "en": "My name is Ayaulym. I study Information Systems. I made IT Career KZ to help people explore job data from Kazakhstan.",
        "ru": "Меня зовут Аяулым. Я учусь на специальности «Информационные системы». Я создала IT Career KZ для изучения данных о вакансиях Казахстана.",
        "kk": "Менің атым — Аяулым. Мен «Ақпараттық жүйелер» мамандығында оқимын. Қазақстандағы вакансиялар туралы деректерді зерттеу үшін IT Career KZ сайтын жасадым."
    },
    "sourceLink": {
        "en": "View the dataset on Kaggle ↗",
        "ru": "Открыть датасет на Kaggle ↗",
        "kk": "Kaggle датасетін ашу ↗"
    },
    "methodTitle": {
        "en": "What is in the data?",
        "ru": "Что содержится в данных?",
        "kk": "Деректер нені қамтиды?"
    },
    "methodRows": {
        "en": "The file has 1,754 rows and 1,508 unique job links. Some jobs appear more than once. Counts include these repeated rows.",
        "ru": "В файле 1 754 строки и 1 508 уникальных ссылок. Некоторые вакансии повторяются. Повторы включены в подсчёт.",
        "kk": "Файлда 1 754 жол және 1 508 бірегей сілтеме бар. Кейбір вакансиялар қайталанады. Қайталанатын жолдар есепке алынған."
    },
    "methodLimit": {
        "en": "The data is from 2023. It includes IT, HR and recruitment jobs. This site does not show live jobs or accept job applications.",
        "ru": "Данные относятся к 2023 году. Здесь есть IT, HR и подбор персонала. Сайт не показывает вакансии в реальном времени и не принимает отклики.",
        "kk": "Деректер 2023 жылға тиесілі. IT, HR және персонал іріктеу вакансиялары бар. Сайттағы вакансиялар нақты уақытта жаңартылмайды және өтінім қабылданбайды."
    },
    "download": {
        "en": "Download CSV ↓",
        "ru": "Скачать CSV ↓",
        "kk": "CSV жүктеу ↓"
    },
    "noScript": {
        "en": "Turn on JavaScript to use search, filters and charts. You can still download the CSV file.",
        "ru": "Включите JavaScript для поиска, фильтров и диаграмм. CSV можно скачать и без него.",
        "kk": "Іздеу, сүзгілер және диаграммалар үшін JavaScript қосыңыз. CSV файлын онсыз да жүктеуге болады."
    },
    "footerTag": {
        "en": "Explore IT careers with data.",
        "ru": "Изучайте IT-карьеру с помощью данных.",
        "kk": "Деректер арқылы IT-мансапты зерттеңіз."
    },
    "backTop": {
        "en": "Back to top ↑",
        "ru": "Наверх ↑",
        "kk": "Жоғарыға ↑"
    },
    "footerAuthor": {
        "en": "Created by Ayaulym · Kazakhstan",
        "ru": "Автор: Аяулым · Казахстан",
        "kk": "Автор: Аяулым · Қазақстан"
    },
    "photoCredits": {
        "en": "Photo sources",
        "ru": "Источники фото",
        "kk": "Фото дереккөздері"
    },
    "photoContext": {
        "en": "All five banner photos were provided by the site creator. Photos are separate from the 2023 job dataset.",
        "ru": "Все пять фото баннера предоставлены автором сайта. Фотографии не относятся к датасету вакансий за 2023 год.",
        "kk": "Баннердегі бес фотоны сайт авторы ұсынды. Фотолар 2023 жылғы вакансиялар датасетіне кірмейді."
    },
    "placeholder": {
        "en": "e.g. Developer, Data Analyst…",
        "ru": "Например: аналитик, разработчик…",
        "kk": "Мысалы: талдаушы, бағдарламашы…"
    },
    "details": {
        "en": "Details",
        "ru": "Подробнее",
        "kk": "Толығырақ"
    },
    "requirements": {
        "en": "Requirements",
        "ru": "Требования",
        "kk": "Талаптар"
    },
    "responsibilities": {
        "en": "Tasks",
        "ru": "Обязанности",
        "kk": "Міндеттер"
    },
    "employment": {
        "en": "Job type",
        "ru": "Тип занятости",
        "kk": "Жұмыспен қамту түрі"
    },
    "notSpecified": {
        "en": "Not specified",
        "ru": "Не указано",
        "kk": "Көрсетілмеген"
    },
    "noResults": {
        "en": "No jobs found. Try another search or filter.",
        "ru": "Вакансии не найдены. Измените запрос или фильтр.",
        "kk": "Вакансия табылмады. Іздеу сөзін немесе сүзгіні өзгертіңіз."
    },
    "matching": {
        "en": "{count} listings found",
        "ru": "Найдено записей: {count}",
        "kk": "Табылған жазбалар: {count}"
    },
    "page": {
        "en": "Page {current} of {total}",
        "ru": "Страница {current} из {total}",
        "kk": "{current} / {total} бет"
    },
    "pause": {
        "en": "Pause",
        "ru": "Пауза",
        "kk": "Кідірту"
    },
    "play": {
        "en": "Play",
        "ru": "Продолжить",
        "kk": "Жалғастыру"
    },
    "pauseAria": {
        "en": "Pause photos",
        "ru": "Остановить смену фото",
        "kk": "Фотоларды тоқтату"
    },
    "playAria": {
        "en": "Play photos",
        "ru": "Продолжить смену фото",
        "kk": "Фотоларды жалғастыру"
    },
    "prevPhoto": {
        "en": "Previous photo",
        "ru": "Предыдущее фото",
        "kk": "Алдыңғы фото"
    },
    "nextPhoto": {
        "en": "Next photo",
        "ru": "Следующее фото",
        "kk": "Келесі фото"
    },
    "photo": {
        "en": "Photo {number}",
        "ru": "Фото {number}",
        "kk": "{number}-фото"
    },
    "choosePhoto": {
        "en": "Choose a photo",
        "ru": "Выбрать фото",
        "kk": "Фото таңдау"
    },
    "carouselLabel": {
        "en": "IT photos from Kazakhstan",
        "ru": "IT-фото из Казахстана",
        "kk": "Қазақстандағы IT-фотолар"
    },
    "tableLabel": {
        "en": "Job table. Scroll sideways on a small screen.",
        "ru": "Таблица вакансий. На небольшом экране прокручивайте вбок.",
        "kk": "Вакансиялар кестесі. Шағын экранда көлденең айналдырыңыз."
    },
    "mainNav": {
        "en": "Main menu",
        "ru": "Главное меню",
        "kk": "Негізгі мәзір"
    },
    "siteTitle": {
        "en": "IT Career KZ | IT Jobs in Kazakhstan",
        "ru": "IT Career KZ | IT-вакансии Казахстана",
        "kk": "IT Career KZ | Қазақстандағы IT-вакансиялар"
    },
    "brandTag": {
        "en": "JOBS · DATA · KAZAKHSTAN",
        "ru": "ВАКАНСИИ · ДАННЫЕ · КАЗАХСТАН",
        "kk": "ВАКАНСИЯЛАР · ДЕРЕКТЕР · ҚАЗАҚСТАН"
    },
    "caption0": {
        "en": "Software development · Writing code",
        "ru": "Разработка ПО · Написание кода",
        "kk": "Бағдарламалық жасақтама · Код жазу"
    },
    "caption1": {
        "en": "Project planning · Sharing ideas",
        "ru": "Планирование проекта · Обсуждение идей",
        "kk": "Жобаны жоспарлау · Идеяларды талқылау"
    },
    "caption2": {
        "en": "Data analysis · Working with numbers",
        "ru": "Анализ данных · Работа с цифрами",
        "kk": "Деректерді талдау · Сандармен жұмыс"
    },
    "caption3": {
        "en": "Programming · Learning with Python",
        "ru": "Программирование · Изучение Python",
        "kk": "Бағдарламалау · Python үйрену"
    },
    "caption4": {
        "en": "Teamwork · Solving tasks together",
        "ru": "Командная работа · Совместное решение задач",
        "kk": "Командалық жұмыс · Міндеттерді бірге шешу"
    },
    "uploadedPhotos": {
        "en": "Developer photos: Lukas Blazek and Christina Morillo / Pexels.",
        "ru": "Фото разработчиков: Lukas Blazek и Christina Morillo / Pexels.",
        "kk": "Әзірлеушілердің фотолары: Lukas Blazek және Christina Morillo / Pexels."
    },
    "showCharts": {
        "en": "Show charts",
        "ru": "Показать диаграммы",
        "kk": "Диаграммаларды көрсету"
    },
    "hideCharts": {
        "en": "Hide charts",
        "ru": "Скрыть диаграммы",
        "kk": "Диаграммаларды жасыру"
    },
    "guideTitle": {
        "en": "Welcome! Let me show you around.",
        "ru": "Добро пожаловать! Расскажу о сайте.",
        "kk": "Қош келдіңіз! Сайтпен таныстырайын."
    },
    "guideIntro": {
        "en": "A quick tour of search, filters and charts.",
        "ru": "Краткое знакомство с поиском, фильтрами и диаграммами.",
        "kk": "Іздеу, сүзгілер және диаграммалармен қысқаша танысу."
    },
    "guideVoice": {
        "en": "Voice",
        "ru": "Голос",
        "kk": "Дауыс"
    },
    "guideNote": {
        "en": "Computer-generated speech. Voices depend on your browser and device.",
        "ru": "Компьютерная озвучка. Доступные голоса зависят от браузера и устройства.",
        "kk": "Компьютерлік дыбыстау. Дауыстар браузер мен құрылғыға байланысты."
    },
    "guidePlay": {
        "en": "Listen",
        "ru": "Слушать",
        "kk": "Тыңдау"
    },
    "guidePause": {
        "en": "Pause",
        "ru": "Пауза",
        "kk": "Кідірту"
    },
    "guideResume": {
        "en": "Continue",
        "ru": "Продолжить",
        "kk": "Жалғастыру"
    },
    "guideStop": {
        "en": "Stop",
        "ru": "Остановить",
        "kk": "Тоқтату"
    },
    "guideTranscript": {
        "en": "Read the guide",
        "ru": "Прочитать текст",
        "kk": "Мәтінді оқу"
    },
    "guideReady": {
        "en": "Ready to play",
        "ru": "Готово к прослушиванию",
        "kk": "Тыңдауға дайын"
    },
    "guidePlaying": {
        "en": "Playing",
        "ru": "Воспроизводится",
        "kk": "Ойнатылуда"
    },
    "guidePaused": {
        "en": "Paused",
        "ru": "На паузе",
        "kk": "Кідіртілді"
    },
    "guideFinished": {
        "en": "Guide finished",
        "ru": "Рассказ завершён",
        "kk": "Түсіндірме аяқталды"
    },
    "guideError": {
        "en": "Speech could not start. Try again or choose another voice.",
        "ru": "Не удалось включить озвучку. Попробуйте ещё раз или выберите другой голос.",
        "kk": "Дыбыстау қосылмады. Қайталап көріңіз немесе басқа дауысты таңдаңыз."
    },
    "guideUnavailable": {
        "en": "Your browser does not support speech. You can read the guide below.",
        "ru": "Браузер не поддерживает озвучку. Текст доступен ниже.",
        "kk": "Браузер дыбыстауды қолдамайды. Мәтінді төменнен оқи аласыз."
    },
    "guideNoVoice": {
        "en": "No voice for this language is available. Try another site language or read the guide below.",
        "ru": "Для этого языка нет доступного голоса. Выберите другой язык сайта или прочитайте текст ниже.",
        "kk": "Бұл тілде дауыс қолжетімсіз. Сайттың басқа тілін таңдаңыз немесе мәтінді төменнен оқыңыз."
    },
    "guideText": {
        "en": "Hello! Welcome to IT Career KZ. Explore IT jobs across Kazakhstan and find roles that interest you. Start by typing a job title or company name in the search box. Use the filters to choose a city, job category or experience level. Open Details to read about the tasks, requirements and job type. Compare cities and see which job categories are most common in the Charts section. Press the arrow to open it. The charts and numbers update when you change your filters. You can also click a chart bar to select a city or category. To start a new search, press Reset filters. Use Previous and Next to browse more results. At the top, choose English, Kazakh or Russian. The job information is from 2023, so use it to explore career options rather than check current openings. Enjoy exploring!",
        "ru": "Привет! Добро пожаловать на IT Career KZ. Здесь вы можете изучить IT-профессии в разных городах Казахстана и найти интересные для себя направления. Начните с поиска: введите название должности или компании. С помощью фильтров выберите город, категорию и подходящий опыт работы. Нажмите «Подробнее», чтобы узнать об обязанностях, требованиях и типе занятости. В разделе диаграмм можно сравнить города и посмотреть самые распространённые категории вакансий. Нажмите на стрелку, чтобы открыть этот раздел. Диаграммы и показатели обновляются вместе с фильтрами. Можно нажать прямо на столбик, чтобы выбрать город или категорию. Для нового поиска нажмите «Сбросить фильтры». Кнопки «Назад» и «Далее» помогут просмотреть остальные результаты. Наверху можно выбрать русский, казахский или английский язык. Информация о вакансиях относится к 2023 году и помогает изучить карьерные направления, а не проверить текущие предложения работы. Приятного просмотра!",
        "kk": "Сәлем! IT Career KZ сайтына қош келдіңіз. Мұнда Қазақстанның әртүрлі қалаларындағы IT-мамандықтарды зерттеп, өзіңізге қызықты бағыттарды таба аласыз. Іздеу жолағына лауазым немесе компания атауын жазыңыз. Сүзгілер арқылы қаланы, санатты және жұмыс тәжірибесін таңдаңыз. Міндеттер, талаптар және жұмыс түрі туралы білу үшін «Толығырақ» тармағын ашыңыз. Диаграммалар бөлімінде қалаларды салыстырып, ең жиі кездесетін вакансия санаттарын көре аласыз. Бұл бөлімді ашу үшін көрсеткіні басыңыз. Диаграммалар мен көрсеткіштер сүзгілерге сай өзгереді. Қаланы немесе санатты таңдау үшін бағанның өзін басуға болады. Жаңа іздеуді бастау үшін «Сүзгілерді тазарту» батырмасын басыңыз. Басқа нәтижелерді «Артқа» және «Алға» батырмаларымен қараңыз. Жоғарыдан қазақ, орыс немесе ағылшын тілін таңдаңыз. Вакансиялар туралы ақпарат 2023 жылға тиесілі. Оны қазіргі бос жұмыс орындарын тексеру үшін емес, мансап бағыттарын зерттеу үшін пайдаланыңыз. Қолайлы бағыт табуыңызға тілектеспіз!"
    },
    "guideKicker": {
        "en": "AUDIO GUIDE",
        "ru": "АУДИОГИД",
        "kk": "АУДИОГИД"
    },
    "videoKicker": {
        "en": "MEET IT CAREER KZ",
        "ru": "ЗНАКОМСТВО С IT CAREER KZ",
        "kk": "IT CAREER KZ САЙТЫМЕН ТАНЫСУ"
    },
    "videoTitle": {
        "en": "Explore your options in IT.",
        "ru": "Откройте для себя мир IT.",
        "kk": "IT саласындағы мүмкіндіктеріңізді ашыңыз."
    },
    "videoIntro": {
        "en": "Watch a short introduction to the website, then explore jobs, cities and career paths.",
        "ru": "Посмотрите короткое видео о сайте, а затем изучите вакансии, города и карьерные направления.",
        "kk": "Сайт туралы қысқаша бейнені көріп, вакансияларды, қалаларды және мансап бағыттарын зерттеңіз."
    },
    "videoMeta": {
        "en": "50 seconds · Video in English",
        "ru": "50 секунд · Видео на английском",
        "kk": "50 секунд · Бейне ағылшын тілінде"
    },
    "videoLabel": {
        "en": "Introduction to IT Career KZ",
        "ru": "Видео-знакомство с IT Career KZ",
        "kk": "IT Career KZ туралы таныстыру бейнесі"
    },
    "videoFallback": {
        "en": "Your browser cannot play this video.",
        "ru": "Ваш браузер не может воспроизвести это видео.",
        "kk": "Браузеріңіз бұл бейнені ойната алмайды."
    },
    "videoOpen": {
        "en": "Open video",
        "ru": "Открыть видео",
        "kk": "Бейнені ашу"
    },
    "videoSeekError": {
        "en": "Could not finish loading. Press play to try again.",
        "ru": "Не удалось завершить загрузку. Нажмите воспроизведение ещё раз.",
        "kk": "Жүктеу аяқталмады. Қайталап ойнатып көріңіз."
    }
};
let currentLanguage = 'en';
try {
    const savedLanguage = localStorage.getItem('itCareerLanguage');
    if (['en', 'ru', 'kk'].includes(savedLanguage)) currentLanguage = savedLanguage;
} catch (error) {
    // На локальном файле хранилище может быть недоступно; сайт продолжает работать.
}

function translate(key, values = {}) {
    let text = translations[key]?.[currentLanguage] || translations[key]?.en || key;
    Object.keys(values).forEach(function (name) {
        text = text.replaceAll('{' + name + '}', String(values[name]));
    });
    return text;
}

const cityNames = {
    "Алматы": {
        "en": "Almaty",
        "ru": "Алматы",
        "kk": "Алматы"
    },
    "Астана": {
        "en": "Astana",
        "ru": "Астана",
        "kk": "Астана"
    },
    "Актобе": {
        "en": "Aktobe",
        "ru": "Актобе",
        "kk": "Ақтөбе"
    },
    "Костанай": {
        "en": "Kostanay",
        "ru": "Костанай",
        "kk": "Қостанай"
    },
    "Караганда": {
        "en": "Karaganda",
        "ru": "Караганда",
        "kk": "Қарағанды"
    },
    "Петропавловск": {
        "en": "Petropavl",
        "ru": "Петропавловск",
        "kk": "Петропавл"
    },
    "Актау": {
        "en": "Aktau",
        "ru": "Актау",
        "kk": "Ақтау"
    },
    "Атырау": {
        "en": "Atyrau",
        "ru": "Атырау",
        "kk": "Атырау"
    },
    "Шымкент": {
        "en": "Shymkent",
        "ru": "Шымкент",
        "kk": "Шымкент"
    },
    "Павлодар": {
        "en": "Pavlodar",
        "ru": "Павлодар",
        "kk": "Павлодар"
    },
    "Семей": {
        "en": "Semey",
        "ru": "Семей",
        "kk": "Семей"
    },
    "Кокшетау": {
        "en": "Kokshetau",
        "ru": "Кокшетау",
        "kk": "Көкшетау"
    },
    "Аксай (Казахстан)": {
        "en": "Aksay (Kazakhstan)",
        "ru": "Аксай (Казахстан)",
        "kk": "Ақсай (Қазақстан)"
    },
    "Курчатов (Казахстан)": {
        "en": "Kurchatov (Kazakhstan)",
        "ru": "Курчатов (Казахстан)",
        "kk": "Курчатов (Қазақстан)"
    },
    "Усть-Каменогорск": {
        "en": "Oskemen",
        "ru": "Усть-Каменогорск",
        "kk": "Өскемен"
    },
    "Кызылорда": {
        "en": "Kyzylorda",
        "ru": "Кызылорда",
        "kk": "Қызылорда"
    },
    "Уральск": {
        "en": "Oral",
        "ru": "Уральск",
        "kk": "Орал"
    },
    "Отеген-Батыр": {
        "en": "Otegen Batyr",
        "ru": "Отеген-Батыр",
        "kk": "Өтеген батыр"
    },
    "Тараз": {
        "en": "Taraz",
        "ru": "Тараз",
        "kk": "Тараз"
    },
    "Туркестан": {
        "en": "Turkistan",
        "ru": "Туркестан",
        "kk": "Түркістан"
    },
    "Экибастуз": {
        "en": "Ekibastuz",
        "ru": "Экибастуз",
        "kk": "Екібастұз"
    },
    "Хромтау": {
        "en": "Khromtau",
        "ru": "Хромтау",
        "kk": "Хромтау"
    },
    "Талдыкорган": {
        "en": "Taldykorgan",
        "ru": "Талдыкорган",
        "kk": "Талдықорған"
    },
    "Степногорск": {
        "en": "Stepnogorsk",
        "ru": "Степногорск",
        "kk": "Степногорск"
    },
    "Лисаковск": {
        "en": "Lisakovsk",
        "ru": "Лисаковск",
        "kk": "Лисаковск"
    },
    "Житикара": {
        "en": "Zhitikara",
        "ru": "Житикара",
        "kk": "Жітіқара"
    },
    "Рудный": {
        "en": "Rudny",
        "ru": "Рудный",
        "kk": "Рудный"
    },
    "Жанатас": {
        "en": "Zhanatas",
        "ru": "Жанатас",
        "kk": "Жаңатас"
    },
    "Щучинск": {
        "en": "Shchuchinsk",
        "ru": "Щучинск",
        "kk": "Щучинск"
    }
};
const categoryNames = {
    "Data Analyst": {
        "en": "Data Analyst",
        "ru": "Аналитик данных",
        "kk": "Деректер талдаушысы"
    },
    "Data Scientist": {
        "en": "Data Scientist",
        "ru": "Специалист по Data Science",
        "kk": "Data Science маманы"
    },
    "Designer": {
        "en": "Designer",
        "ru": "Дизайнер",
        "kk": "Дизайнер"
    },
    "Developer": {
        "en": "Developer",
        "ru": "Разработчик",
        "kk": "Әзірлеуші"
    },
    "DevOps Engineer": {
        "en": "DevOps Engineer",
        "ru": "DevOps-инженер",
        "kk": "DevOps-инженер"
    },
    "HR Manager": {
        "en": "HR Manager",
        "ru": "HR-менеджер",
        "kk": "HR-менеджер"
    },
    "IT Specialist": {
        "en": "IT Specialist",
        "ru": "IT-специалист",
        "kk": "IT-маман"
    },
    "ML Engineer": {
        "en": "ML Engineer",
        "ru": "Инженер машинного обучения",
        "kk": "Машиналық оқыту инженері"
    },
    "Product Manager": {
        "en": "Product Manager",
        "ru": "Менеджер продукта",
        "kk": "Өнім менеджері"
    },
    "Programmer": {
        "en": "Programmer",
        "ru": "Программист",
        "kk": "Бағдарламашы"
    },
    "QA Engineer": {
        "en": "QA Engineer",
        "ru": "Инженер по качеству",
        "kk": "Сапа инженері"
    },
    "Recruiter": {
        "en": "Recruiter",
        "ru": "Рекрутер",
        "kk": "Рекрутер"
    },
    "Software Engineer": {
        "en": "Software Engineer",
        "ru": "Инженер-программист",
        "kk": "Бағдарламалық жасақтама инженері"
    },
    "Test Engineer": {
        "en": "Test Engineer",
        "ru": "Инженер по тестированию",
        "kk": "Тестілеу инженері"
    }
};
const experienceNames = {
    'От 1 года до 3 лет': { en: '1–3 years', ru: 'От 1 года до 3 лет', kk: '1–3 жыл' },
    'От 3 до 6 лет': { en: '3–6 years', ru: 'От 3 до 6 лет', kk: '3–6 жыл' },
    'Нет опыта': { en: 'No experience', ru: 'Нет опыта', kk: 'Тәжірибесіз' },
    'Более 6 лет': { en: 'Over 6 years', ru: 'Более 6 лет', kk: '6 жылдан астам' }
};
const employmentNames = {
    'Полная занятость': { en: 'Full-time', ru: 'Полная занятость', kk: 'Толық жұмыспен қамту' },
    'Частичная занятость': { en: 'Part-time', ru: 'Частичная занятость', kk: 'Ішінара жұмыспен қамту' },
    'Проектная работа': { en: 'Project work', ru: 'Проектная работа', kk: 'Жобалық жұмыс' },
    'Стажировка': { en: 'Internship', ru: 'Стажировка', kk: 'Тағылымдама' }
};

function translateValue(field, value) {
    const dictionaries = { city: cityNames, category: categoryNames, experience: experienceNames, employment: employmentNames };
    const entry = dictionaries[field]?.[value];
    return entry?.[currentLanguage] || value;
}

function applyLanguage(language) {
    currentLanguage = ['en', 'ru', 'kk'].includes(language) ? language : 'en';
    document.documentElement.lang = currentLanguage;
    document.querySelector('.language-switch').setAttribute('data-active-language', currentLanguage);
    document.title = translate('siteTitle');
    if (typeof window.updateGuideLanguage === 'function') window.updateGuideLanguage();
    if (typeof window.updateSoundControls === 'function') window.updateSoundControls();

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        element.textContent = translate(element.dataset.i18n);
    });

    ['placeholder', 'aria-label'].forEach(function (attribute) {
        document.querySelectorAll('[data-i18n-' + attribute + ']').forEach(function (element) {
            element.setAttribute(attribute, translate(element.getAttribute('data-i18n-' + attribute)));
        });
    });

    document.querySelectorAll('[data-language]').forEach(function (button) {
        button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
    });

    ['city', 'category', 'experience'].forEach(function (field) {
        Array.from(document.getElementById(field).options).forEach(function (option) {
            if (option.value) option.textContent = translateValue(field, option.value);
        });
    });

    renderJobs();
    showSlide(activeSlide);
    updateSlideshow();

    try { localStorage.setItem('itCareerLanguage', currentLanguage); } catch (error) {}
}

// Выполняем после подключения скриптов таблицы и слайд-шоу.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-language]').forEach(function (button) {
        button.addEventListener('click', function () {
            applyLanguage(button.dataset.language);
        });
    });
    applyLanguage(currentLanguage);
    // При загрузке сразу показываем сохранённый язык без движения индикатора.
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            document.querySelector('.language-switch').setAttribute('data-ready', 'true');
        });
    });
});
