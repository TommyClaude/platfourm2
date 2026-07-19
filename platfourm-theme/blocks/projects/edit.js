/* global wp */
( function ( wp ) {
	'use strict';

	var el = wp.element.createElement;
	var __ = wp.i18n.__;
	var useBlockProps = wp.blockEditor.useBlockProps;
	var ServerSideRender = wp.serverSideRender;

	wp.blocks.registerBlockType( 'platfourm/projects', {
		edit: function () {
			return el(
				'div',
				useBlockProps(),
				el( ServerSideRender, {
					block: 'platfourm/projects',
					EmptyResponsePlaceholder: function () {
						return el(
							'p',
							{ style: { padding: '2rem', textAlign: 'center', color: '#777' } },
							__( 'Add projects under the Projects menu — they will appear here.', 'platfourm' )
						);
					}
				} )
			);
		},
		save: function () {
			return null;
		}
	} );
} )( window.wp );
