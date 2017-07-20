
CREATE TABLE IF NOT EXISTS `section_po` (
	`id` int(10) NOT NULL auto_increment,
	`section_id` varchar(255),
	`section` varchar(255),
	`row` varchar(255),
	`seat` varchar(255),
	PRIMARY KEY( `id` )
);
