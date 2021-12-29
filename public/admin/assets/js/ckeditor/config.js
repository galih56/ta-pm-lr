/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.stylesSet.add('custom_style', [
    { element: 'a', styles: { color: '#004987'} },
    { element: 'a', attributes: {'class': 'ck_editor_anchor'} }
]);

CKEDITOR.editorConfig = function( config ) {
	config.toolbar_Basic=  ['Bold', 'Italic', 'Underline'];
	config.removePlugins = 'flash';
	config.extraPlugins = 'textindent,imageuploader,image,imagebrowser,link';
	config.tabSpaces = 8;
	config.extraPlugins = 'pastefromgdocs';
	config.extraPlugins = 'pastefromword';
	config.stylesSet = 'custom_style';
	config.extraPlugins = 'justify';
	config.filebrowserUploadMethod = 'form';
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' },
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};