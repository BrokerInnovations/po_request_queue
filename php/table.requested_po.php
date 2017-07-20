<?php

/*
 * Editor server script for DB table requested_po
 * Created by http://editor.datatables.net/generator
 */

// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Mjoin,
	DataTables\Editor\Options,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate;

// The following statement can be removed after the first run (i.e. the database
// table has been created). It is a good idea to do this to help improve
// performance.
$db->sql( "CREATE TABLE IF NOT EXISTS `requested_po` (
	`id` int(10) NOT NULL auto_increment,
	`event` varchar(255),
	`event_date` date,
	`vendor` varchar(255),
	`ticket_group_code_` varchar(255),
	`stock_type` varchar(255),
	`near_term_delivery_method_` varchar(255),
	`internal_po_notes` varchar(255),
	`shipping_notes` varchar(255),
	PRIMARY KEY( `id` )
);" );

// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'requested_po', 'id' )
	->fields(
		Field::inst( 'id' ),
		Field::inst( 'event' ),
		Field::inst( 'event_date' )
			->validator( 'Validate::dateFormat', array( 'format'=>'Y-m-d' ) )
			->getFormatter( 'Format::date_sql_to_format', 'Y-m-d' )
			->setFormatter( 'Format::date_format_to_sql', 'Y-m-d' ),
		Field::inst( 'vendor' ),
		Field::inst( 'ticket_group_code_' ),
		Field::inst( 'stock_type' ),
		Field::inst( 'near_term_delivery_method_' ),
		Field::inst( 'internal_po_notes' ),
		Field::inst( 'shipping_notes' )
	)
	->process( $_POST )
	->json();
