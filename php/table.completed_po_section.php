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
$db->sql( "CREATE TABLE IF NOT EXISTS `completed_po_section` (
	`id` int(10) NOT NULL auto_increment,
	`po_id` varchar(255),
	`section` varchar(255),
	`row` varchar(255),
	`odd` INT(1) UNSIGNED ZEROFILL,
	`seat_low` varchar(255),
	`seat_qty` varchar(255),
	PRIMARY KEY( `id` )
);" );

if ( ! isset($_POST['id']) || ! is_numeric($_POST['id']) ) {
    echo json_encode( [ "data" => [] ] );
    //json_encode( array( "data" => array() ) );
}
else {
	// Build our Editor instance and process the data coming from _POST
	Editor::inst( $db, 'completed_po_section', 'id' )
		->fields(
			Field::inst( 'po_id' ),
			Field::inst( 'section' ),
			Field::inst( 'row' ),
			Field::inst( 'odd' ),
			Field::inst( 'seat_low' ),
			Field::inst( 'seat_qty' )
		)
	  ->where( 'po_id', $_POST['id'] )
		->process( $_POST )
		->json();
}
