/* global wp */
( function ( wp ) {
	'use strict';

	var el = wp.element.createElement;
	var Fragment = wp.element.Fragment;
	var __ = wp.i18n.__;
	var registerBlockType = wp.blocks.registerBlockType;
	var be = wp.blockEditor;
	var useBlockProps = be.useBlockProps;
	var InnerBlocks = be.InnerBlocks;
	var InspectorControls = be.InspectorControls;
	var MediaUpload = be.MediaUpload;
	var MediaUploadCheck = be.MediaUploadCheck;
	var cmp = wp.components;
	var PanelBody = cmp.PanelBody;
	var Button = cmp.Button;

	var TEMPLATE = [
		[ 'core/paragraph', { className: 'hero__eyebrow', content: 'Australian Building &amp; Construction' } ],
		[ 'core/heading', { level: 1, className: 'hero__title', content: 'From Concept<br>to Completion' } ],
		[ 'core/paragraph', { className: 'hero__text', content: 'Platfourm delivers new builds, renovations and commercial fit-outs for both private and public sectors — building open, collaborative relationships that go above and beyond.' } ],
		[ 'core/buttons', { className: 'hero__actions' }, [
			[ 'core/button', { className: 'btn btn--primary', text: 'View Our Projects', url: '#projects' } ],
			[ 'core/button', { className: 'btn btn--ghost', text: 'Get in Touch', url: '#contact' } ]
		] ]
	];

	function slideControl( label, key, props ) {
		var img = props.attributes[ key ] || {};
		return el(
			'div',
			{ style: { marginBottom: '12px' } },
			el( MediaUploadCheck, {},
				el( MediaUpload, {
					allowedTypes: [ 'image' ],
					value: img.id,
					onSelect: function ( media ) {
						var patch = {};
						patch[ key ] = { id: media.id, url: media.url };
						props.setAttributes( patch );
					},
					render: function ( o ) {
						return el(
							Button,
							{ variant: 'secondary', onClick: o.open, style: { width: '100%' } },
							( img.url ? __( 'Change ', 'platfourm' ) : __( 'Set ', 'platfourm' ) ) + label
						);
					}
				} )
			),
			img.url ? el( 'img', { src: img.url, alt: '', style: { width: '100%', marginTop: '6px', display: 'block' } } ) : null
		);
	}

	registerBlockType( 'platfourm/hero', {
		edit: function ( props ) {
			var bg = ( props.attributes.image1 && props.attributes.image1.url ) || '';
			var blockProps = useBlockProps( {
				className: 'hero',
				style: bg ? { backgroundImage: 'url(' + bg + ')', backgroundSize: 'cover', backgroundPosition: 'center' } : {}
			} );

			return el(
				Fragment,
				{},
				el(
					InspectorControls,
					{},
					el(
						PanelBody,
						{ title: __( 'Hero slides', 'platfourm' ), initialOpen: true },
						slideControl( __( 'slide 1', 'platfourm' ), 'image1', props ),
						slideControl( __( 'slide 2', 'platfourm' ), 'image2', props ),
						slideControl( __( 'slide 3', 'platfourm' ), 'image3', props )
					)
				),
				el(
					'div',
					blockProps,
					el( 'div', { className: 'hero__overlay' } ),
					el(
						'div',
						{ className: 'container hero__content' },
						el( InnerBlocks, { template: TEMPLATE, templateLock: false } )
					)
				)
			);
		},
		save: function () {
			return el( InnerBlocks.Content );
		}
	} );
} )( window.wp );
