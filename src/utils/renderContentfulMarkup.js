import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const optionsContentful = {
  renderMark: {
    [MARKS.BOLD]: (text) => `<span class="mt-4 font-bold text-gray-500 text-base">${text}</span>`,
    [MARKS.CODE]: (text) => `<code class="px-2 py-1 text-sm bg-gray-200 text-red-700 rounded-md whitespace-nowrap">${text}</code>`,
  },
  renderNode: {
    [BLOCKS.HEADING_3]: (node, next) =>
      `<h3 class="mt-8 font-heading text-gray-700 text-xl">${next(node.content)}</h3>`,
    [BLOCKS.HEADING_4]: (node, next) =>
      `<h4 class="mt-6 font-heading text-gray-700 text-lg">${next(node.content)}</h4>`,
    [BLOCKS.PARAGRAPH]: (node, next) => `<p class="mt-4 text-gray-500 leading-relaxed text-base">${next(node.content)}</p>`,
    [BLOCKS.UL_LIST]: (node, next) =>
      `<ul class="mt-4 ml-8 list-disc text-gray-500 text-base">${next(node.content)}</ul>`,
    [BLOCKS.OL_LIST]: (node, next) =>
      `<ol class="mt-4 ml-8 list-decimal text-gray-500 text-base">${next(node.content)}</ol>`,
    [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
      const { fields } = node.data.target;
      const imageDetails = fields.file.details.image;
      next(node.content);
      return `<img class="mt-4 w-full rounded-sm shadow-md" src="${fields.file.url}" alt="${fields.title}" width="${imageDetails.width}" height="${imageDetails.height}" />`;
    },
    [INLINES.HYPERLINK]: (node, next) => {
      return `<a href=${node.data.uri} class="text-blue-600 underline hover:text-blue-700 visited:text-indigo-600" target="_blank" rel="noopener noreferrer">${next(node.content)}</a>`;
    },
  },
};

function renderContentfulMarkup(content) {
  return documentToHtmlString(content, optionsContentful);
}

export default renderContentfulMarkup;
