<script>
  export let t = {};

  const JS_SVG = `
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#F0DB4F" d="M0 0h24v24H0V0z"/>
      <path fill="#323330" d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  `;

  const NODE_SVG = `
    <svg role="img" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.114.577.645 1.13 1.255 1.13h5.754c.354 0 .692-.286.94-.527.285-.272.39-.619.355-.964-.738-7.295-5.314-15.832-22.687-15.832-12.645 0-20.17 5.334-20.17 14.315 0 9.72 7.547 12.471 19.703 13.546 14.551 1.3 15.607 3.485 15.607 6.399 0 5.042-3.978 7.066-12.961 7.066z"/>
    </svg>
  `;

  const SVELTE_SVG = `
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="svelteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF3E00"/>
          <stop offset="100%" stop-color="#F86A2B"/>
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="23" height="23" rx="6" fill="url(#svelteGrad)"/>
      <path fill="#ffffff" d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/>
    </svg>
  `;

  const CSS_SVG = `
    <svg role="img" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1572B6" d="M18.814 114.123L8.762 1.352h110.476l-10.064 112.754-45.625 12.48z"/>
      <path fill="#33A9DC" d="M64 117.062l37.049-10.086 8.595-96.228H64z"/>
      <path fill="#EBEBEB" d="M64 51.429H33.05l-.74-8.271-.857-9.591H64V23.102H31.559l.332 3.711 3.4 38.114H64zm0 35.916l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#fff" d="M63.952 51.429v14.164h16.947l-1.597 17.943-15.35 4.143v14.519l28.215-7.82.207-2.325 3.234-36.353.335-3.71.001-.018h-3.376zm0-28.327v14.163H97.67l.205-2.29.534-6.002.575-6.451.087-2.42z"/>
    </svg>
  `;

  const HTML_SVG = `
    <svg role="img" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.243 12.48z"/>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.329 3.692 3.382 37.927H64zm0 35.929l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.144v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.697h-3.7zm0-27.856v13.762h33.244l.269-3.014.61-6.755.32-3.993z"/>
    </svg>
  `;

  const KOTLIN_SVG = `
    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="3.47 3.84 8.51 8.51">
      <defs>
        <linearGradient id="kGradA" x1="2.039" y1="11.659" x2="9.95" y2="3.748" gradientUnits="userSpaceOnUse">
          <stop offset=".108" stop-color="#c757bc"/>
          <stop offset=".173" stop-color="#cd5ca9"/>
          <stop offset=".492" stop-color="#e8744f"/>
          <stop offset=".716" stop-color="#f88316"/>
          <stop offset=".823" stop-color="#ff8900"/>
        </linearGradient>
        <linearGradient id="kGradB" x1="3.369" y1="6.189" x2="6.073" y2="3.484" gradientUnits="userSpaceOnUse">
          <stop offset=".296" stop-color="#00afff"/>
          <stop offset=".694" stop-color="#5282ff"/>
          <stop offset="1" stop-color="#945dff"/>
        </linearGradient>
        <linearGradient id="kGradC" x1="6.184" y1="13.878" x2="10.04" y2="10.022" gradientUnits="userSpaceOnUse">
          <stop offset=".296" stop-color="#00afff"/>
          <stop offset=".694" stop-color="#5282ff"/>
          <stop offset="1" stop-color="#945dff"/>
        </linearGradient>
      </defs>
      <path d="M7.74 3.843L3.47 8.33v4.013l4.262-4.27 4.24-4.232z" fill="url(#kGradA)"/>
      <path d="M3.47 12.344l4.262-4.27 4.24 4.27z" fill="url(#kGradC)"/>
      <path d="M3.47 3.843H7.74L3.47 8.33z" fill="url(#kGradB)"/>
    </svg>
  `;


    const DOCKER_SVG = `
    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 27 128 73">
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"/>
      <path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"/>
      <path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"/>
      <path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"/>
      <path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"/>
      <path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"/>
      <path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"/>
      <path fill="#D4EEF1" d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"/>
    </svg>
  `;


  // ⬇️ MODIFICĂ AICI PROCENTAJELE (între 0 și 100) ⬇️
  const languages = [
    { name: 'JavaScript', color: '#F0DB4F', icon: JS_SVG,     docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', percentage: 20 },
    { name: 'HTML5',      color: '#E44D26', icon: HTML_SVG,   docUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',       percentage: 40 },
    { name: 'CSS3',       color: '#1572B6', icon: CSS_SVG,    docUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',        percentage: 40 },
    { name: 'Node.js',    color: '#83CD29', icon: NODE_SVG,   docUrl: 'https://nodejs.org/docs/latest/api/',                     percentage: 20 },
    { name: 'SvelteKit',  color: '#FF3E00', icon: SVELTE_SVG, docUrl: 'https://kit.svelte.dev/docs/introduction',                percentage: 10 },
    { name: 'Kotlin',     color: '#7F52FF', icon: KOTLIN_SVG, docUrl: 'https://kotlinlang.org/docs/home.html',                   percentage: 10 },
    { name: 'Docker',     color: '#2496ED', icon: DOCKER_SVG, docUrl: 'https://docs.docker.com/',                                percentage: 10 }
  ];

  const INSET = 5;      // distanța conturului față de marginea cardului
  const STROKE_W = 3;
  const CARD_R = 16;    // trebuie să fie identic cu border-radius din CSS

  // Dimensiunile reale ale fiecărui card, măsurate în browser.
  let sizes = languages.map(() => ({ w: 172, h: 208 }));
  let shown = languages.map(() => false);

  function trackSize(node, index) {
    const read = () => {
      const w = node.offsetWidth;
      const h = node.offsetHeight;
      if (w && h && (sizes[index].w !== w || sizes[index].h !== h)) {
        sizes[index] = { w, h };
      }
    };

    read();

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(read);
      ro.observe(node);
    } else {
      window.addEventListener('resize', read);
    }

    // conturul se desenează când cardul intră în ecran
    let io;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            shown[index] = true;
            io.disconnect();
            io = null;
          }
        },
        { threshold: 0.25 }
      );
      io.observe(node);
    } else {
      shown[index] = true;
    }

    return {
      destroy() {
        if (ro) ro.disconnect();
        else window.removeEventListener('resize', read);
        if (io) io.disconnect();
      }
    };
  }

  // Perimetrul exact al unui dreptunghi cu colțuri rotunjite.
  function perimeterOf({ w, h }) {
    const rw = Math.max(0, w - INSET * 2);
    const rh = Math.max(0, h - INSET * 2);
    const r = Math.min(CARD_R - INSET / 2, rw / 2, rh / 2);
    return 2 * (rw - 2 * r) + 2 * (rh - 2 * r) + 2 * Math.PI * r;
  }

  function radiusOf({ w, h }) {
    const rw = Math.max(0, w - INSET * 2);
    const rh = Math.max(0, h - INSET * 2);
    return Math.min(CARD_R - INSET / 2, rw / 2, rh / 2);
  }

  function clamp(p) {
    return Math.max(0, Math.min(100, p)) / 100;
  }

  function levelClass(p) {
    if (p >= 80) return 'level-expert';
    if (p >= 60) return 'level-good';
    if (p >= 40) return 'level-medium';
    return 'level-beginner';
  }
</script>

<section id="skills" class="languages-section">
  <h2>{t.learningTitle}</h2>

  <ul class="languages-grid">
    {#each languages as language, i (language.name)}
      <li class="language-item" style="--float-delay: {(i * 0.22).toFixed(2)}s;">
        <a
          class="language-link"
          href={language.docUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="{language.name} — {language.percentage}% (deschide documentația)"
        >
          <article
            class="language-card {levelClass(language.percentage)}"
            style="--accent: {language.color};"
            use:trackSize={i}
          >
            <svg
              class="progress-border"
              viewBox="0 0 {sizes[i].w} {sizes[i].h}"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <rect
                class="progress-track"
                x={INSET}
                y={INSET}
                width={Math.max(0, sizes[i].w - INSET * 2)}
                height={Math.max(0, sizes[i].h - INSET * 2)}
                rx={radiusOf(sizes[i])}
                ry={radiusOf(sizes[i])}
                stroke-width={STROKE_W}
                fill="none"
                vector-effect="non-scaling-stroke"
              />
              <rect
                class="progress-fill"
                x={INSET}
                y={INSET}
                width={Math.max(0, sizes[i].w - INSET * 2)}
                height={Math.max(0, sizes[i].h - INSET * 2)}
                rx={radiusOf(sizes[i])}
                ry={radiusOf(sizes[i])}
                stroke-width={STROKE_W}
                stroke-dasharray={perimeterOf(sizes[i]).toFixed(2)}
                stroke-dashoffset={(
                  perimeterOf(sizes[i]) * (shown[i] ? 1 - clamp(language.percentage) : 1)
                ).toFixed(2)}
                stroke-linecap="round"
                fill="none"
                vector-effect="non-scaling-stroke"
              />
            </svg>

            <div class="card-inner">
              <span class="language-icon">{@html language.icon}</span>

              <h3 class="language-name">
                <span class="language-dot"></span>
                {language.name}
              </h3>

              <p class="percentage">
                <span class="percentage-label">{t.percentagePrefix || 'Cunoștințe'}</span>
                <strong>{language.percentage}%</strong>
              </p>
            </div>
          </article>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .languages-section {
    width: 100%;
    max-width: 900px;
  }

  .languages-section h2 {
    text-align: left;
    margin: 0 0 2rem;
    font-size: 1.2rem;
    color: #f0f0f0;
  }

  /* Grilă fluidă: cardurile își iau lățimea din celulă, nu dintr-o valoare fixă.
     Asta e ce repară marginile pe telefon. */
  .languages-grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
    gap: 1.1rem;
  }

  .language-item {
    display: flex;
    animation: float 5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    animation-delay: var(--float-delay, 0s);
    will-change: transform;
  }

  .language-link {
    display: block;
    width: 100%;
    text-decoration: none;
    color: inherit;
    border-radius: 16px;
  }

  .language-link:focus-visible {
    outline: 2px solid var(--accent, #60a5fa);
    outline-offset: 3px;
  }

  .language-card {
    position: relative;
    width: 100%;
    min-height: 208px;
    border-radius: 16px; /* trebuie să rămână egal cu CARD_R din script */
    background-color: rgba(25, 25, 30, 0.55);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.3);
    display: flex;
    transition:
      transform 0.32s cubic-bezier(0.33, 1, 0.68, 1),
      box-shadow 0.32s cubic-bezier(0.33, 1, 0.68, 1);
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* hover-ul stă pe card, plutirea pe wrapper — așa nu se anulează reciproc */
  .language-link:hover .language-card,
  .language-link:focus-visible .language-card {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 16px 42px rgba(0, 0, 0, 0.45);
  }

  .language-item:hover {
    animation-play-state: paused;
  }

  .progress-border {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    overflow: visible;
  }

  .progress-track {
    stroke: rgba(255, 255, 255, 0.09);
  }

  .progress-fill {
    stroke: var(--accent);
    transition:
      stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.3s ease-out;
    filter: drop-shadow(0 0 3px color-mix(in srgb, var(--accent) 55%, transparent));
  }

  .language-link:hover .progress-fill {
    filter: drop-shadow(0 0 8px var(--accent));
  }

  /* fundalul difuz — moștenește raza, deci nu mai iese din colțuri */
  .language-card::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 50% 120%, rgba(96, 165, 250, 0.32) 0, transparent 62%);
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  @supports (color: color-mix(in srgb, red, blue)) {
    .language-card::after {
      background: radial-gradient(
        circle at 50% 120%,
        color-mix(in srgb, var(--accent) 32%, transparent) 0,
        transparent 62%
      );
    }
  }

  .language-link:hover .language-card::after {
    opacity: 1;
  }

  .card-inner {
    position: relative;
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1.5rem 1rem;
    text-align: center;
    min-width: 0;
  }

  .language-icon {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
  }

  .language-icon :global(svg) {
    display: block;
    width: 100%;
    height: 100%;
  }

  .language-name {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    color: #f0f0f0;
    max-width: 100%;
  }

  .language-dot {
    flex: 0 0 auto;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 8px color-mix(in srgb, var(--accent) 70%, transparent);
  }

  .percentage {
    margin: 0;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.32rem 0.7rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    max-width: 100%;
  }

  .percentage-label {
    font-size: 0.7rem;
    color: #b9b9c0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .percentage strong {
    font-size: 0.82rem;
    font-weight: 800;
    color: var(--accent);
  }

  .level-expert .percentage strong {
    text-shadow: 0 0 8px color-mix(in srgb, var(--accent) 60%, transparent);
  }

  .level-good .percentage strong {
    text-shadow: 0 0 6px color-mix(in srgb, var(--accent) 45%, transparent);
  }

  @keyframes float {
    0%,
    100% { transform: translateY(0); }
    50%  { transform: translateY(-7px); }
  }

  @media (max-width: 767px) {
    .languages-section h2 {
      font-size: 1.05rem;
      margin-bottom: 1.2rem;
      text-align: center;
    }

    .languages-grid {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 0.75rem;
    }

    .language-card {
      min-height: 168px;
      /* blur-ul e scump pe 6 carduri animate pe mobil */
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }

    .card-inner {
      padding: 1rem 0.65rem;
      gap: 0.55rem;
    }

    .language-icon {
      width: 32px;
      height: 32px;
    }

    .language-name {
      font-size: 0.85rem;
      gap: 0.4rem;
    }

    .language-dot {
      width: 7px;
      height: 7px;
    }

    .percentage {
      padding: 0.25rem 0.55rem;
      gap: 0.3rem;
    }

    /* pe ecran mic rămâne doar procentul, ca să nu se rupă pe două rânduri */
    .percentage-label {
      display: none;
    }

    .percentage strong {
      font-size: 0.78rem;
    }
  }

  @media (max-width: 360px) {
    .languages-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (hover: none) {
    .language-link:hover .language-card {
      transform: none;
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.3);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .language-item {
      animation: none;
    }

    .language-card,
    .progress-fill,
    .language-card::after {
      transition: none;
    }
  }
</style>