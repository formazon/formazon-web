---
name: Deploy Next.js to Ubuntu Server
overview: Создание полного плана развертывания Next.js приложения на Ubuntu сервере с настройкой Nginx, SSL сертификата, PM2 для управления процессами и подключением домена formazon.com
todos:
  - id: create-pm2-config
    content: Создать ecosystem.config.js для PM2 с настройками памяти и автозапуска
    status: pending
  - id: create-nginx-config
    content: Создать конфигурацию Nginx для reverse proxy и SSL
    status: pending
  - id: create-deploy-scripts
    content: Создать скрипты для первоначальной настройки сервера и деплоя обновлений
    status: pending
  - id: create-env-example
    content: Создать пример файла .env.production с опциональными переменными для аналитики
    status: pending
  - id: create-deployment-docs
    content: Создать подробную документацию DEPLOYMENT.md с пошаговыми инструкциями
    status: pending
    dependencies:
      - create-pm2-config
      - create-nginx-config
      - create-deploy-scripts
---

# План развертывания Next.js проекта на Ubuntu сервере

## Архитектура развертывания

```
┌─────────────┐
│   Internet  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Nginx     │ (Reverse Proxy, SSL)
│  Port 80/443│
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Next.js   │ (PM2 Process Manager)
│  Port 3000  │
└─────────────┘
```

## Этапы развертывания

### 1. Подготовка сервера

**Установка необходимого ПО:**

- Node.js 20.x LTS (через nvm или официальный репозиторий)
- PM2 для управления процессами
- Nginx как reverse proxy
- Certbot для SSL сертификатов
- Git для клонирования репозитория
- Firewall (UFW) для безопасности

**Команды для установки:**

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Установка PM2 глобально
sudo npm install -g pm2

# Установка Nginx
sudo apt install -y nginx

# Установка Certbot
sudo apt install -y certbot python3-certbot-nginx

# Установка Git
sudo apt install -y git

# Настройка firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 2. Настройка DNS для домена

**Требуемые DNS записи:**

- A запись: `formazon.com` → IP адрес сервера
- A запись: `www.formazon.com` → IP адрес сервера (опционально)

**Проверка DNS:**

```bash
dig formazon.com +short
# Должен вернуть IP адрес сервера
```

### 3. Развертывание приложения

**Структура директорий на сервере:**

```
/home/ubuntu/
  └── formazon-web/          # Клонированный репозиторий
      ├── .next/             # Собранное приложение
      ├── node_modules/
      └── ...
```

**Шаги развертывания:**

1. Клонирование репозитория
2. Установка зависимостей
3. Сборка production версии
4. Настройка переменных окружения
5. Запуск через PM2

### 4. Конфигурация PM2

**PM2 ecosystem файл** (`ecosystem.config.js`):

- Автозапуск при перезагрузке сервера
- Логирование
- Перезапуск при сбоях
- Ограничение памяти (важно для 4GB RAM)

### 5. Конфигурация Nginx

**Nginx конфигурация** (`/etc/nginx/sites-available/formazon.com`):

- Reverse proxy на localhost:3000
- SSL сертификаты
- Редирект HTTP → HTTPS
- Оптимизация для Next.js (gzip, кеширование статики)
- Поддержка www и без www версий домена

### 6. SSL сертификат (Let's Encrypt)

**Получение бесплатного SSL:**

- Использование Certbot
- Автоматическое обновление сертификата
- Настройка редиректа на HTTPS

### 7. Переменные окружения

**Файл `.env.production`:**

- `NEXT_PUBLIC_GA_ID` (опционально, для Google Analytics)
- `NEXT_PUBLIC_YM_ID` (опционально, для Yandex Metrika)

### 8. Мониторинг и обслуживание

**PM2 команды для мониторинга:**

- `pm2 status` - статус приложения
- `pm2 logs` - просмотр логов
- `pm2 monit` - мониторинг ресурсов

**Автоматическое обновление:**

- Скрипт для деплоя обновлений
- Проверка работоспособности после деплоя

## Файлы для создания

1. **`deploy/ecosystem.config.js`** - конфигурация PM2
2. **`deploy/nginx.conf`** - конфигурация Nginx
3. **`deploy/deploy.sh`** - скрипт автоматического развертывания
4. **`deploy/setup-server.sh`** - скрипт первоначальной настройки сервера
5. **`.env.production.example`** - пример файла с переменными окружения
6. **`DEPLOYMENT.md`** - документация по развертыванию

## Оптимизации для сервера 4GB RAM

- Ограничение памяти для Node.js процесса (max-old-space-size)
- Настройка PM2 для перезапуска при превышении лимита памяти
- Оптимизация Nginx (worker processes, connections)
- Настройка swap файла (опционально, для подстраховки)

## Безопасность

- Настройка firewall (только необходимые порты)
- Регулярные обновления системы
- Использование не-root пользователя для приложения
- Настройка fail2ban (опционально, для защиты от брутфорса)

## Резервное копирование

- Рекомендации по настройке автоматических бэкапов
- Бэкап кода, базы данных (если будет), конфигураций

## Проверка работоспособности

После развертывания проверить:

- Доступность сайта по HTTPS
- Работоспособность API роутов (`/api/contact`)
- Корректность редиректов
- Производительность и использование ресурсов