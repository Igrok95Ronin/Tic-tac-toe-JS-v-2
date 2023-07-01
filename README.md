# Все команды выполнять сверху вниз по порядку

# Инициализация Git
- git init

# Компилятор TypeScript может быть установлен через npm
- npm install -g typescript

# Запуск aвтоматическая перекомпиляция
- зайдите в директорию с файлом TypeScript и введите tsc -w


# Live Sass Compile
- Если не установлен установить

## Если мешает терминал при каждом компиляции его можно отключить
- Нажмите Ctrl + , и введите live sass, если ничего не находит перезагрузите VC
- Пролистайте самый низ и найдите, Live Sass Compile › Settings: Show Output Window On
- Там выберите None

## Если нужно настроить Live Sass Compile
- Нажмите Ctrl + , и введите live sass, выберите изменить Json и вставьте вот такой код его можно менять по необходимости
-     "liveSassCompile.settings.formats": [
        {
            "format": "compressed", // expanded
            "extensionName": ".min.css",
            "savePath": "~/../../app/css/"
        }
    ]
