--
-- Editor SQL for DB table completed_po
-- Created by http://editor.datatables.net/generator
--

CREATE TABLE IF NOT EXISTS `completed_po` (
	`id` int(10) NOT NULL auto_increment,
	`date_requested` date,
	`responsible_user` varchar(255),
	`event` varchar(255),
	`event_date` date,
	`consignment` varchar(255),
	`vendor` varchar(255),
	`quantity` varchar(255),
	`ticket_group_code` varchar(255),
	`cost_of_inventory` varchar(255),
	`on_hand_date` date,
	`stock_type` varchar(255),
	`near_term_delivery_method` varchar(255),
	`internal_po_notes` varchar(255),
	`external_po_notes` varchar(255),
	`external_po_num` varchar(255),
	`shipping_notes` varchar(255),
	`payment_method` varchar(255),
	PRIMARY KEY( `id` )
);
