<script>
  import { onMount } from 'svelte';
  import { language } from '$lib/stores.js';
  import { browser } from '$app/environment';

  export let containerSelector = '.post-text';
  export let targetLang = 'en';
  export let sourceLang = 'ro';
  export let translatePageTitle = true;

  let translating = false;
  let translated = false;
  let originalContent = '';
  let originalPageTitle = '';
  let container;

  async function translateText(text) {
    if (!text || !text.trim()) return text;
    // Don't translate if it looks like a number or special chars only
    if (/^[0-9\s.,!?:;]+$/.test(text)) return text;
    
    // Preserve leading and trailing whitespace to prevent words sticking together
    const leadingSpace = text.match(/^\s*/)[0];
    const trailingSpace = text.match(/\s*$/)[0];
    const cleanText = text.trim();

    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(cleanText)}`;
      const response = await fetch(url);
      const data = await response.json();
      const translated = data[0].map(item => item[0]).join('');
      return leadingSpace + translated + trailingSpace;
    } catch (e) {
      console.error('Translation error:', e);
      return text;
    }
  }

  async function translateNode(node) {
    // Skip some technical nodes
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.classList.contains('no-translate') || 
          node.classList.contains('info-icon')) return;
    }

    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.trim()) {
        node.textContent = await translateText(node.textContent);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let child of node.childNodes) {
        await translateNode(child);
      }
    }
  }

  async function performTranslation() {
    if (!browser || translating || translated) return;
    
    translating = true;
    
    if (containerSelector) {
      container = document.querySelector(containerSelector);
      if (container) {
        originalContent = container.innerHTML;
        await translateNode(container);
      }
    }

    if (translatePageTitle) {
      originalPageTitle = document.title;
      document.title = await translateText(document.title);
    }
    
    translated = true;
    translating = false;
  }

  function restoreOriginal() {
    if (container && originalContent) {
      container.innerHTML = originalContent;
    }
    if (translatePageTitle && originalPageTitle) {
      document.title = originalPageTitle;
    }
    translated = false;
  }

  $: if (browser && $language === targetLang && !translated && !translating) {
    // Delay slightly to ensure content is rendered
    setTimeout(performTranslation, 500);
  } else if (browser && $language === sourceLang && translated) {
    restoreOriginal();
  }

  onMount(() => {
    container = document.querySelector(containerSelector);
  });
</script>

{#if translating}
  <div class="translation-status">
    <span class="loader"></span>
    Translating content...
  </div>
{/if}

<style>
  .translation-status {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    z-index: 1000;
    border: 1px solid var(--accent-color, #3b82f6);
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    animation: fadeIn 0.3s ease-out;
  }

  .loader {
    width: 16px;
    height: 16px;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
