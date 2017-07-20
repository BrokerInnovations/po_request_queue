
/*
 * Editor client script for DB table completed_po
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: 'php/table.completed_po.php',
		table: '#completed_po',
		fields: [
			{
				"label": "Event:",
				"name": "event"
			},
			{
				"label": "Event Date:",
				"name": "event_date",
				"type": "datetime",
				"format": "YYYY-MM-DD"
			},
			{
				"label": "Vendor:",
				"name": "vendor"
			},
			{
				"label": "Section \/ Row \/ Seat:",
				"name": "section__row__seat"
			},
			{
				"label": "Ticket Group Code :",
				"name": "ticket_group_code_"
			},
			{
				"label": "Cost of Inventory :",
				"name": "cost_of_inventory_"
			},
			{
				"label": "On-Hand Date :",
				"name": "on-hand_date_"
			},
			{
				"label": "Stock Type:",
				"name": "stock_type"
			},
			{
				"label": "Near Term Delivery Method :",
				"name": "near_term_delivery_method_"
			},
			{
				"label": "Internal PO Notes:",
				"name": "internal_po_notes"
			},
			{
				"label": "External PO Notes :",
				"name": "external_po_notes_"
			},
			{
				"label": "External PO # :",
				"name": "external_po__"
			},
			{
				"label": "Shipping Notes:",
				"name": "shipping_notes"
			},
			{
				"label": "Payment Method :",
				"name": "payment_method_"
			}
		]
	} );

	var table = $('#completed_po').DataTable( {
		ajax: 'php/table.completed_po.php',
		columns: [
			{
				"data": "event"
			},
			{
				"data": "event_date"
			},
			{
				"data": "vendor"
			},
			{
				"data": "section__row__seat"
			},
			{
				"data": "ticket_group_code_"
			},
			{
				"data": "cost_of_inventory_"
			},
			{
				"data": "on-hand_date_"
			},
			{
				"data": "stock_type"
			},
			{
				"data": "near_term_delivery_method_"
			},
			{
				"data": "internal_po_notes"
			},
			{
				"data": "external_po_notes_"
			},
			{
				"data": "external_po__"
			},
			{
				"data": "shipping_notes"
			},
			{
				"data": "payment_method_"
			}
		],
		select: true,
		lengthChange: false
	} );

	new $.fn.dataTable.Buttons( table, [
		{ extend: "create", editor: editor },
		{ extend: "edit",   editor: editor },
		{ extend: "remove", editor: editor }
	] );

	table.buttons().container().appendTo($('#complete_container')); 
} );

}(jQuery));
