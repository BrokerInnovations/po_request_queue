--
-- Editor SQL for DB table requested_po
-- Created by http://editor.datatables.net/generator
--

CREATE TABLE IF NOT EXISTS `requested_po` (
	`id` int(10) NOT NULL auto_increment,
	`date_requested` date,
	`responsible_user` varchar(255),
	`event` varchar(255),
	`event_date` date,
	`consignment` varchar(255),
	`vendor` varchar(255),
	`tickets_number` varchar(255),
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
