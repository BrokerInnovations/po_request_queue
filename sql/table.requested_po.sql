--
-- Editor SQL for DB table requested_po
-- Created by http://editor.datatables.net/generator
--

CREATE TABLE IF NOT EXISTS `requested_po` (
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
);
