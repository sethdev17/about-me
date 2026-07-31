// src/lib/utils.js
import { browser } from '$app/environment';

export const CONTACT_EMAIL = 'gg079331@gmail.com';

export const SITE_URL = 'https://sethdev.pages.dev';

export async function copyToClipboard(text) {
	if (!browser) return false;
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch (e) {
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.style.position = 'fixed';
		textarea.style.opacity = '0';
		document.body.appendChild(textarea);
		textarea.select();
		try {
			document.execCommand('copy');
			document.body.removeChild(textarea);
			return true;
		} catch (fallbackError) {
			document.body.removeChild(textarea);
			console.warn('Copy to clipboard failed:', fallbackError);
			return false;
		}
	}
}

export function isValidHexColor(color) {
	if (!color || typeof color !== 'string') return false;
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color.trim());
}

export function getColorsArr(colors) {
	if (!colors) return null;
	if (Array.isArray(colors)) return colors.filter(isValidHexColor);
	if (typeof colors === 'string') {
		if (colors.includes('[')) {
			try {
				const parsed = JSON.parse(colors);
				if (Array.isArray(parsed)) return parsed.filter(isValidHexColor);
			} catch (e) {
				/* ignore */
			}
		}
		return colors.split(',').map((c) => c.trim()).filter(isValidHexColor);
	}
	return null;
}

export function scrollToSection(id) {
	if (!browser) return;
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
}
