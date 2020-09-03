/* eslint-disable no-template-curly-in-string */
export const TRANSLATIONS = {
    en: {
        translation: {
            'send': 'Submit',
            'addQuestionBlock': 'Add',
            'remove': 'Remove',
            'optional': ' (optional)',
            'cancel': 'Cancel',
            'save': 'Save',
            'stopRecording': 'Stop recording',
            'startRecording': 'Start recording',
            'upload': 'Upload',
            'download': 'Download',
            'recordAudio': 'Record audio',
            'recordVideo': 'Record video',
            'takePhoto': 'Take a photo',
            'opdFormAccept': 'Accept',
            'opdLabel': 'I am agree with',
            'opdLink': 'personal data processing',
            'MONTHS': [
                { value: 0, label: 'January' },
                { value: 1, label: 'February' },
                { value: 2, label: 'March' },
                { value: 3, label: 'April' },
                { value: 4, label: 'May' },
                { value: 5, label: 'June' },
                { value: 6, label: 'July' },
                { value: 7, label: 'August' },
                { value: 8, label: 'September' },
                { value: 9, label: 'October' },
                { value: 10, label: 'November' },
                { value: 11, label: 'December' }
            ],
            'loading': 'Loading...',
            'noOptionsMessage': 'There is no data',
            'placeholders': {
                'datePicker': {
                    'day': 'Day',
                    'month': 'Month',
                    'year': 'Year',
                },
                'salaryCurrency': 'Select currency...',
            },
            'errors': {
                'required': 'Required field',
                'moreThan': 'Number must be greater than {{more}}',
                'currency': 'Currency required',
                'email': 'Invalid Email (valid characters - letters numbers _ - .)',
                'audioPermission': 'Access to the microphone is blocked. Allow access to the microphone in the browser settings',
                'cameraPermission': 'Access to the camera is blocked. Allow access to the camera in the browser settings',
                'uploadError': 'Failed to upload file.',
                'maximumFileSize': 'Maximum file size: {{count}} megabyte',
                'maximumFileSize_plural': 'Maximum file size: {{count}} megabytes',
                'fileType': 'Invalid type, available types: {{types}}',
                'fileTypeAudio': 'Invalid type, select audio file',
                'fileTypeVideo': 'Invalid type, select video file',
                'composite': 'Required block',
            }
        },
    },
    ru: {
        translation: {
            'send': 'Отправить',
            'addQuestionBlock': 'Добавить',
            'remove': 'Удалить',
            'optional': ' (опционально)',
            'cancel': 'Отмена',
            'save': 'Сохранить',
            'stopRecording': 'Остановить запись',
            'startRecording': 'Начать запись',
            'upload': 'Загрузить',
            'download': 'Cкачать',
            'recordAudio': 'Записать аудио',
            'recordVideo': 'Записать видео',
            'takePhoto': 'Сделать фото',
            'opdFormAccept': 'Согласен',
            'opdLabel': 'Я даю согласие на',
            'opdLink': 'обработку персональных данных',
            'MONTHS': [
                { value: 0, label: 'Январь' },
                { value: 1, label: 'Февраль' },
                { value: 2, label: 'Март' },
                { value: 3, label: 'Апрель' },
                { value: 4, label: 'Май' },
                { value: 5, label: 'Июнь' },
                { value: 6, label: 'Июль' },
                { value: 7, label: 'Август' },
                { value: 8, label: 'Сентябрь' },
                { value: 9, label: 'Октябрь' },
                { value: 10, label: 'Ноябрь' },
                { value: 11, label: 'Декабрь' }
            ],
            'loading': 'Загрузка...',
            'noOptionsMessage': 'Нет данных',
            'placeholders': {
                'datePicker': {
                    'day': 'День',
                    'month': 'Месяц',
                    'year': 'Год',
                },
                'salaryCurrency': 'Выберите валюту...',
            },
            'errors': {
                'required': 'Поле обязательно для заполнения',
                'moreThan': 'Число должно быть больше ${more}',
                'currency': 'Необходимо указать валюту',
                'email': 'Неверный email (допустимые символы - латинские цифры _ - .)',
                'audioPermission': 'Доступ к микрофону заблокирован. Разрешите доступ к микрофону в настройках браузера',
                'cameraPermission': 'Доступ к камере заблокирован. Разрешите доступ к камере в настройках браузера',
                'uploadError': 'Не удалось загрузить файл',
                'maximumFileSize_0': 'Максимальный размер загружаемого файла: {{count}} мегабайт',
                'maximumFileSize_1': 'Максимальный размер загружаемого файла: {{count}} мегабайта',
                'maximumFileSize_2': 'Максимальный размер загружаемого файла: {{count}} мегабайт',
                'fileType': 'Неверный тип файла, доступные типы: {{types}}',
                'fileTypeAudio': 'Неверный тип файла, выберите аудиофайл',
                'fileTypeVideo': 'Неверный тип файла, выберите видеофайл',
                'composite': 'Блок обязателен для заполнения',
            }
        },
    },
};

export const RU = 'ru';
