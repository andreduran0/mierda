<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Huaraz Explorer</title>

    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <script>
        if (localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    </script>

    <script type="importmap">
{
  "imports": {
    "react/": "https://aistudiocdn.com/react@^19.2.0/",
    "react": "https://aistudiocdn.com/react@^19.2.0",
    "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
    "react-markdown": "https://aistudiocdn.com/react-markdown@^10.1.0",
    "react-router-dom": "https://aistudiocdn.com/react-router-dom@^7.9.6",
    "@google/genai": "https://aistudiocdn.com/@google/genai@^1.29.1",
    "qrcode": "https://aistudiocdn.com/qrcode@^1.5.3"
  }
}
    </script>

    <!-- ESTE SCRIPT ES OBLIGATORIO -->
    <script type="module" src="./index.tsx"></script>
</head>

<body class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
    <div id="root"></div>
</body>
</html>

