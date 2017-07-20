--
-- Editor SQL for DB table completed_po
-- Created by http://editor.datatables.net/generator
--

CREATE TABLE IF NOT EXISTS `completed_po` (
	`id` int(10) NOT NULL auto_increment,
	`event` varchar(255),
	`event_date` date,
	`vendor` varchar(255),
	`section_id` varchar(255),
	`ticket_group_code_` varchar(255),
	`cost_of_inventory_` varchar(255),
	`on-hand_date_` varchar(255),
	`stock_type` varchar(255),
	`near_term_delivery_method_` varchar(255),
	`internal_po_notes` varchar(255),
	`external_po_notes_` varchar(255),
	`external_po__` varchar(255),
	`shipping_notes` varchar(255),
	`payment_method_` varchar(255),
	PRIMARY KEY( `id` )
);
