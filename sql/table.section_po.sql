
CREATE TABLE IF NOT EXISTS `section_po` (
	`id` int(10) NOT NULL auto_increment,
	`section_id` varchar(255),
	`section` varchar(255),
	`row` varchar(255),
	`odd` INT(1) UNSIGNED ZEROFILL,
	`seat_low` varchar(255),
	`seat_qty` varchar(255),
	PRIMARY KEY( `id` )
);
