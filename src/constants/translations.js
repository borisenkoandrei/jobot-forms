/* eslint-disable no-template-curly-in-string */
export const TRANSLATIONS = {
    en: {
        translation: {
            'send': 'Send',
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
                'email': 'Invalid Email',
                'audioPermission': 'Access to the microphone is blocked. Allow access to the microphone in the browser settings',
                'cameraPermission': 'Access to the camera is blocked. Allow access to the camera in the browser settings',
                'uploadError': 'Failed to upload file.',
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
                'email': 'Неверный email',
                'audioPermission': 'Доступ к микрофону заблокирован. Разрешите доступ к микрофону в настройках браузера',
                'cameraPermission': 'Доступ к камере заблокирован. Разрешите доступ к камере в настройках браузера',
                'uploadError': 'Не удалось загрузить файл',
            }
        },
    },
};

export const RU = 'ru';
