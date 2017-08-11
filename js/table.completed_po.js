
/*
 * Editor client script for DB table completed_po
 * Created by http://editor.datatables.net/generator
 */

(function($){
var sectionRule = '';
$(document).ready(function() {

	var completedTable = $('#completed_po').DataTable( {
		scrollCollapse: true,
		scrollX: true,
		scrollY: "300px",
		paging: false,
		ajax: 'php/table.completed_po.php',
		columns: [

						{
							"data": "id"
						},
						{
							"data": "date_requested"
						},
						{
							"data": "responsible_user"
						},
						{
							"data": "event"
						},
						{
							"data": "event_date"
						},
						{
			        "data":   "consignment",
			        "className": "dt-body-center"
			      },
						{
							"data": "vendor"
						},
						{
							"data": "quantity"
						},
						{
							"data": "ticket_group_code"
						},
						{
							"data": "cost_of_inventory"
						},
						{
							"data": "on_hand_date"
						},
						{
							"data": "stock_type"
						},
						{
							"data": "near_term_delivery_method"
						},
						{
							"data": "internal_po_notes"
						},
						{
							"data": "external_po_notes"
						},
						{
							"data": "external_po_num"
						},
						{
							"data": "shipping_notes"
						},
						{
							"data": "payment_method"
						}
		],
		select: true,
		lengthChange: false
	} );

	completedTable.on( 'select', function () {
		sectionTable.ajax.reload();
	});

	completedTable.on( 'deselect', function () {
		sectionTable.ajax.reload();
	});


	var sectionEditor = new $.fn.dataTable.Editor( {
		ajax: 'php/table.completed_po_section.php',
		table: '#completed_po_section',
		fields: [
			{
				"label": "Related PO Id",
				"name": "po_id"
			},
			{
				"label": "Section",
				"name": "section"
			},
			{
				"label": "Row",
				"name": "row"
			},
			{
        "label":     "Odd:",
        "name":      "odd",
        "type":      "checkbox",
        "separator": "|",
        "options":   [
            { "label": '', "value": 1 }
        ]
      },
			{
				"label": "Lower Seat #",
				"name": "seat_low"
			},
			{
				"label": "Seat Qty",
				"name": "seat_qty"
			}
		]
	} );

	var sectionTable = $('#completed_po_section').DataTable( {
		dom: 'fRtip',
		scrollCollapse: true,
		scrollX: true,
		scrollY: "300px",
		paging: false,
		ajax: {
        url: 'php/table.completed_po_section.php',
        type: 'post',
        data: function ( d ) {
            var selected = completedTable.row( { selected: true } );
            if ( selected.any() ) {
							d.id = selected.data().id;
							sectionRule = selected.data().id;
           }
        }
    },
		columns: [
			{
				"data": "po_id", visible: 0
			},
			{
				"data": "section"
			},
			{
				"data": "row"
			},
			{
        "data":   "odd",
        render: function ( data, type, row ) {
            if ( type === 'display' ) {
                return '<input type="checkbox" class="editor-active">';
            }
            return data;
        },
        "className": "dt-body-center"
      },
			{
				"data": "seat_low"
			},
			{
				"data": "seat_qty"
			}
		],
		select: {
        style: 'multiple'
    },
		lengthChange: false,
		rowCallback: function ( row, data ) {
        // Set the checked state of the checkbox in the table
      $('input.editor-active', row).prop( 'checked', data.odd == 1 );
    }
	} );

} );

}(jQuery));
